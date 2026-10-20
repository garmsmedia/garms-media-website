-- GARMS MEDIA — contact form leads.
-- Run this in the Supabase SQL editor (or with `supabase db push`) before
-- setting SUPABASE_URL and SUPABASE_SECRET_KEY in Vercel.

create table if not exists public.contact_leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  full_name   text not null check (char_length(full_name) between 2 and 100),
  email       text not null check (char_length(email) <= 254),
  brand       text not null check (char_length(brand) between 1 and 120),
  website     text check (website is null or char_length(website) <= 200),
  service     text not null,
  message     text not null check (char_length(message) between 10 and 2000),
  consent     boolean not null check (consent = true),
  consent_at  timestamptz not null,
  source      text not null default 'website',
  status      text not null default 'new'
);

create index if not exists contact_leads_created_at_idx on public.contact_leads (created_at desc);

-- Row Level Security ON with no policies: the public (anon) key can neither read
-- nor write leads. Only the server, using the secret key, can insert.
alter table public.contact_leads enable row level security;
