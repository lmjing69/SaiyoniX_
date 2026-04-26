-- Secure the public Inquiry table for Supabase/PostgREST exposure
-- without breaking the existing server-side Prisma workflow.
--
-- Why this shape:
-- 1. Enable RLS so PostgREST requests are subject to row policies.
-- 2. Revoke direct table privileges from Supabase client roles.
-- 3. Do not FORCE RLS here, because this app currently uses a direct
--    database connection via Prisma and we do not want to block that flow.

ALTER TABLE public."Inquiry" ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public."Inquiry" FROM anon;
REVOKE ALL ON TABLE public."Inquiry" FROM authenticated;

