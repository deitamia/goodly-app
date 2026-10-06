# Ports and service ownership

2026-10-06 · **Approved local allocation: Port 3000 & Supabase Free Tier.**

## Approved Local Service Inventory (Windows 2026-10-06)

| Service Role | Host Binding | Endpoint / Target | Resource Owner | Status |
| --- | --- | --- | --- | --- |
| **Goodly Web App & API** | `127.0.0.1:3000` | `http://localhost:3000` | Goodly Local | **Approved & Available** |
| **PostgreSQL Database** | Remote HTTPS/WSS/Pooler | Supabase Free Tier Project (`*.supabase.co:5432` / Pooler) | Goodly Dedicated | **Approved (Supabase)** |
| **Authentication Service** | Remote HTTPS | Supabase Auth API (`*.supabase.co/auth/v1`) | Goodly Dedicated | **Approved (Supabase)** |
| **Image Storage** | Remote HTTPS | Supabase Storage (`*.supabase.co/storage/v1`) | Goodly Dedicated | **Approved (Supabase)** |
| **Email Delivery (Auth/Reset)**| Built-in / SMTP | Supabase Auth Email Delivery | Goodly Dedicated | **Approved (Supabase)** |

Do not add Redis, a queue, or extra infrastructure. The accepted translation operation has no background queue.

## Allocation procedure

1. Verified listener inventory on Windows: Port 3000 is unallocated and listening on `127.0.0.1`.
2. Supabase Free Tier provides dedicated cloud PostgreSQL, Auth, and Storage with HTTPS endpoints, requiring zero local Docker overhead on Windows.
3. Configure `.env.local` directly with Supabase project URL, Anon key, Service Role key, and database connection string.
4. If Port 3000 becomes occupied, fail clearly with a diagnostic message rather than auto-switching ports.
