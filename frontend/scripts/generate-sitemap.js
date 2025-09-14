/*
  Sitemap generator for Next.js project.

  - Scans `pages` and `src/pages` directories for .js/.jsx/.ts/.tsx files (excluding API and _app/_document/_error/_app etc).
  - Reads optional dynamic routes from `scripts/sitemap-routes.json` with format { "/products/[id]": ["1","2"] }
  - Uses SITE_URL env var or defaults to http://localhost:3000
  - Writes `public/sitemap.xml`

  Usage:
    SITE_URL="https://example.com" node scripts/generate-sitemap.js
    or (Windows cmd.exe): set SITE_URL=https://example.com && node scripts/generate-sitemap.js
*/

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const pagesDirs = [path.join(projectRoot, 'pages'), path.join(projectRoot, 'src', 'pages')];
const outPath = path.join(projectRoot, 'public', 'sitemap.xml');
const dynamicRoutesFile = path.join(__dirname, 'sitemap-routes.json');
const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';

function isPageFile(file) {
  return /\.(js|jsx|ts|tsx)$/i.test(file);
}

function normalizeRoute(filePath, baseDir) {
  // remove baseDir and extension, convert index to /
  let rel = path.relative(baseDir, filePath).replace(/\\\\/g, '/');
  rel = rel.replace(/\.(js|jsx|ts|tsx)$/i, '');
  if (rel.endsWith('/index')) rel = rel.replace(/\/index$/, '');
  // ignore special Next.js files
  // ignore special Next.js files like _app, _document, _error, and api routes
  if (rel.startsWith('api/') || rel.startsWith('_app') || rel.startsWith('_document') || rel.startsWith('_error')) return null;
  // root
  return '/' + rel;
}

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  items.forEach((item) => {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      // ignore folders that start with _ (Next.js special) or .
      if (item.startsWith('_') || item.startsWith('.')) return;
      walk(full, callback);
    } else {
      callback(full);
    }
  });
}

function collectStaticRoutes() {
  const routes = new Set();
  pagesDirs.forEach((dir) => {
    if (!fs.existsSync(dir)) return;
    walk(dir, (file) => {
      if (!isPageFile(file)) return;
      const route = normalizeRoute(file, dir);
      if (!route) return;
      routes.add(route === '/index' ? '/' : route);
    });
  });
  return Array.from(routes).sort();
}

function collectDynamicRoutePatterns() {
  const patterns = new Set();
  pagesDirs.forEach((dir) => {
    if (!fs.existsSync(dir)) return;
    walk(dir, (file) => {
      if (!isPageFile(file)) return;
      const route = normalizeRoute(file, dir);
      if (!route) return;
      // Check if the route contains dynamic segments like [slug] or [...slug]
      if (route.includes('[') && route.includes(']')) {
        patterns.add(route);
      }
    });
  });
  return Array.from(patterns).sort();
}

function expandDynamicRoutes(routes, dynamicRoutes) {
  const expanded = new Set(routes);
  if (!dynamicRoutes || typeof dynamicRoutes !== 'object') return expanded;
  Object.keys(dynamicRoutes).forEach((pattern) => {
    const values = dynamicRoutes[pattern];
    if (!Array.isArray(values)) return;
    // pattern like /products/[id] or /blog/[...slug]
    values.forEach((v) => {
      let url = pattern;
      // handle catch-all
      if (pattern.includes('[...')) {
        // expect value to be array or string with slashes
        const val = Array.isArray(v) ? v.join('/') : String(v);
        url = pattern.replace(/\[\.\.\.\w+\]/, val);
      } else {
        // replace each [param] sequentially with parts from v (if array) or single value
        const parts = Array.isArray(v) ? v : [v];
        let i = 0;
        url = pattern.replace(/\[\w+\]/g, () => parts[i++] === undefined ? '' : parts[i - 1]);
      }
      // remove any leftover brackets
      url = url.replace(/\[(?:\.\.\.)?\w+\]/g, '');
      // collapse multiple slashes
      url = url.replace(/\/+/g, '/');
      if (!url.startsWith('/')) url = '/' + url;
      expanded.add(url);
    });
  });
  return Array.from(expanded).sort();
}

function buildSitemap(urls) {
  const now = new Date().toISOString();
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];
  urls.forEach((u) => {
    xml.push('  <url>');
    xml.push(`    <loc>${SITE_URL.replace(/\/+$/, '')}${u}</loc>`);
    xml.push(`    <lastmod>${now}</lastmod>`);
    xml.push('    <changefreq>weekly</changefreq>');
    xml.push('    <priority>0.5</priority>');
    xml.push('  </url>');
  });
  xml.push('</urlset>');
  return xml.join('\n');
}

function readDynamicRoutesFile() {
  if (!fs.existsSync(dynamicRoutesFile)) return null;
  try {
    const raw = fs.readFileSync(dynamicRoutesFile, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Could not parse dynamic routes file:', err.message);
    return null;
  }
}

function ensurePublicDir() {
  const pub = path.join(projectRoot, 'public');
  if (!fs.existsSync(pub)) fs.mkdirSync(pub, { recursive: true });
}

function main() {
  console.log('Collecting static routes...');
  const staticRoutes = collectStaticRoutes();
  console.log(`Found ${staticRoutes.length} static routes`);

  console.log('Collecting dynamic route patterns...');
  const dynamicRoutePatterns = collectDynamicRoutePatterns();
  console.log(`Found ${dynamicRoutePatterns.length} dynamic route patterns:`, dynamicRoutePatterns);

  const dynamic = readDynamicRoutesFile();
  if (dynamic) {
    console.log('Loaded dynamic routes from', dynamicRoutesFile);
  }

  const all = expandDynamicRoutes(staticRoutes, dynamic);
  console.log(`Total routes in sitemap: ${all.length}`);

  ensurePublicDir();
  const sitemap = buildSitemap(all);
  fs.writeFileSync(outPath, sitemap, 'utf8');
  console.log('Wrote sitemap to', outPath);
}

if (require.main === module) main();

module.exports = {
  collectStaticRoutes,
  expandDynamicRoutes,
  buildSitemap,
};
