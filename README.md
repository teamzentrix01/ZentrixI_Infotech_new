# Agency website (Next.js + PostgreSQL)

Single-folder Next.js 14 (App Router) + Tailwind + PostgreSQL (`pg`).

## Run
1. `npm install`
2. Create a database: `createdb agency` (or any name)
3. Edit `.env` → set `DATABASE_URL`
4. `npm run db:setup`   (creates tables + sample data)
5. `npm run dev`  → http://localhost:3000

## Customize
- Brand, nav, services, FAQs: `lib/site.js`
- Projects, blog posts, testimonials: tables `projects`, `posts`, `testimonials`
- Contact form submissions: table `leads` (`SELECT * FROM leads ORDER BY created_at DESC;`)
- Colors: `tailwind.config.js`

## Production
`npm run build && npm start`
