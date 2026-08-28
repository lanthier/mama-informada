import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SITE_URL = process.env.SITE_URL || 'https://mamainformada.org'

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/acerca', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.9' },
  { path: '/recursos', changefreq: 'monthly', priority: '0.8' },
]

function readJson(relativePath) {
  const filePath = path.join(__dirname, '..', relativePath)

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  ${relativePath} not found, skipping those URLs`)
    return []
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch (error) {
    console.warn(`⚠️  Could not parse ${relativePath}: ${error.message}`)
    return []
  }
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toIsoDate(value) {
  if (!value) return null
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10)
}

function buildUrlEntry({ path: routePath, changefreq, priority, lastmod }) {
  const loc = `${SITE_URL.replace(/\/$/, '')}${routePath}`
  const lines = [`    <loc>${escapeXml(loc)}</loc>`]

  if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`)
  if (changefreq) lines.push(`    <changefreq>${changefreq}</changefreq>`)
  if (priority) lines.push(`    <priority>${priority}</priority>`)

  return `  <url>\n${lines.join('\n')}\n  </url>`
}

export function generateSitemap(blogs) {
  const posts = blogs || readJson(path.join('data', 'blogs.json'))
  const recursos = readJson(path.join('data', 'recursos.json'))

  const blogRoutes = posts
    .filter(post => post?.slug)
    .map(post => ({
      path: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: toIsoDate(post.updatedAt || post.rawDate || post.createdAt),
    }))

  const recursoRoutes = recursos
    .filter(recurso => recurso?.slug)
    .map(recurso => ({
      path: `/recursos/${recurso.slug}`,
      changefreq: 'monthly',
      priority: '0.7',
    }))

  const routes = [...STATIC_ROUTES, ...blogRoutes, ...recursoRoutes]

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(buildUrlEntry),
    '</urlset>',
    '',
  ].join('\n')

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, xml)

  console.log(`✅ Sitemap written with ${routes.length} URLs to ${outputPath}`)

  return { outputPath, count: routes.length }
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)

if (isDirectRun) {
  generateSitemap()
}
