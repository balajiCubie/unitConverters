Sitemap generator

This script generates `public/sitemap.xml` by scanning `pages/` and `src/pages/`.

Usage

- Provide SITE_URL via environment variable (recommended):

  Windows (cmd.exe):

    set SITE_URL=https://example.com && node scripts/generate-sitemap.js

  macOS / Linux:

    SITE_URL=https://example.com node scripts/generate-sitemap.js

- If you have dynamic routes, edit `scripts/sitemap-routes.json`.
  - For single param routes like `/products/[id]` provide an array of values: `["1","2"]`.
  - For routes with multiple params (rare) provide arrays of values, e.g. `{"/x/[a]/[b]": [["1","2"],["3","4"]]}`.
  - For catch-all `/docs/[...slug]` provide arrays or nested arrays representing segments, e.g. `[["getting-started"],["guides","advanced"]]`.

- Run via npm script:

    npm run generate-sitemap

Notes

- The script ignores `pages/api`, files/folders starting with `_`, and Next.js special files like `_app.js`.
- Output file is `public/sitemap.xml`.
- You can integrate this into your CI pipeline after `next build` to publish an up-to-date sitemap.
