<script setup>
import blogsData from '../../../data/blogs.json'

// Use the imported blogs data
const blogs = ref(blogsData)
</script>

<template>
  <div class="blog-page">
    <!-- Blog Header -->
    <section class="blog-header">
      <div class="container">
        <h1 class="page-title">Blog</h1>
        <p class="page-subtitle">Recursos e información para tu viaje maternal</p>
      </div>
    </section>
    
    <!-- Blog List -->
    <section class="blog-list">
      <div class="container">
        <div v-if="blogs.length === 0" class="no-blogs">
          <p>No hay blogs disponibles. Ejecuta <code>npm run fetch-blogs</code> para obtener los blogs de Contentful.</p>
        </div>
        
        <div v-else class="blog-column">
          <NuxtLink 
            v-for="blog in blogs" 
            :key="blog.id"
            :to="`/blog/${blog.slug}`" 
            class="blog-card"
          >
            <div class="blog-card-image">
              <img :src="blog.image" :alt="blog.title" />
            </div>
            <div class="blog-card-content">
              <h2 class="blog-title">{{ blog.title }}</h2>
              <p class="blog-description">
                {{ blog.description }}
              </p>
              <p v-if="blog.date" class="blog-date">{{ blog.date }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-page {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
  min-height: 100vh;
  background: #fafafa;
}

/* Blog Header */
.blog-header {
  background: linear-gradient(360deg, rgb(135,168,149) 0%, #1e4238 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.page-subtitle {
  font-size: 1.25rem;
  font-weight: 300;
  opacity: 0.95;
}

/* Blog List */
.blog-list {
  padding: 4rem 0;
}

.blog-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: grid;
  grid-template-columns: 400px 1fr;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  min-height: 280px;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.blog-card-image {
  width: 400px;
  height: 100%;
  min-height: 280px;
  overflow: hidden;
}

.blog-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-card-image img {
  transform: scale(1.05);
}

.blog-card-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
  line-height: 1.3;
}

.blog-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.blog-date {
  font-size: 0.875rem;
  color: #999;
  font-weight: 400;
}

.no-blogs {
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: 8px;
  color: #666;
}

.no-blogs code {
  background: #f5f5f5;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  color: rgb(135,168,149);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .blog-card {
    grid-template-columns: 320px 1fr;
    min-height: 240px;
  }
  
  .blog-card-image {
    width: 320px;
    min-height: 240px;
  }
  
  .blog-card-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .blog-header {
    padding: 3rem 0;
  }
  
  .blog-list {
    padding: 2rem 0;
  }
  
  .blog-card {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  
  .blog-card-image {
    width: 100%;
    height: 220px;
    min-height: 220px;
  }
  
  .blog-card-content {
    padding: 1.5rem;
  }
  
  .blog-title {
    font-size: 1.5rem;
  }
  
  .blog-description {
    -webkit-line-clamp: 4;
  }
}
</style>

