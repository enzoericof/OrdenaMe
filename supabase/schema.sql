create extension if not exists "pgcrypto";

create type public.habit_frequency as enum ('daily', 'weekly');
create type public.goal_status as enum ('pending', 'in_progress', 'completed', 'cancelled');

create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  habit_limit integer not null check (habit_limit >= 0),
  goal_limit integer not null check (goal_limit >= 0),
  price_pyg integer not null check (price_pyg >= 0),
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,
  full_name text,
  plan_slug text not null references public.plans (slug) default 'basic',
  created_at timestamptz not null default now()
);

create table if not exists public.habits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  title text not null check (char_length(trim(title)) between 2 and 120),
  frequency public.habit_frequency not null default 'daily',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.habit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  habit_id uuid not null references public.habits (id) on delete cascade,
  log_date date not null default current_date,
  created_at timestamptz not null default now(),
  unique (user_id, habit_id, log_date)
);

create table if not exists public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  title text not null check (char_length(trim(title)) between 2 and 140),
  description text,
  status public.goal_status not null default 'pending',
  deadline date,
  created_at timestamptz not null default now()
);

create index if not exists habits_user_id_idx on public.habits (user_id);
create index if not exists habit_logs_user_id_idx on public.habit_logs (user_id, log_date desc);
create index if not exists goals_user_id_idx on public.goals (user_id, status);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (user_id, full_name, plan_slug)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)),
    'basic'
  )
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.plans enable row level security;
alter table public.profiles enable row level security;
alter table public.habits enable row level security;
alter table public.habit_logs enable row level security;
alter table public.goals enable row level security;

drop policy if exists "plans readable by authenticated users" on public.plans;
create policy "plans readable by authenticated users"
on public.plans
for select
to authenticated
using (true);

drop policy if exists "profiles are viewable by owner" on public.profiles;
create policy "profiles are viewable by owner"
on public.profiles
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "profiles are insertable by owner" on public.profiles;
create policy "profiles are insertable by owner"
on public.profiles
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "profiles are updatable by owner" on public.profiles;
create policy "profiles are updatable by owner"
on public.profiles
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "habits are viewable by owner" on public.habits;
create policy "habits are viewable by owner"
on public.habits
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "habits are insertable by owner" on public.habits;
create policy "habits are insertable by owner"
on public.habits
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "habits are updatable by owner" on public.habits;
create policy "habits are updatable by owner"
on public.habits
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "habits are deletable by owner" on public.habits;
create policy "habits are deletable by owner"
on public.habits
for delete
to authenticated
using (user_id = auth.uid());

drop policy if exists "habit logs are viewable by owner" on public.habit_logs;
create policy "habit logs are viewable by owner"
on public.habit_logs
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "habit logs are insertable by owner" on public.habit_logs;
create policy "habit logs are insertable by owner"
on public.habit_logs
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "habit logs are deletable by owner" on public.habit_logs;
create policy "habit logs are deletable by owner"
on public.habit_logs
for delete
to authenticated
using (user_id = auth.uid());

drop policy if exists "goals are viewable by owner" on public.goals;
create policy "goals are viewable by owner"
on public.goals
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "goals are insertable by owner" on public.goals;
create policy "goals are insertable by owner"
on public.goals
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "goals are updatable by owner" on public.goals;
create policy "goals are updatable by owner"
on public.goals
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "goals are deletable by owner" on public.goals;
create policy "goals are deletable by owner"
on public.goals
for delete
to authenticated
using (user_id = auth.uid());
