export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      goals: {
        Row: {
          created_at: string;
          deadline: string | null;
          description: string | null;
          id: string;
          status: Database["public"]["Enums"]["goal_status"];
          title: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          deadline?: string | null;
          description?: string | null;
          id?: string;
          status?: Database["public"]["Enums"]["goal_status"];
          title: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          deadline?: string | null;
          description?: string | null;
          id?: string;
          status?: Database["public"]["Enums"]["goal_status"];
          title?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      habit_logs: {
        Row: {
          created_at: string;
          habit_id: string;
          id: string;
          log_date: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          habit_id: string;
          id?: string;
          log_date?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          habit_id?: string;
          id?: string;
          log_date?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      habits: {
        Row: {
          created_at: string;
          frequency: Database["public"]["Enums"]["habit_frequency"];
          id: string;
          is_active: boolean;
          title: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          frequency?: Database["public"]["Enums"]["habit_frequency"];
          id?: string;
          is_active?: boolean;
          title: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          frequency?: Database["public"]["Enums"]["habit_frequency"];
          id?: string;
          is_active?: boolean;
          title?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      plans: {
        Row: {
          created_at: string;
          goal_limit: number;
          habit_limit: number;
          id: string;
          name: string;
          price_pyg: number;
          slug: string;
        };
        Insert: {
          created_at?: string;
          goal_limit: number;
          habit_limit: number;
          id?: string;
          name: string;
          price_pyg: number;
          slug: string;
        };
        Update: {
          created_at?: string;
          goal_limit?: number;
          habit_limit?: number;
          id?: string;
          name?: string;
          price_pyg?: number;
          slug?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          created_at: string;
          full_name: string | null;
          id: string;
          plan_slug: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          full_name?: string | null;
          id?: string;
          plan_slug?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          full_name?: string | null;
          id?: string;
          plan_slug?: string;
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      goal_status: "pending" | "in_progress" | "completed" | "cancelled";
      habit_frequency: "daily" | "weekly";
    };
    CompositeTypes: Record<string, never>;
  };
};

export type Goal = Database["public"]["Tables"]["goals"]["Row"];
export type Habit = Database["public"]["Tables"]["habits"]["Row"];
export type HabitLog = Database["public"]["Tables"]["habit_logs"]["Row"];
export type Plan = Database["public"]["Tables"]["plans"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
