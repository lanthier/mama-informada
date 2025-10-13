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
    description: blog.description || blog.title
  }
}

// Fallback sample data if blogs.json doesn't exist yet
const fallbackBlogPosts = {
  'nutricion-durante-el-embarazo': {
    title: 'Nutrición Durante el Embarazo',
    description: 'La nutrición durante el embarazo es fundamental para el desarrollo saludable de tu bebé y tu propio bienestar.',
    image: '/actividad.jpg',
    date: '12 de Octubre, 2025',
    category: 'Embarazo',
    content: `
      <p>La nutrición durante el embarazo es fundamental para el desarrollo saludable de tu bebé y tu propio bienestar. Durante estos nueve meses, tu cuerpo necesita nutrientes adicionales para apoyar el crecimiento del bebé.</p>
      
      <h2>Nutrientes Esenciales</h2>
      <p>Durante el embarazo, ciertos nutrientes son especialmente importantes:</p>
      <ul>
        <li><strong>Ácido Fólico:</strong> Crucial para prevenir defectos del tubo neural</li>
        <li><strong>Hierro:</strong> Necesario para producir sangre adicional</li>
        <li><strong>Calcio:</strong> Importante para el desarrollo de huesos y dientes</li>
        <li><strong>Proteína:</strong> Esencial para el crecimiento del bebé</li>
        <li><strong>DHA:</strong> Importante para el desarrollo cerebral</li>
      </ul>
      
      <h2>Alimentos Recomendados</h2>
      <p>Una dieta balanceada durante el embarazo debe incluir una variedad de alimentos nutritivos como frutas, verduras, granos integrales, proteínas magras y productos lácteos.</p>
      
      <h2>Qué Evitar</h2>
      <p>Algunos alimentos deben evitarse durante el embarazo, incluyendo pescado con alto contenido de mercurio, carnes crudas o poco cocidas, y ciertos quesos blandos.</p>
    `
  },
  'primeros-pasos-del-bebe': {
    title: 'Primeros Pasos del Bebé',
    image: '/actividad.jpg',
    date: '10 de Octubre, 2025',
    category: 'Desarrollo',
    content: `
      <p>Los primeros pasos de tu bebé son un hito emocionante en su desarrollo. Cada bebé se desarrolla a su propio ritmo, pero hay maneras en que puedes apoyar su progreso.</p>
      
      <h2>Hitos del Desarrollo Motor</h2>
      <p>Los bebés generalmente siguen esta secuencia de desarrollo:</p>
      <ul>
        <li>2-3 meses: Control de la cabeza</li>
        <li>4-6 meses: Rodar y sentarse con apoyo</li>
        <li>6-9 meses: Gatear y sentarse sin apoyo</li>
        <li>9-12 meses: Pararse con apoyo</li>
        <li>12-15 meses: Primeros pasos independientes</li>
      </ul>
      
      <h2>Cómo Apoyar el Desarrollo</h2>
      <p>Proporciona un ambiente seguro para la exploración, tiempo en el piso para practicar movimientos, y mucho ánimo y apoyo emocional.</p>
    `
  },
  'cuidado-postnatal': {
    title: 'Cuidado Postnatal',
    image: '/actividad.jpg',
    date: '8 de Octubre, 2025',
    category: 'Salud',
    content: `
      <p>El período postnatal es un tiempo de grandes cambios físicos y emocionales. Es importante cuidar tanto tu salud física como mental durante esta etapa.</p>
      
      <h2>Recuperación Física</h2>
      <p>Tu cuerpo necesita tiempo para recuperarse del parto. Es normal experimentar:</p>
      <ul>
        <li>Sangrado vaginal (loquios) durante varias semanas</li>
        <li>Contracciones uterinas mientras el útero vuelve a su tamaño normal</li>
        <li>Dolor en el área perineal si tuviste un parto vaginal</li>
        <li>Cambios hormonales que pueden afectar tu estado de ánimo</li>
      </ul>
      
      <h2>Salud Mental</h2>
      <p>Muchas madres experimentan el "baby blues" o incluso depresión posparto. No dudes en buscar apoyo profesional si lo necesitas.</p>
      
      <h2>Cuidado Personal</h2>
      <p>Descansa cuando el bebé duerme, come alimentos nutritivos, mantente hidratada y acepta ayuda de familiares y amigos.</p>
    `
  },
  'comunicacion-con-adolescentes': {
    title: 'Comunicación con Adolescentes',
    image: '/actividad.jpg',
    date: '5 de Octubre, 2025',
    category: 'Adolescencia',
    content: `
      <p>La adolescencia es una etapa desafiante tanto para los padres como para los hijos. Mantener líneas abiertas de comunicación es fundamental.</p>
      
      <h2>Estrategias de Comunicación Efectiva</h2>
      <ul>
        <li><strong>Escucha Activa:</strong> Presta atención completa sin interrumpir</li>
        <li><strong>Empatía:</strong> Intenta entender su perspectiva</li>
        <li><strong>Respeto:</strong> Trata sus preocupaciones con seriedad</li>
        <li><strong>Paciencia:</strong> Elige el momento adecuado para conversaciones importantes</li>
      </ul>
      
      <h2>Construyendo Confianza</h2>
      <p>La confianza se construye siendo consistente, cumpliendo promesas y respetando su privacidad dentro de límites razonables.</p>
      
      <h2>Manejo de Conflictos</h2>
      <p>Los conflictos son normales. Aprende a manejarlos de manera constructiva, estableciendo límites claros mientras mantienes el respeto mutuo.</p>
    `
  },
  'preparacion-para-el-parto': {
    title: 'Preparación para el Parto',
    image: '/actividad.jpg',
    date: '3 de Octubre, 2025',
    category: 'Embarazo',
    content: `
      <p>Prepararte para el parto puede ayudarte a sentirte más confiada y en control durante este momento importante.</p>
      
      <h2>Preparación Física</h2>
      <p>Los ejercicios de Kegel, caminatas suaves y estiramientos pueden ayudar a preparar tu cuerpo para el trabajo de parto.</p>
      
      <h2>Técnicas de Respiración</h2>
      <p>Practicar técnicas de respiración puede ayudarte a manejar el dolor y mantener la calma durante las contracciones:</p>
      <ul>
        <li>Respiración profunda y lenta</li>
        <li>Respiración rítmica</li>
        <li>Visualización y relajación</li>
      </ul>
      
      <h2>Plan de Parto</h2>
      <p>Considera crear un plan de parto que incluya tus preferencias para el manejo del dolor, personas de apoyo presentes, y otros detalles importantes.</p>
      
      <h2>Qué Esperar</h2>
      <p>El trabajo de parto tiene diferentes etapas. Familiarízate con las señales de parto y cuándo es momento de ir al hospital.</p>
    `
  },
  'lactancia-materna': {
    title: 'Lactancia Materna',
    image: '/actividad.jpg',
    date: '1 de Octubre, 2025',
    category: 'Desarrollo',
    content: `
      <p>La lactancia materna proporciona la nutrición ideal para los bebés y ofrece numerosos beneficios tanto para la madre como para el hijo.</p>
      
      <h2>Beneficios de la Lactancia</h2>
      <ul>
        <li>Proporciona nutrición perfectamente equilibrada</li>
        <li>Protege contra infecciones y enfermedades</li>
        <li>Ayuda a crear un vínculo emocional fuerte</li>
        <li>Ayuda a la madre a recuperarse del parto</li>
      </ul>
      
      <h2>Técnicas de Amamantamiento</h2>
      <p>Un buen agarre es fundamental para una lactancia exitosa. El bebé debe tomar no solo el pezón sino también gran parte de la areola.</p>
      
      <h2>Problemas Comunes y Soluciones</h2>
      <p>Es normal enfrentar desafíos al inicio:</p>
      <ul>
        <li><strong>Dolor en los pezones:</strong> Verifica el agarre del bebé</li>
        <li><strong>Congestión mamaria:</strong> Amamanta con frecuencia</li>
        <li><strong>Preocupación por la producción:</strong> La mayoría de las madres producen suficiente leche</li>
      </ul>
      
      <h2>Cuándo Buscar Ayuda</h2>
      <p>No dudes en consultar con un especialista en lactancia si tienes dificultades persistentes.</p>
    `
  }
}

// Use loaded blog if available, otherwise try fallback, otherwise show not found
const post = blogPosts[slug] || fallbackBlogPosts[slug] || {
  title: 'Blog no encontrado',
  description: 'Lo sentimos, este artículo no existe.',
  content: '<p>Lo sentimos, este artículo no existe.</p>',
  image: '/actividad.jpg'
}

console.log('Slug:', slug)
console.log('Blog found:', !!blogPosts[slug])
console.log('Post:', post)

// Get the site URL from config
const config = useRuntimeConfig()
const siteUrl = 'https://lanthier.github.io'
const baseURL = '/mama-informada'
const currentUrl = `${siteUrl}${baseURL}/blog/${slug}`

// Ensure image URL is absolute for social sharing
const absoluteImageUrl = post.image.startsWith('http') 
  ? post.image 
  : `${siteUrl}${baseURL}${post.image}`

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
        <div class="content" v-html="post.content"></div>
        
        <div class="blog-footer">
          <NuxtLink to="/blog" class="back-button">
            ← Volver al Blog
          </NuxtLink>
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
  width: 100%;
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
}
</style>

