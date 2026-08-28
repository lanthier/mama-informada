import { createClient } from 'contentful'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import { generateSitemap } from './generate-sitemap.js'

// Load environment variables
dotenv.config()

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

// Helper function to convert rich text to HTML
function richTextToHtml(richText) {
  if (!richText || !richText.content) return ''
  
  let html = ''
  
  richText.content.forEach(node => {
    html += processNode(node)
  })
  
  return html
}

function processNode(node) {
  if (!node) return ''
  
  switch (node.nodeType) {
    case 'paragraph':
      return `<p>${processInlineContent(node.content)}</p>\n`
    
    case 'heading-1':
      return `<h1>${processInlineContent(node.content)}</h1>\n`
    
    case 'heading-2':
      return `<h2>${processInlineContent(node.content)}</h2>\n`
    
    case 'heading-3':
      return `<h3>${processInlineContent(node.content)}</h3>\n`
    
    case 'heading-4':
      return `<h4>${processInlineContent(node.content)}</h4>\n`
    
    case 'heading-5':
      return `<h5>${processInlineContent(node.content)}</h5>\n`
    
    case 'heading-6':
      return `<h6>${processInlineContent(node.content)}</h6>\n`
    
    case 'unordered-list':
      return `<ul>\n${node.content.map(item => processNode(item)).join('')}</ul>\n`
    
    case 'ordered-list':
      return `<ol>\n${node.content.map(item => processNode(item)).join('')}</ol>\n`
    
    case 'list-item':
      return `<li>${processInlineContent(node.content)}</li>\n`
    
    case 'blockquote':
      return `<blockquote>${node.content.map(item => processNode(item)).join('')}</blockquote>\n`
    
    case 'hr':
      return '<hr />\n'
    
    case 'hyperlink':
      const url = node.data?.uri || '#'
      return `<a href="${url}">${processInlineContent(node.content)}</a>`
    
    case 'embedded-asset-block':
      // Handle embedded images
      if (node.data?.target?.fields) {
        const file = node.data.target.fields.file
        const title = node.data.target.fields.title || ''
        if (file?.url) {
          return `<img src="https:${file.url}" alt="${title}" />\n`
        }
      }
      return ''
    
    default:
      return ''
  }
}

function processInlineContent(content) {
  if (!content || !Array.isArray(content)) return ''
  
  return content.map(node => {
    if (node.nodeType === 'text') {
      let text = node.value
      
      // Apply marks (bold, italic, etc.)
      if (node.marks && node.marks.length > 0) {
        node.marks.forEach(mark => {
          switch (mark.type) {
            case 'bold':
              text = `<strong>${text}</strong>`
              break
            case 'italic':
              text = `<em>${text}</em>`
              break
            case 'underline':
              text = `<u>${text}</u>`
              break
            case 'code':
              text = `<code>${text}</code>`
              break
            case 'strikethrough':
              text = `<s>${text}</s>`
              break
            case 'superscript':
              text = `<sup>${text}</sup>`
              break
            case 'subscript':
              text = `<sub>${text}</sub>`
              break
          }
        })
      }
      
      return text
    } else if (node.nodeType === 'hyperlink') {
      const url = node.data?.uri || '#'
      return `<a href="${url}">${processInlineContent(node.content)}</a>`
    }
    
    return processNode(node)
  }).join('')
}

// Helper to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '').trim()
}

function addHeadingIdsAndGenerateToc(html) {
  if (!html) {
    return {
      content: '',
      tableOfContents: [],
    }
  }

  const slugCounts = new Map()
  const tableOfContents = []

  const content = html.replace(/<h([12])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs = '', innerHtml = '') => {
    const title = stripHtml(innerHtml)
    if (!title) return match

    const baseId = createSlug(title) || 'section'
    const count = slugCounts.get(baseId) || 0
    slugCounts.set(baseId, count + 1)
    const headingId = count === 0 ? baseId : `${baseId}-${count + 1}`

    tableOfContents.push({
      id: headingId,
      title,
      level: Number(level),
    })

    if (/\sid\s*=/.test(attrs)) {
      return `<h${level}${attrs}>${innerHtml}</h${level}>`
    }

    return `<h${level} id="${headingId}"${attrs}>${innerHtml}</h${level}>`
  })

  return {
    content,
    tableOfContents,
  }
}

async function fetchBlogs() {
  try {
    console.log('Fetching blogs from Contentful...')
    
    const response = await client.getEntries({
      content_type: 'blog',
    })
    
    console.log(`Found ${response.items.length} blog posts`)
    
    // Transform the data
    const blogs = response.items.map(item => {
      const fields = item.fields
      const slug = createSlug(fields.titulo || 'untitled')
      
      // Get image URL if exists
      let imageUrl = '/actividad.jpg' // Default image
      if (fields.imagen?.fields?.file?.url) {
        imageUrl = `https:${fields.imagen.fields.file.url}`
      }
      
      // Format date
      let formattedDate = ''
      if (fields.fecha) {
        const date = new Date(fields.fecha)
        formattedDate = date.toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }
      
      // Convert rich text to HTML
      const richContent = richTextToHtml(fields.contenidoDelBlog)
      const { content, tableOfContents } = addHeadingIdsAndGenerateToc(richContent)
      
      return {
        id: item.sys.id,
        slug,
        title: fields.titulo || '',
        description: fields.descripcion || '',
        image: imageUrl,
        date: formattedDate,
        rawDate: fields.fecha || '',
        content,
        tableOfContents,
        category: 'Blog', // You can extract this from tags if needed
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt
      }
    })
    
    // Sort by date (newest first)
    blogs.sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate))
    
    // Write to JSON file
    const outputPath = path.join(__dirname, '..', 'data', 'blogs.json')
    const outputDir = path.dirname(outputPath)
    
    // Create data directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(blogs, null, 2))
    
    console.log(`✅ Successfully wrote ${blogs.length} blogs to ${outputPath}`)
    
    generateSitemap(blogs)
    
    // Also log the slugs for reference
    console.log('\nBlog slugs:')
    blogs.forEach(blog => {
      console.log(`  - ${blog.slug}`)
    })
    
  } catch (error) {
    console.error('❌ Error fetching blogs:', error.message)
    if (error.response) {
      console.error('Response:', error.response.data)
    }
    process.exit(1)
  }
}

// Run the script
fetchBlogs()



