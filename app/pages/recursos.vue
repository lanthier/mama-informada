<script setup>
</script>

<template>
  <div class="coming-soon-page">
    <div class="content-wrapper">
      <div class="icon">📚</div>
      <h1 class="title">Próximamente</h1>
      <h2 class="subtitle">Recursos</h2>
      <p class="description">
        Estamos preparando una colección completa de recursos educativos, guías descargables, 
        y herramientas útiles para acompañarte en cada etapa de la maternidad.
      </p>
      <div class="features">
        <div class="feature-item">
          <span class="feature-icon">📖</span>
          <span>Guías descargables</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🎥</span>
          <span>Videos educativos</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">📊</span>
          <span>Herramientas interactivas</span>
        </div>
      </div>
      <NuxtLink to="/" class="back-button">
        ← Volver al inicio
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.coming-soon-page {
  min-height: calc(100vh - 128px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.content-wrapper {
  text-align: center;
  max-width: 600px;
  background: white;
  padding: 4rem 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 5rem;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.title {
  font-size: 2.5rem;
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.75rem;
  font-weight: 600;
  color: rgb(135, 168, 149);
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2.5rem;
}

.features {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #f8f9fa;
  border-radius: 50px;
  font-size: 0.95rem;
  color: #555;
  font-weight: 500;
}

.feature-icon {
  font-size: 1.25rem;
}

.back-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: rgb(135, 168, 149);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(135, 168, 149, 0.3);
}

.back-button:hover {
  background: #1e4238;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(135, 168, 149, 0.4);
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 3rem 2rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .features {
    flex-direction: column;
    align-items: center;
  }
}
</style>

