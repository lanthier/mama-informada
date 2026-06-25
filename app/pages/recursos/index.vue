<script setup>
import recursosData from '../../../data/recursos.json'

const recursos = ref(recursosData)

useSeoMeta({
  title: 'Recursos - Mama Informada',
  description: 'Herramientas y recursos educativos para acompañarte en tu embarazo, parto y maternidad.',
})
</script>

<template>
  <div class="recursos-page">
    <section class="recursos-header">
      <div class="container">
        <h1 class="page-title">Recursos</h1>
        <p class="page-subtitle">
          Herramientas gratuitas y guías prácticas para acompañarte en cada etapa de tu maternidad.
        </p>
      </div>
    </section>

    <section class="recursos-list">
      <div class="container">
        <div class="recursos-column">
          <NuxtLink
            v-for="recurso in recursos"
            :key="recurso.id"
            :to="`/recursos/${recurso.slug}`"
            class="recurso-card"
          >
            <div class="recurso-icon">{{ recurso.icon }}</div>
            <div class="recurso-content">
              <div class="recurso-meta">
                <span class="recurso-type">{{ recurso.type }}</span>
                <span v-if="recurso.gratis" class="recurso-gratis">Gratis</span>
              </div>
              <h2 class="recurso-title">{{ recurso.title }}</h2>
              <p class="recurso-description">{{ recurso.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.recursos-page {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
  min-height: 100vh;
  background: #fafafa;
}

.recursos-header {
  background: linear-gradient(360deg, rgb(135, 168, 149) 0%, #1e4238 100%);
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

.recursos-list {
  padding: 4rem 0;
}

.recursos-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.recurso-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: grid;
  grid-template-columns: 120px 1fr;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.recurso-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.recurso-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8f0ec 100%);
}

.recurso-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.recurso-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.recurso-type {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgb(135, 168, 149);
}

.recurso-gratis {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1e4238;
  background: #e8f0ec;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.recurso-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.recurso-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .recursos-header {
    padding: 3rem 0;
  }

  .recursos-list {
    padding: 2rem 0;
  }

  .recurso-card {
    grid-template-columns: 1fr;
  }

  .recurso-icon {
    padding: 1.5rem;
  }

  .recurso-content {
    padding: 1.5rem;
  }

  .recurso-title {
    font-size: 1.5rem;
  }
}
</style>
