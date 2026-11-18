-- Run this in Supabase SQL Editor. Create admin users in Authentication first.
create table if not exists public.events (
 id uuid primary key default gen_random_uuid(), title text not null, slug text unique not null,
 description text not null, date timestamptz not null, location text,
 poster_url text, registration_url text, status text not null default 'upcoming' check(status in ('upcoming','past')),
 featured boolean not null default false, created_at timestamptz not null default now()
);
create table if not exists public.sessions (
 id uuid primary key default gen_random_uuid(), event_id uuid not null references public.events(id) on delete cascade,
 title text not null, description text not null, speaker_name text, speaker_title text,
 speaker_photo text, speaker_link text, sort_order int not null default 0
);
create table if not exists public.gallery (
 id uuid primary key default gen_random_uuid(), event_id uuid not null references public.events(id) on delete cascade,
 image_url text not null, sort_order int not null default 0
);
alter table public.events enable row level security;
alter table public.sessions enable row level security;
alter table public.gallery enable row level security;
-- Public can read published site content. Writes require an authenticated Supabase user.
create policy "public read events" on public.events for select using (true);
create policy "authenticated manage events" on public.events for all to authenticated using (true) with check (true);
create policy "public read sessions" on public.sessions for select using (true);
create policy "authenticated manage sessions" on public.sessions for all to authenticated using (true) with check (true);
create policy "public read gallery" on public.gallery for select using (true);
create policy "authenticated manage gallery" on public.gallery for all to authenticated using (true) with check (true);
-- Storage: create a PUBLIC bucket named event-media in Supabase Storage.
-- For production, restrict writes to a dedicated admin role rather than all authenticated users.
