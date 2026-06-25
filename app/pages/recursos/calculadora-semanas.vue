<script setup>
import { semanasEmbarazo } from '../../data/semanasEmbarazo'
import {
  calcularDesdeEcografia,
  calcularDesdeFum,
  formatDateEs,
  formatGestationalAge,
} from '../../utils/calcularSemanasEmbarazo'

useSeoMeta({
  title: 'Calculadora de Semanas de Embarazo - Mama Informada',
  description: 'Calcula en qué semana de embarazo te encuentras y descubre consejos para cada etapa del camino.',
})

const route = useRoute()
const router = useRouter()

const metodo = ref('fum')
const fechaFum = ref('')
const fechaEcografia = ref('')
const semanasEcografia = ref(null)
const resultado = ref(null)
const submitted = ref(false)

function queryValue(value) {
  if (Array.isArray(value)) return value[0]
  return value
}

function buildQueryFromState() {
  if (metodo.value === 'fum' && fechaFum.value) {
    return { metodo: 'fum', fecha: fechaFum.value }
  }

  if (
    metodo.value === 'ecografia'
    && fechaEcografia.value
    && semanasEcografia.value != null
    && semanasEcografia.value >= 4
    && semanasEcografia.value <= 42
  ) {
    return {
      metodo: 'ecografia',
      fecha: fechaEcografia.value,
      semanas: String(semanasEcografia.value),
    }
  }

  return {}
}

function calculate() {
  if (metodo.value === 'fum') {
    if (!fechaFum.value) {
      resultado.value = null
      return false
    }
    resultado.value = calcularDesdeFum(fechaFum.value)
    return true
  }

  if (
    !fechaEcografia.value
    || semanasEcografia.value == null
    || semanasEcografia.value < 4
    || semanasEcografia.value > 42
  ) {
    resultado.value = null
    return false
  }

  resultado.value = calcularDesdeEcografia(fechaEcografia.value, semanasEcografia.value)
  return true
}

function restoreFromQuery(query) {
  const metodoQuery = queryValue(query.metodo)
  const fechaQuery = queryValue(query.fecha)

  if (metodoQuery === 'fum' && fechaQuery) {
    metodo.value = 'fum'
    fechaFum.value = fechaQuery
    submitted.value = true
    calculate()
    return
  }

  if (metodoQuery === 'ecografia' && fechaQuery) {
    const semanas = Number(queryValue(query.semanas))
    if (!Number.isNaN(semanas) && semanas >= 4 && semanas <= 42) {
      metodo.value = 'ecografia'
      fechaEcografia.value = fechaQuery
      semanasEcografia.value = semanas
      submitted.value = true
      calculate()
    }
  }
}

function handleSubmit() {
  submitted.value = true

  if (!calculate()) return

  if (resultado.value && !resultado.value.error) {
    router.replace({
      path: route.path,
      query: buildQueryFromState(),
    })
  }
}

onMounted(() => {
  restoreFromQuery(route.query)
})

watch(
  () => route.query,
  (query) => {
    restoreFromQuery(query)
  },
)

const currentWeek = computed(() => resultado.value?.weeks ?? 0)

const timelineItems = computed(() => {
  if (!resultado.value) return []

  const current = currentWeek.value
  const items = semanasEmbarazo.map((item) => ({
    ...item,
    isYouAreHere: false,
    isPassed: item.week < current,
  }))

  const exactMatch = items.find((item) => item.week === current)
  if (exactMatch) {
    exactMatch.isYouAreHere = true
    exactMatch.isPassed = false
    return items
  }

  const insertAt = items.findIndex((item) => item.week > current)
  const youAreHere = {
    week: current,
    title: 'Estás aquí',
    consejo: `Te encuentras en la ${formatGestationalAge(resultado.value.weeks, resultado.value.days)} de gestación. Sigue cuidándote y consulta con tu equipo médico ante cualquier duda.`,
    isYouAreHere: true,
    isPassed: false,
  }

  if (insertAt === -1) {
    items.push(youAreHere)
  } else {
    items.splice(insertAt, 0, youAreHere)
  }

  return items
})

function dotColor(item) {
  if (item.isYouAreHere) return 'primary'
  if (item.isPassed) return 'secondary'
  return 'grey-lighten-1'
}
</script>

<template>
  <div class="calculadora-page">
    <section class="calculadora-header">
      <div class="container">
        <NuxtLink to="/recursos" class="back-link">← Volver a recursos</NuxtLink>
        <h1 class="page-title">Calculadora de Semanas</h1>
        <p class="page-subtitle">
          Descubre en qué semana de embarazo te encuentras y recibe consejos útiles para cada etapa.
        </p>
      </div>
    </section>

    <section class="calculadora-content">
      <div class="container">
        <v-card class="form-card" elevation="2" rounded="lg">
          <v-card-text class="pa-6">
            <p class="form-intro">
              Elige cómo quieres calcular tu edad gestacional:
            </p>

            <v-radio-group v-model="metodo" hide-details class="mb-4">
              <v-radio
                label="Fecha última menstruación (FUM)"
                value="fum"
                color="primary"
              />
              <v-radio
                label="Fecha de ecografía (FUR)"
                value="ecografia"
                color="primary"
              />
            </v-radio-group>

            <div v-if="metodo === 'fum'" class="date-field">
              <label class="field-label">Fecha de tu última menstruación</label>
              <v-text-field
                v-model="fechaFum"
                type="date"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                :error="submitted && !fechaFum"
                :error-messages="submitted && !fechaFum ? 'Selecciona una fecha' : ''"
              />
            </div>

            <div v-else class="ecografia-fields">
              <div class="date-field">
                <label class="field-label">Fecha de la ecografía</label>
                <v-text-field
                  v-model="fechaEcografia"
                  type="date"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  :error="submitted && !fechaEcografia"
                  :error-messages="submitted && !fechaEcografia ? 'Selecciona una fecha' : ''"
                />
              </div>
              <div class="date-field">
                <label class="field-label">Semanas de gestación en la ecografía</label>
                <v-text-field
                  v-model.number="semanasEcografia"
                  type="number"
                  min="4"
                  max="42"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  placeholder="Ej. 12"
                  :error="submitted && (semanasEcografia == null || semanasEcografia < 4 || semanasEcografia > 42)"
                  :error-messages="submitted && (semanasEcografia == null || semanasEcografia < 4 || semanasEcografia > 42) ? 'Indica las semanas (4–42)' : ''"
                />
              </div>
            </div>

            <v-btn
              color="primary"
              size="large"
              class="mt-4"
              @click="handleSubmit"
            >
              Calcular
            </v-btn>
          </v-card-text>
        </v-card>

        <v-alert
          v-if="submitted && resultado?.error === 'future'"
          type="warning"
          class="mt-6"
          variant="tonal"
        >
          La fecha ingresada es posterior a hoy. Verifica que hayas seleccionado la fecha correcta.
        </v-alert>

        <div v-if="resultado && !resultado.error" class="resultado-section">
          <v-card class="resultado-card" elevation="2" rounded="lg">
            <v-card-text class="pa-6">
              <div class="resultado-summary">
                <div class="resultado-stat">
                  <span class="stat-label">Edad gestacional</span>
                  <span class="stat-value">{{ formatGestationalAge(resultado.weeks, resultado.days) }}</span>
                </div>
                <div class="resultado-stat">
                  <span class="stat-label">Fecha probable de parto</span>
                  <span class="stat-value">{{ formatDateEs(resultado.dueDate) }}</span>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <h2 class="timeline-title">Tu camino semana a semana</h2>
          <p class="timeline-subtitle">
            Los hitos marcados en verde oscuro indican etapas que ya has superado. El punto resaltado muestra dónde te encuentras ahora.
          </p>

          <v-timeline side="end" align="start" class="timeline">
            <v-timeline-item
              v-for="item in timelineItems"
              :key="`${item.week}-${item.title}`"
              :dot-color="dotColor(item)"
              :size="item.isYouAreHere ? 'default' : 'small'"
            >
              <template #opposite>
                <span
                  class="week-label"
                  :class="{ 'week-label--active': item.isYouAreHere }"
                >
                  Sem. {{ item.week }}
                </span>
              </template>

              <v-card
                :class="{ 'milestone-card--active': item.isYouAreHere }"
                class="milestone-card"
                :elevation="item.isYouAreHere ? 4 : 1"
                rounded="lg"
              >
                <v-card-title class="milestone-title">
                  {{ item.title }}
                  <v-chip
                    v-if="item.isYouAreHere"
                    color="primary"
                    size="small"
                    class="ml-2"
                  >
                    Estás aquí
                  </v-chip>
                </v-card-title>
                <v-card-text class="milestone-consejo">
                  {{ item.consejo }}
                  <v-btn
                    v-if="item.link"
                    :to="item.link.to"
                    variant="outlined"
                    color="primary"
                    size="small"
                    class="milestone-link mt-3"
                  >
                    {{ item.link.label }}
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.calculadora-page {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
  min-height: 100vh;
  background: #fafafa;
}

.calculadora-header {
  background: linear-gradient(360deg, rgb(135, 168, 149) 0%, #1e4238 100%);
  color: white;
  padding: 4rem 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.back-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: white;
}

.page-title {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.page-subtitle {
  font-size: 1.15rem;
  font-weight: 300;
  opacity: 0.95;
  line-height: 1.6;
}

.calculadora-content {
  padding: 3rem 0 4rem;
}

.form-card {
  background: white;
}

.form-intro {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.field-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.date-field {
  margin-bottom: 1rem;
}

.ecografia-fields {
  display: grid;
  gap: 0.5rem;
}

.resultado-section {
  margin-top: 2.5rem;
}

.resultado-card {
  background: linear-gradient(135deg, #1e4238 0%, #2d5a4d 100%);
  color: white;
}

.resultado-summary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.resultado-stat {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.85;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 600;
}

.timeline-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 2.5rem 0 0.5rem;
}

.timeline-subtitle {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.timeline {
  padding-left: 0;
}

.week-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #999;
  white-space: nowrap;
}

.week-label--active {
  color: #1e4238;
  font-size: 1rem;
}

.milestone-card {
  background: white;
}

.milestone-card--active {
  border: 2px solid #1e4238;
}

.milestone-title {
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.25rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.milestone-consejo {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #555;
  padding-top: 0;
}

.milestone-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  line-height: 1.25;
}

.milestone-link :deep(.v-btn__content) {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.25;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .calculadora-header {
    padding: 3rem 0;
  }

  .resultado-summary {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .stat-value {
    font-size: 1.25rem;
  }
}
</style>
