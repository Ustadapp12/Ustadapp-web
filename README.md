# Ustad Website

Marketing website for Ustad (Duolingo-style Quran learning), built with Next.js App Router and configured for static export deployment.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

This project uses:
- Static export mode (`output: "export"`)
- Built-in metadata API for SEO
- `app/robots.ts` and `app/sitemap.ts`
- Route-level metadata for key pages

## Deploy to Hostinger (static hosting)

1. Set your live domain for metadata generation:
   - Create `.env.local`
   - Add `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
2. Build static files:
   ```bash
   npm run build
   ```
3. Upload contents of the generated `out/` folder to Hostinger `public_html/`.
4. Ensure the domain points to Hostinger and SSL is enabled.
5. Verify these URLs live on production:
   - `/`
   - `/sitemap.xml`
   - `/robots.txt`
   - `/features/`, `/pricing/`, `/about/`

## Important content to replace before launch

- Real App Store / Play Store links in `app/download/page.tsx`
- Real contact emails in `app/contact/page.tsx` and `app/careers/page.tsx`
- Final legal text in policy pages
- Live domain in `NEXT_PUBLIC_SITE_URL`
