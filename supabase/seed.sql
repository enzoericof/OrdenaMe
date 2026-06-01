insert into public.plans (slug, name, habit_limit, goal_limit, price_pyg)
values
  ('basic', 'Plan Basico', 20, 30, 50000),
  ('productivity', 'Plan Productividad', 50, 50, 100000)
on conflict (slug) do update
set
  name = excluded.name,
  habit_limit = excluded.habit_limit,
  goal_limit = excluded.goal_limit,
  price_pyg = excluded.price_pyg;

-- Demo setup suggestion:
-- 1. Create a user manually in Supabase Auth.
-- 2. Log in once so the trigger creates the profile row.
-- 3. Update the profile to the desired plan if needed:
--    update public.profiles set plan_slug = 'basic' where user_id = 'USER_UUID';
