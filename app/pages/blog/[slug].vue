
<script setup>
import blogsData from '../../../data/blogs.json'

const route = useRoute()
const slug = route.params.slug

// Load blogs from JSON file and find the matching blog
const blog = blogsData.find(b => b.slug === slug)

// If blog exists, use it, otherwise use fallback
let blogPosts = {}
if (blog) {
  blogPosts[slug] = {
    title: blog.title,
    image: blog.image,
    date: blog.date,
    category: blog.category,
    content: blog.content,
    tableOfContents: blog.tableOfContents || [],
    description: blog.description || blog.title
  }
}

// Use loaded blog if available, otherwise show not found
const post = blogPosts[slug] || {
  title: 'Blog no encontrado',
  description: 'Lo sentimos, este artículo no existe.',
  content: '<p>Lo sentimos, este artículo no existe.</p>',
  image: '/actividad.jpg'
}

function createAnchorId(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function buildContentWithToc(content) {
  if (!content) {
    return {
      contentWithAnchors: '',
      tableOfContents: [],
    }
  }

  const slugCounts = new Map()
  const tableOfContents = []

  const contentWithAnchors = content.replace(/<h([1-3])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs = '', innerHtml = '') => {
    const title = innerHtml.replace(/<[^>]*>/g, '').trim()
    if (!title) return match

    const originalLevel = Number(level)
    const headingLevel = originalLevel === 1 ? 2 : originalLevel
    const existingIdMatch = attrs.match(/\sid\s*=\s*["']([^"']+)["']/i)
    let headingId = existingIdMatch?.[1]

    if (!headingId) {
      const baseId = createAnchorId(title) || 'section'
      const count = slugCounts.get(baseId) || 0
      slugCounts.set(baseId, count + 1)
      headingId = count === 0 ? baseId : `${baseId}-${count + 1}`
    }

    tableOfContents.push({ id: headingId, title, level: originalLevel })

    const attrsWithoutId = attrs.replace(/\sid\s*=\s*["'][^"']+["']/i, '')
    return `<h${headingLevel} id="${headingId}"${attrsWithoutId}>${innerHtml}</h${headingLevel}>`
  })

  return {
    contentWithAnchors,
    tableOfContents,
  }
}

const { contentWithAnchors, tableOfContents } = buildContentWithToc(post.content)
post.content = contentWithAnchors
post.tableOfContents = tableOfContents

const siteUrl = 'https://mamainformada.org'
const currentUrl = `${siteUrl}/blog/${slug}`

// Ensure image URL is absolute for social sharing
const absoluteImageUrl = post.image.startsWith('http') 
  ? post.image 
  : `${siteUrl}${post.image}`

// Set SEO meta tags
useSeoMeta({
  title: post.title,
  description: post.description || post.title,
  ogTitle: post.title,
  ogDescription: post.description || post.title,
  ogImage: absoluteImageUrl,
  ogUrl: currentUrl,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: post.title,
  twitterDescription: post.description || post.title,
  twitterImage: absoluteImageUrl,
})

// Additional article metadata
useHead({
  link: [
    {
      rel: 'canonical',
      href: currentUrl
    }
  ],
  meta: [
    {
      property: 'article:published_time',
      content: post.rawDate || new Date().toISOString()
    },
    {
      property: 'article:author',
      content: 'Mama Informada'
    },
    {
      property: 'article:section',
      content: post.category || 'Blog'
    }
  ]
})
</script>

<template>
  <div class="blog-detail">
    <!-- Hero Header -->
    <section class="blog-hero">
      <div class="blog-hero-image">
        <img :src="post.image" :alt="post.title" />
        <div class="blog-hero-overlay"></div>
      </div>
      <div class="blog-hero-content">
        <div class="container">
          <span v-if="post.category" class="blog-category">{{ post.category }}</span>
          <h1 class="blog-hero-title">{{ post.title }}</h1>
          <p v-if="post.date" class="blog-date">{{ post.date }}</p>
        </div>
      </div>
    </section>
    
    <!-- Blog Content -->
    <section class="blog-content">
      <div class="container">
        <nav v-if="post.tableOfContents && post.tableOfContents.length > 0" class="toc" aria-label="Indice del articulo">
          <h2 class="toc-title">Indice de contenidos</h2>
          <ul class="toc-list">
            <li
              v-for="item in post.tableOfContents"
              :key="item.id"
              :class="['toc-item', { 'is-h2': item.level === 2, 'is-h3': item.level === 3 }]"
            >
              <a :href="`#${item.id}`">{{ item.title }}</a>
            </li>
          </ul>
        </nav>

        <div class="content" v-html="post.content"></div>

        <BeehiivSubscribeForm />
        
        <div class="blog-footer">
          <NuxtLink to="/blog" class="back-button">
            ← Volver a todos
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- CTA Footer -->
    <section class="blog-cta-footer">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿Tienes preguntas sobre tu embarazo o el desarrollo de tu bebé?</h2>
          <p class="cta-description">Contáctanos para obtener información personalizada y recursos educativos.</p>
          <a href="mailto:mamainformadaa+contact@gmail.com" class="cta-button">
            Contactar para Consulta
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-detail {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  min-height: 100vh;
}

/* Hero Section */
.blog-hero {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.blog-hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.blog-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
}

.blog-hero-content {
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 3rem;
  color: white;
  z-index: 1;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.blog-category {
  display: inline-block;
  background: rgb(135,168,149);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.blog-hero-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.blog-date {
  font-size: 1.125rem;
  opacity: 0.9;
  font-weight: 300;
}

/* Blog Content */
.blog-content {
  padding: 4rem 0;
  background: white;
}

.content {
  line-height: 1.8;
  color: #333;
  font-size: 1.125rem;
}

.toc {
  margin-bottom: 2rem;
  padding: 1.25rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fafafa;
}

.toc-title {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  font-weight: 600;
}

.toc-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.toc-item {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
}

.toc-item::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0.05rem;
  color: #1e4238;
}

.toc-item.is-h2 {
  padding-left: 2rem;
}

.toc-item.is-h2::before {
  left: 1rem;
  opacity: 0.85;
}

.toc-item.is-h3 {
  padding-left: 3rem;
}

.toc-item.is-h3::before {
  left: 2rem;
  opacity: 0.7;
}

.toc-item a {
  color: #1e4238;
  text-decoration: none;
}

.toc-item.is-h2 a {
  font-size: 0.95rem;
}

.toc-item.is-h3 a {
  font-size: 0.9rem;
}

.toc-item a:hover {
  text-decoration: underline;
}

.content :deep(p) {
  margin-bottom: 1.5rem;
}

.content :deep(h2) {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3) {
  scroll-margin-top: 110px;
}

.content :deep(ul) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.content :deep(li) {
  margin-bottom: 0.75rem;
}

.content :deep(strong) {
  font-weight: 600;
  color: rgb(135,168,149);
}

.blog-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e5e5;
}

.back-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: rgb(135,168,149);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #1e4238;
  transform: translateY(-2px);
}

/* CTA Footer Section */
.blog-cta-footer {
  background: linear-gradient(135deg, rgb(135,168,149) 0%, #1e4238 100%);
  padding: 4rem 0;
  margin-top: 4rem;
}

.cta-content {
  text-align: center;
  color: white;
}

.cta-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.cta-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: white;
  color: rgb(135,168,149);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  background: #f8f8f8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-hero {
    height: 400px;
  }
  
  .blog-hero-title {
    font-size: 2rem;
  }
  
  .blog-date {
    font-size: 1rem;
  }
  
  .blog-content {
    padding: 2rem 0;
  }
  
  .content {
    font-size: 1rem;
  }
  
  .content :deep(h2) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  
  .blog-cta-footer {
    padding: 3rem 0;
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
  
  .cta-description {
    font-size: 1rem;
  }
  
  .cta-button {
    font-size: 1rem;
    padding: 0.875rem 2rem;
  }
}
</style>
