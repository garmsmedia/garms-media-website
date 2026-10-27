-- GARMS MEDIA — remove public API access to contact form leads.
-- Supabase grants anon and authenticated full privileges on new public tables by
-- default. Leads are written only by the server action (service_role, via
-- SUPABASE_SECRET_KEY), so the public roles need no table privileges at all.
-- RLS stays enabled as a second layer.

revoke all on table public.contact_leads from anon, authenticated;
