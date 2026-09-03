# Arahant Backend

Standalone Express + MySQL API that powers the "Get a Call Back" form on the frontend.

## Setup

1. `cd backend && npm install`
2. Copy `.env.example` to `.env` if you don't already have one, and fill in `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`.
3. Create the database and table: `mysql -u <user> -p < schema.sql`
4. `npm run dev` (or `npm start`) — server listens on `PORT` (default `5000`).

The frontend calls this server at the URL set in its own `NEXT_PUBLIC_API_URL` env var.

## Endpoints

- `POST /api/callback-request` — body `{ name, email, phone, time }`. Stores the request in MySQL (`callback_requests` table) and emails a notification via Gmail SMTP.
- `GET /health` — basic liveness check.
