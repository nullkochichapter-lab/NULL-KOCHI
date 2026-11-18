# NULL KOCHI — community website starter

A responsive Next.js 15 website with a public events experience, event detail pages, speaker/session and past-event gallery data models, Supabase authentication, and an initial admin console for publishing/deleting events.

## Included
- Public homepage: featured upcoming event, upcoming event cards, past event cards, about and social links.
- Event detail route: description, registration link, session/speaker profiles and past-event photo gallery (reads from Supabase).
- Admin login using Supabase email/password.
- Admin console: event creation, poster upload to Supabase Storage, event listing and deletion; add speaker sessions and upload multiple past-event gallery photos.
- Dark, green-accented responsive visual system.

## Setup
1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase/schema.sql`.
3. In Storage, create a **public** bucket named `event-media`.
4. Create an admin account in Supabase Authentication → Users (email/password).
5. Copy `.env.example` to `.env.local`, then fill in the Project URL and anon/public key from Supabase → Project Settings → API.
6. Install and run:
   ```bash
   npm install
   npm run dev
   ```
7. Open `http://localhost:3000`, and use `/login` to access the admin console.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as Vercel environment variables.
4. Deploy. Add the production domain to Supabase Authentication → URL Configuration → Site URL and Redirect URLs.

## Before launch
- Replace sample social destinations in `app/page.tsx` with official NULL KOCHI LinkedIn, Instagram, WhatsApp Community and WhatsApp Group URLs.
- Add real event posters and event content through the admin console.
- Add sessions and gallery rows in Supabase (or extend the admin UI to manage these directly).
- Tighten the write policies in `supabase/schema.sql` to a dedicated admin role if multiple authenticated users will exist. Current starter policy permits any authenticated Supabase user to write.
- Add rate limiting, metadata/OG images, analytics and backups before production use.

## Important scope note
This is a runnable foundation, not a fully production-hardened deployment. The public pages render speaker/session and gallery data when present. The admin console manages events, poster uploads, speaker/session details and past-event gallery photos. Registration currently links to an external registration URL supplied for each event; it does not yet collect registrations inside the site.
