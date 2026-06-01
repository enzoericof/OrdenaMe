# OrdenaMe

MVP de un sistema web privado de productividad personal, enfocado en el **Plan Básico**:

- login privado
- dashboard
- hábitos
- metas
- límites por plan
- seguridad con Row Level Security

## Stack

- Next.js 16
- React 19
- Supabase Auth + Postgres
- Vercel para deploy

## Configuración local

1. Copia las variables de ejemplo:

```bash
cp .env.example .env.local
```

2. Completa:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`NEXT_PUBLIC_SITE_URL` se usa para el flujo de recuperación de contraseña.

3. Aplica el esquema SQL en Supabase:

- [supabase/schema.sql](/C:/Users/enzoe/Documents/Codex/Ordename/supabase/schema.sql)
- [supabase/seed.sql](/C:/Users/enzoe/Documents/Codex/Ordename/supabase/seed.sql)

4. Instala dependencias y levanta el proyecto:

```bash
npm install
npm run dev
```

## Flujo inicial recomendado

- Crear usuarios manualmente desde Supabase Auth
- Dejar que el trigger cree `profiles`
- Asignar `plan_slug` manualmente si quieres cambiar de plan
- Entrar al panel desde `/login`

## Rutas principales

- `/` landing comercial
- `/login` acceso privado
- `/forgot-password` recuperación
- `/reset-password` nueva contraseña
- `/panel` dashboard
- `/panel/habits` gestión de hábitos
- `/panel/goals` gestión de metas

## Que incluye este MVP

- aislamiento multiusuario con `user_id`
- tablas `profiles`, `plans`, `habits`, `habit_logs`, `goals`
- RLS aplicada en todas las tablas del usuario
- límite de 20 hábitos activos y 30 metas activas para plan básico
- acciones del servidor para auth, CRUD y seguimiento diario

## Verificacion

```bash
npm run lint
npm run build
```
