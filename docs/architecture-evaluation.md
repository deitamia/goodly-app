# Goodly — Technical Architecture Evaluation (Unit 00)

Date: 2026-10-06 · Status: Architectural Evaluation Matrix for Selection.

This document provides a systematic evaluation of technical stack candidates for implementing the Goodly MVP against the core invariants and hosting constraints established in the project preparation pack.

---

## 1. Stack Evaluation Matrix

| Capability / Requirement | Option A: Next.js (App Router + TS) | Option B: Vite + Fastify/Express (TS) | Option C: Remix / React Router v7 |
| :--- | :--- | :--- | :--- |
| **SEO & Social Sharing** (OpenGraph, meta tags for public catalog) | **Native SSR/SSG**: Built-in dynamic metadata per language and listing. | **Requires extra setup**: SPA needs SSR or prerendering layer. | **Native SSR**: Clean loader-based metadata. |
| **15-Language Routing** | Built-in middleware or sub-path routing (`/[lang]/products`). | Requires custom routing & cookie/header matching logic. | Standardized URL prefix / loader patterns. |
| **Synchronous Translation Execution** | Route Handlers / Server Actions with controlled timeouts. | Dedicated REST endpoints with explicit timeout handling. | Action functions with explicit timeout handling. |
| **Image Processing (Sharp)** | Server-side optimization in Route Handlers or Next Image. | Direct Sharp integration in upload controller. | Server-side Sharp integration in actions. |
| **Deployment Simplicity (Hostinger VPS / Node)** | Standard standalone Node.js server container/process. | Two separate processes (API + static assets) or reverse proxy. | Standard standalone Node.js server process. |
| **Local Isolation & Footprint** | Single port for public site, panels, and server API. | Requires 2 separate ports (frontend + backend). | Single port for public site and API routes. |

---

## 2. Recommended Database & Data Access Layer

### Recommended: PostgreSQL + Drizzle ORM
- **Rationale**:
  - **Type-Safety & Performance**: Drizzle ORM generates zero-overhead TypeScript types directly from relational schemas.
  - **Explicit Migrations**: Pure SQL migration files that can be reviewed and guarded before application.
  - **Target Guards**: Easy to wrap in pre-flight connection verifiers that check database names (`goodly_dev`, `goodly_test`) before allowing mutations.
  - **Exact Money Representation**: Native support for `numeric(10, 2)` or integer cents for price storage.
  - **JSONB Capabilities**: Efficient storage and querying of multi-language translation dictionaries and dynamic availability lists.

---

## 3. Recommended Supporting Libraries & Tools

| Component | Recommended Tool | Rationale |
| :--- | :--- | :--- |
| **Image Optimization** | `sharp` | High-performance WebP conversion, auto-scaling to max dimensions, strips private EXIF metadata. |
| **Authentication & Sessions** | `lucia` / `iron-session` / `argon2` | Lightweight, server-enforced sessions using secure `HttpOnly` cookies without vendor lock-in. |
| **Email Testing (Local)** | `Mailpit` (or similar) | Local SMTP catcher with web UI for testing verification, password reset, and moderation emails without external internet access. |
| **Translation Engine** | Pluggable Adapter (Google / DeepL / Gemini API) | Abstracted translation service client implementing strict single-attempt synchronous timeouts with fallback. |
| **Validation** | `zod` | End-to-end schema validation for forms, API inputs, and nickname character constraints. |

---

## 4. Production Hosting Considerations (Hostinger VPS / Node)

1. **Standalone Node.js Runtime**: Run using PM2 or Docker container with explicit resource limits.
2. **Persistent Storage**: Dedicated local directory or S3-compatible bucket for uploaded profile and listing photos.
3. **Automated Scheduled Tasks**: Standard Linux `cron` or internal Node scheduler for executing the 8 distinct 30-day retention cleanup jobs.
4. **SSL / Reverse Proxy**: Nginx or Caddy handling TLS certificates and forwarding to the local application port.
