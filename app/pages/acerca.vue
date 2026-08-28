<script setup>
const siteUrl = 'https://mamainformada.org'
const pageUrl = `${siteUrl}/acerca`
const ogImage = `${siteUrl}/Daniella-casual.JPG`

const title = 'Acerca de Mama Informada | Matrona y educación en salud de la mujer'
const description =
  'Conoce a Daniella, matrona de la Universidad de Chile, y la misión de Mama Informada: información con evidencia científica para que tomes decisiones con autonomía y confianza.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogUrl: pageUrl,
  ogType: 'website',
  ogLocale: 'es_CL',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: pageUrl,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'AboutPage',
            '@id': `${pageUrl}#webpage`,
            url: pageUrl,
            name: title,
            description,
            isPartOf: {
              '@id': `${siteUrl}/#website`,
            },
            about: {
              '@id': `${siteUrl}/#organization`,
            },
            mainEntity: {
              '@id': `${siteUrl}/#person`,
            },
            inLanguage: 'es-CL',
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Mama Informada',
            description:
              'Información y herramientas basadas en evidencia científica para la salud de la mujer y la maternidad.',
            publisher: {
              '@id': `${siteUrl}/#organization`,
            },
            inLanguage: 'es-CL',
          },
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'Mama Informada',
            url: siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/mama-informada-logo.png`,
            },
            founder: {
              '@id': `${siteUrl}/#person`,
            },
          },
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: 'Daniella',
            jobTitle: 'Matrona',
            description:
              'Matrona de la Universidad de Chile con enfoque biopsicosocial y de salud pública. Fundadora de Mama Informada.',
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Universidad de Chile',
            },
            worksFor: {
              '@id': `${siteUrl}/#organization`,
            },
            image: ogImage,
            url: pageUrl,
            knowsAbout: [
              'Salud de la mujer',
              'Maternidad',
              'Lactancia materna',
              'Salud pública',
              'Educación en salud',
            ],
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="acerca-page">
    <section class="acerca-header">
      <div class="container">
        <h1 class="page-title">Acerca de Mama Informada</h1>
        <p class="page-subtitle">
          Información, herramientas y acompañamiento para que tomes tus propias decisiones con confianza.
        </p>
      </div>
    </section>

    <section class="acerca-content">
      <div class="container">
        <article class="acerca-section">
          <div class="section-body">
            <div class="section-image">
              <img
                src="/ensenando.jpg"
                alt="Daniella, matrona, enseñando educación en salud de la mujer"
                width="1085"
                height="864"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="section-content">
              <h2 class="section-title">Nuestra misión</h2>
              <p class="section-text">
                <strong>Empoderar a las mujeres</strong> en cada etapa de su vida a través de la información. Creamos
                herramientas prácticas y basadas en <strong>evidencia científica</strong> para que seas la dueña de tus
                <strong>propias decisiones</strong>, vivas sin miedos y ejerzas tu autonomía con total confianza.
              </p>
              <p class="section-text section-cta">
                Explora nuestros
                <NuxtLink to="/recursos">recursos gratuitos</NuxtLink>
                y artículos del
                <NuxtLink to="/blog">blog</NuxtLink>
                con información actualizada sobre embarazo, parto y maternidad.
              </p>
            </div>
          </div>
        </article>

        <article class="acerca-section">
          <div class="section-body section-body--reverse">
            <div class="section-image section-image--portrait">
              <img
                src="/Daniella-casual.JPG"
                alt="Daniella, matrona de la Universidad de Chile y fundadora de Mama Informada"
                width="5712"
                height="4284"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="section-content">
              <h2 class="section-title">Nuestro equipo</h2>
              <p class="section-text">
                Hola, soy <strong>Daniella</strong>, Matrona de la Universidad de Chile. Con una formación integral de
                <strong>enfoque biopsicosocial y salud pública</strong>, no veo la salud como la ausencia de enfermedad,
                sino como el <strong>bienestar completo de la mujer</strong>: tu cuerpo, tu mente, tus hábitos y tu
                entorno importan. Combino la rigurosidad de la ciencia con la empatía que necesitas en
                los momentos más vulnerables de tu vida.
              </p>
              <p class="section-text">
                Mis áreas de enfoque incluyen <strong>lactancia materna</strong>, salud reproductiva, acompañamiento en
                el embarazo y el parto, y el crecimiento personal que sostiene el bienestar a largo plazo.
              </p>
            </div>
          </div>
        </article>

        <article class="acerca-section">
          <h2 class="section-title">Nuestra historia</h2>
          <div class="section-text">
            <p>
              La historia detrás de <strong>Mama Informada</strong> empieza con la pasión por enseñar. Esa vocación nació
              en mi primera práctica clínica. Me asignaron una paciente que acababa de tener a su cuarto hijo. A pesar de su
              experiencia, nunca había logrado amamantar a sus hijos anteriores. Juntas, con paciencia
              y la educación correcta, <strong>logramos una lactancia materna</strong> exclusiva y <strong>efectiva</strong>. Ver su
              cara de asombro, felicidad y empoderamiento me hizo entender mi verdadero propósito: la
              <strong>educación transforma vidas.</strong>
            </p>
            <p>
              Sin embargo, el <strong>camino no fue fácil</strong>. Durante mi último año de carrera viví en primera
              persona el ambiente hostil, la rigidez y las injusticias que a veces esconde el sistema
              de salud. Esa experiencia me rompió, pero también me obligó a <strong>trabajar mi resiliencia, mi
              mentalidad y mi fuerza interna.</strong>
            </p>
            <p>
              Comprendí que si el <strong>sistema podía ser así de duro</strong> con quienes nos formamos en él, lo era
              aún más con las <strong>mujeres que se atendían en él</strong> o daban a luz sin información.
            </p>
            <p>
              Por eso nació Mama Informada. Decidí transformar esa vivencia en un motor para hablar no
              solo de partos y anticoncepción, sino también de crecimiento personal, hábitos y
              mentalidad. Creé este espacio porque me hubiese encantado encontrar una guía así en mis
              momentos más difíciles, y hoy <strong>quiero ser esa guía para ti.</strong>
            </p>
            <p class="section-cta">
              Si quieres empezar con algo práctico, prueba nuestra
              <NuxtLink to="/recursos/calculadora-semanas">calculadora de semanas de embarazo</NuxtLink>
              o arma tu
              <NuxtLink to="/recursos/plan-de-parto">plan de parto</NuxtLink>.
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.acerca-page {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
  min-height: 100vh;
  background: #fafafa;
}

.acerca-header {
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
  line-height: 1.6;
}

.acerca-content {
  padding: 4rem 0 5rem;
}

.acerca-section {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.acerca-section:last-child {
  margin-bottom: 0;
}

.section-body {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 2.5rem;
  align-items: center;
}

.section-body--reverse .section-image {
  order: 2;
}

.section-body--reverse .section-content {
  order: 1;
}

.section-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  display: block;
}

.section-image--portrait img {
  aspect-ratio: 3 / 4;
  object-position: center top;
}

.section-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: rgb(135, 168, 149);
  margin-bottom: 1.25rem;
}

.section-text {
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #555;
}

.section-text strong {
  font-weight: 600;
  color: #333;
}

.section-text p {
  margin-bottom: 1.25rem;
}

.section-text p:last-child {
  margin-bottom: 0;
}

.section-content .section-text + .section-text {
  margin-top: 1.25rem;
}

.section-cta a {
  color: #1e4238;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.section-cta a:hover {
  color: rgb(135, 168, 149);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .acerca-section {
    padding: 2rem 1.5rem;
  }

  .section-body,
  .section-body--reverse {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .section-body--reverse .section-image,
  .section-body--reverse .section-content {
    order: unset;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-text {
    font-size: 1rem;
  }
}
</style>
