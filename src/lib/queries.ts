import { cache } from "react";

import type { Goal, Habit, Plan, Profile } from "@/lib/database.types";
import { getDateDaysAgo, getTodayDate } from "@/lib/utils";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export type DashboardData = {
  activeHabits: Habit[];
  activeGoals: Goal[];
  completedTodayCount: number;
  weeklyCompletionCount: number;
  weeklyProgressPercent: number;
};

export type CurrentUserContext = {
  user: {
    id: string;
    email?: string;
  };
  profile: Profile;
  plan: Plan;
};

export const getCurrentUserContext = cache(async (): Promise<CurrentUserContext | null> => {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return null;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profileRow } = await supabase
    .from("profiles")
    .select("id, user_id, full_name, plan_slug, created_at")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profileRow) {
    return null;
  }

  const { data: planRow } = await supabase
    .from("plans")
    .select("id, slug, name, habit_limit, goal_limit, price_pyg, created_at")
    .eq("slug", profileRow.plan_slug)
    .maybeSingle();

  if (!planRow) {
    return null;
  }

  return {
    user: {
      id: user.id,
      email: user.email,
    },
    profile: profileRow,
    plan: planRow,
  };
});

export async function getDashboardData(userId: string): Promise<DashboardData | null> {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return null;
  }

  const today = getTodayDate();
  const weekStart = getDateDaysAgo(6);

  const [{ data: activeHabits }, { data: activeGoals }, { data: todayLogs }, { data: weekLogs }] =
    await Promise.all([
      supabase
        .from("habits")
        .select("id, user_id, title, frequency, is_active, created_at")
        .eq("user_id", userId)
        .eq("is_active", true)
        .order("created_at", { ascending: false }),
      supabase
        .from("goals")
        .select("id, user_id, title, description, status, deadline, created_at")
        .eq("user_id", userId)
        .in("status", ["pending", "in_progress"])
        .order("created_at", { ascending: false }),
      supabase
        .from("habit_logs")
        .select("id")
        .eq("user_id", userId)
        .eq("log_date", today),
      supabase
        .from("habit_logs")
        .select("id")
        .eq("user_id", userId)
        .gte("log_date", weekStart),
    ]);

  const habits = activeHabits ?? [];
  const goals = activeGoals ?? [];
  const completedTodayCount = todayLogs?.length ?? 0;
  const weeklyCompletionCount = weekLogs?.length ?? 0;
  const weeklyTarget = habits.length === 0 ? 0 : habits.length * 7;
  const weeklyProgressPercent =
    weeklyTarget === 0 ? 0 : Math.min(100, Math.round((weeklyCompletionCount / weeklyTarget) * 100));

  return {
    activeHabits: habits,
    activeGoals: goals,
    completedTodayCount,
    weeklyCompletionCount,
    weeklyProgressPercent,
  };
}

export async function getHabitsPageData(userId: string) {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return null;
  }

  const weekStart = getDateDaysAgo(6);

  const [{ data: habits }, { data: recentLogs }] = await Promise.all([
    supabase
      .from("habits")
      .select("id, user_id, title, frequency, is_active, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false }),
    supabase
      .from("habit_logs")
      .select("id, user_id, habit_id, log_date, created_at")
      .eq("user_id", userId)
      .gte("log_date", weekStart)
      .order("log_date", { ascending: false }),
  ]);

  return {
    habits: habits ?? [],
    recentLogs: recentLogs ?? [],
  };
}

export async function getGoalsPageData(userId: string) {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return null;
  }

  const { data: goals } = await supabase
    .from("goals")
    .select("id, user_id, title, description, status, deadline, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  return goals ?? [];
}
