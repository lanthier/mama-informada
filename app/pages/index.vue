<script setup>
// SEO metadata for home page
const siteUrl = 'https://lanthier.github.io'
const baseURL = '/mama-informada'

useSeoMeta({
  title: 'Mama Informada - Empoderando la maternidad informada',
  description: 'Acompañamos a las madres en cada etapa del viaje maternal con recursos educativos confiables y actualizados. Desde el embarazo hasta la adolescencia, información esencial sobre salud materna, desarrollo infantil y bienestar familiar.',
  ogTitle: 'Mama Informada - Empoderando la maternidad informada',
  ogDescription: 'Acompañamos a las madres en cada etapa del viaje maternal con recursos educativos confiables y actualizados.',
  ogImage: `${siteUrl}${baseURL}/mama-informada-logo.png`,
  ogUrl: `${siteUrl}${baseURL}`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Mama Informada - Empoderando la maternidad informada',
  twitterDescription: 'Acompañamos a las madres en cada etapa del viaje maternal con recursos educativos confiables y actualizados.',
  twitterImage: `${siteUrl}${baseURL}/mama-informada-logo.png`,
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Empoderando la maternidad informada
          </h1>
          
          <p class="hero-description">
            Acompañamos a las madres en cada etapa del viaje maternal con recursos 
            educativos confiables y actualizados. Desde el embarazo hasta la adolescencia, 
            brindamos información esencial sobre salud materna, desarrollo infantil y 
            bienestar familiar.
          </p>
          
          <p class="hero-highlight">
            <strong>Porque cada madre merece acceso a información de calidad.</strong> 
            Nuestros recursos educativos te ayudan a tomar decisiones informadas sobre 
            tu salud, la salud de tu bebé, y el desarrollo de tus hijos durante todas 
            las etapas de crecimiento.
          </p>
          
          <div class="cta-section">
            <p class="cta-text">¿Tienes preguntas sobre tu embarazo o el desarrollo de tu bebé?</p>
            <a href="mailto:mamainformadaa+contact@gmail.com" class="cta-button">
              Contactar para Consulta
            </a>
          </div>
        </div>
        
        <div class="hero-image">
          <img src="/actividad.jpg" alt="Actividad" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: stretch;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.hero-text {
  background: linear-gradient(360deg, rgb(135,168,149) 0%, #1e4238 100%);
  color: white;
  padding: 4rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  font-size: 4rem;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -1px;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  font-weight: 300;
}

.hero-highlight {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  font-weight: 400;
}

.hero-highlight strong {
  font-weight: 700;
}

/* CTA Section */
.cta-section {
  max-width: 450px;
}

.cta-text {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #1a1a1a;
  background: #ffee8c;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.cta-button:hover {
  background: #ffc107;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* Hero Image */
.hero-image {
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  
  .hero-text {
    padding: 3rem 2rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-image {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description,
  .hero-highlight {
    font-size: 1rem;
  }
}
</style>

