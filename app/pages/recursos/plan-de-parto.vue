<script setup>
import { generatePlanDePartoPdf } from '../../utils/generatePlanDePartoPdf'
import { createPlanDePartoForm, planDePartoHelp } from '../../data/planDePartoHelp'

const help = planDePartoHelp

useSeoMeta({
  title: 'Plan de Parto - Mama Informada',
  description: 'Crea tu plan de parto personalizado y descárgalo en PDF para compartirlo con tu equipo médico.',
})

const isGenerating = ref(false)

const form = reactive(createPlanDePartoForm())

async function handleSubmit() {
  if (isGenerating.value) return

  isGenerating.value = true
  try {
    await generatePlanDePartoPdf(form)
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('No se pudo generar el PDF. Por favor, inténtalo de nuevo.')
  } finally {
    isGenerating.value = false
  }
}
</script>

<template>
  <div class="plan-page">
    <section class="plan-header">
      <div class="container">
        <NuxtLink to="/recursos" class="back-link">← Volver a recursos</NuxtLink>
        <h1 class="page-title">Plan de Parto</h1>
        <p class="page-subtitle">
          Completa tus preferencias y descarga un PDF para compartir con tu médico, matrona o equipo de parto.
          Pulsa el icono <span class="help-inline">i</span> junto a cada campo si necesitas orientación.
        </p>
      </div>
    </section>

    <section class="plan-form-section">
      <div class="container">
        <form class="plan-form" @submit.prevent="handleSubmit">
          <fieldset class="form-section">
            <legend>
              <span class="legend-row">
                Datos personales
                <FieldHelp :text="help.sections.personal" />
              </span>
            </legend>
            <div class="form-grid">
              <label class="form-field">
                <FormLabel text="Nombre completo" :help="help.fields.nombre" />
                <input v-model="form.nombre" type="text" autocomplete="name" />
              </label>
              <label class="form-field">
                <FormLabel text="Nombre del acompañante" :help="help.fields.acompanante" />
                <input v-model="form.acompanante" type="text" />
              </label>
              <label class="form-field">
                <FormLabel text="Contacto teléfono (opcional)" :help="help.fields.telefono" />
                <input v-model="form.telefono" type="tel" autocomplete="tel" />
              </label>
              <label class="form-field form-field-full">
                <FormLabel text="Dirección (opcional)" :help="help.fields.direccion" />
                <input v-model="form.direccion" type="text" autocomplete="street-address" />
              </label>
              <label class="form-field form-field-full">
                <FormLabel text="Alergias" :help="help.fields.alergia" />
                <input v-model="form.alergia" type="text" placeholder="Medicamentos, alimentos, látex..." />
              </label>
              <label class="form-field">
                <FormLabel text="Fecha probable de parto" :help="help.fields.fechaParto" />
                <input v-model="form.fechaParto" type="date" />
              </label>
              <label class="form-field">
                <FormLabel text="Médico o matrona" :help="help.fields.medico" />
                <input v-model="form.medico" type="text" />
              </label>
              <label class="form-field form-field-full">
                <FormLabel text="Lugar del parto (hospital o clínica)" :help="help.fields.lugarParto" />
                <input v-model="form.lugarParto" type="text" />
              </label>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend>
              <span class="legend-row">
                Durante el trabajo de parto
                <FieldHelp :text="help.sections.trabajoParto" />
              </span>
            </legend>
            <label class="form-field">
              <FormLabel text="Ambiente deseado" :help="help.fields.ambiente" />
              <textarea
                v-model="form.ambiente"
                rows="3"
                placeholder="Luces tenues, música, privacidad, aromaterapia..."
              />
            </label>
            <label class="form-field">
              <FormLabel text="Personas que deseas presentes" :help="help.fields.personasPresentes" />
              <textarea
                v-model="form.personasPresentes"
                rows="2"
                placeholder="Pareja, doula, familiares..."
              />
            </label>
            <div class="checkbox-group">
              <FormLabel text="Movilidad y posiciones" :help="help.fields.movilidad" group />
              <div v-for="item in form.movilidad" :key="item.value" class="choice-item">
                <input :id="`movilidad-${item.value}`" v-model="item.checked" type="checkbox" />
                <label :for="`movilidad-${item.value}`" class="choice-text">{{ item.label }}</label>
                <FieldHelp v-if="item.help" :text="item.help" />
              </div>
            </div>
            <div class="radio-group">
              <FormLabel text="Monitoreo fetal" :help="help.fields.monitoreo" group />
              <div v-for="option in form.monitoreoOptions" :key="option.value" class="choice-item">
                <input :id="`monitoreo-${option.value}`" v-model="form.monitoreo" type="radio" :value="option.value" />
                <label :for="`monitoreo-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
            <div class="radio-group">
              <FormLabel text="Inducción del parto" :help="help.fields.induccion" group />
              <div v-for="option in form.induccionOptions" :key="option.value" class="choice-item">
                <input :id="`induccion-${option.value}`" v-model="form.induccion" type="radio" :value="option.value" />
                <label :for="`induccion-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend>
              <span class="legend-row">
                Preferencias
                <FieldHelp :text="help.sections.manejoDolor" />
              </span>
            </legend>
            <div class="checkbox-group">
              <FormLabel text="Preferencias" :help="help.fields.manejoDolor" group />
              <div v-for="item in form.manejoDolor" :key="item.value" class="choice-item">
                <input :id="`dolor-${item.value}`" v-model="item.checked" type="checkbox" />
                <label :for="`dolor-${item.value}`" class="choice-text">{{ item.label }}</label>
                <FieldHelp v-if="item.help" :text="item.help" />
              </div>
            </div>
            <label class="form-field">
              <FormLabel text="Notas adicionales sobre el dolor" :help="help.fields.notasDolor" />
              <textarea v-model="form.notasDolor" rows="2" />
            </label>
          </fieldset>

          <fieldset class="form-section">
            <legend>
              <span class="legend-row">
                Durante el parto
                <FieldHelp :text="help.sections.parto" />
              </span>
            </legend>
            <div class="checkbox-group">
              <FormLabel text="Posiciones preferidas" :help="help.fields.posicionesParto" group />
              <div v-for="item in form.posicionesParto" :key="item.value" class="choice-item">
                <input :id="`posicion-${item.value}`" v-model="item.checked" type="checkbox" />
                <label :for="`posicion-${item.value}`" class="choice-text">{{ item.label }}</label>
                <FieldHelp v-if="item.help" :text="item.help" />
              </div>
            </div>
            <div class="radio-group">
              <FormLabel text="Episiotomía" :help="help.fields.episiotomia" group />
              <div v-for="option in form.episiotomiaOptions" :key="option.value" class="choice-item">
                <input :id="`episiotomia-${option.value}`" v-model="form.episiotomia" type="radio" :value="option.value" />
                <label :for="`episiotomia-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
            <div class="radio-group">
              <FormLabel text="Protección del perine" :help="help.fields.proteccionPerine" group />
              <div v-for="option in form.proteccionPerineOptions" :key="option.value" class="choice-item">
                <input :id="`perine-${option.value}`" v-model="form.proteccionPerine" type="radio" :value="option.value" />
                <label :for="`perine-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
            <div class="radio-group">
              <FormLabel text="Pujar" :help="help.fields.pujar" group />
              <div v-for="option in form.pujarOptions" :key="option.value" class="choice-item">
                <input :id="`pujar-${option.value}`" v-model="form.pujar" type="radio" :value="option.value" />
                <label :for="`pujar-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
            <div class="radio-group">
              <FormLabel text="Uso de forceps o ventosa" :help="help.fields.instrumentos" group />
              <div v-for="option in form.instrumentosOptions" :key="option.value" class="choice-item">
                <input :id="`instrumentos-${option.value}`" v-model="form.instrumentos" type="radio" :value="option.value" />
                <label :for="`instrumentos-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend>
              <span class="legend-row">
                En caso de cesárea
                <FieldHelp :text="help.sections.cesarea" />
              </span>
            </legend>
            <div class="radio-group">
              <FormLabel text="Acompañante presente" :help="help.fields.cesareaAcompanante" group />
              <div v-for="option in form.cesareaAcompananteOptions" :key="option.value" class="choice-item">
                <input :id="`cesarea-ac-${option.value}`" v-model="form.cesareaAcompanante" type="radio" :value="option.value" />
                <label :for="`cesarea-ac-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
            <div class="radio-group">
              <FormLabel text="Contacto piel con piel" :help="help.fields.cesareaPiel" group />
              <div v-for="option in form.cesareaPielOptions" :key="option.value" class="choice-item">
                <input :id="`cesarea-piel-${option.value}`" v-model="form.cesareaPiel" type="radio" :value="option.value" />
                <label :for="`cesarea-piel-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
            <label class="form-field">
              <FormLabel text="Preferencias adicionales" :help="help.fields.cesareaNotas" />
              <textarea
                v-model="form.cesareaNotas"
                rows="2"
                placeholder="Cortina baja, explicaciones en voz alta, fotografía..."
              />
            </label>
          </fieldset>

          <fieldset class="form-section">
            <legend>
              <span class="legend-row">
                Después del nacimiento
                <FieldHelp :text="help.sections.postparto" />
              </span>
            </legend>
            <div class="radio-group">
              <FormLabel text="Contacto piel con piel" :help="help.fields.pielConPiel" group />
              <div v-for="option in form.pielConPielOptions" :key="option.value" class="choice-item">
                <input :id="`piel-${option.value}`" v-model="form.pielConPiel" type="radio" :value="option.value" />
                <label :for="`piel-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
            <div class="checkbox-group">
              <FormLabel text="Corte del cordón umbilical" :help="help.fields.cordon" group />
              <div v-for="item in form.cordon" :key="item.value" class="choice-item">
                <input :id="`cordon-${item.value}`" v-model="item.checked" type="checkbox" />
                <label :for="`cordon-${item.value}`" class="choice-text">{{ item.label }}</label>
                <FieldHelp v-if="item.help" :text="item.help" />
              </div>
            </div>
            <div class="checkbox-group">
              <FormLabel text="Lactancia" :help="help.fields.lactancia" group />
              <div v-for="item in form.lactancia" :key="item.value" class="choice-item">
                <input :id="`lactancia-${item.value}`" v-model="item.checked" type="checkbox" />
                <label :for="`lactancia-${item.value}`" class="choice-text">{{ item.label }}</label>
                <FieldHelp v-if="item.help" :text="item.help" />
              </div>
            </div>
            <div class="checkbox-group">
              <FormLabel text="Expulsión de la placenta" :help="help.fields.placenta" group />
              <div v-for="item in form.placenta" :key="item.value" class="choice-item">
                <input :id="`placenta-${item.value}`" v-model="item.checked" type="checkbox" />
                <label :for="`placenta-${item.value}`" class="choice-text">{{ item.label }}</label>
                <FieldHelp v-if="item.help" :text="item.help" />
              </div>
            </div>
            <div class="radio-group">
              <FormLabel text="Esterilización quirúrgica" :help="help.fields.esterilizacion" group />
              <div v-for="option in form.esterilizacionOptions" :key="option.value" class="choice-item">
                <input :id="`esterilizacion-${option.value}`" v-model="form.esterilizacion" type="radio" :value="option.value" />
                <label :for="`esterilizacion-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
            <div class="radio-group">
              <FormLabel text="Acompañante presente en la atención médica del recién nacido" :help="help.fields.acompananteRn" group />
              <div v-for="option in form.acompananteRnOptions" :key="option.value" class="choice-item">
                <input :id="`acompanante-rn-${option.value}`" v-model="form.acompananteRn" type="radio" :value="option.value" />
                <label :for="`acompanante-rn-${option.value}`" class="choice-text">{{ option.label }}</label>
                <FieldHelp v-if="option.help" :text="option.help" />
              </div>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend>
              <span class="legend-row">
                Notas adicionales
                <FieldHelp :text="help.sections.notas" />
              </span>
            </legend>
            <label class="form-field">
              <FormLabel text="Comentarios o peticiones especiales" :help="help.fields.notasAdicionales" />
              <textarea
                v-model="form.notasAdicionales"
                rows="4"
                placeholder="Cualquier otra preferencia que quieras compartir con tu equipo médico."
              />
            </label>
          </fieldset>

          <div class="form-actions">
            <p class="form-note">
              Este documento refleja tus preferencias personales. Las decisiones finales dependerán siempre de tu salud y la de tu bebé.
            </p>
            <button type="submit" class="submit-button" :disabled="isGenerating">
              {{ isGenerating ? 'Generando PDF...' : 'Descargar plan de parto (PDF)' }}
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.plan-page {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
  min-height: 100vh;
  background: #fafafa;
}

.plan-header {
  background: linear-gradient(360deg, rgb(135, 168, 149) 0%, #1e4238 100%);
  color: white;
  padding: 3rem 0 4rem;
}

.container {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 2rem;
}

.back-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
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
  font-size: 1.125rem;
  line-height: 1.7;
  opacity: 0.95;
  max-width: 640px;
}

.help-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  font-size: 0.7rem;
  font-weight: 700;
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  vertical-align: middle;
}

.plan-form-section {
  padding: 3rem 0 4rem;
  margin-top: -1.5rem;
}

.plan-form {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.form-section {
  border: none;
  padding: 0;
  margin: 0 0 2.5rem;
}

.form-section legend {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e4238;
  margin-bottom: 1.25rem;
  padding: 0;
}

.legend-row {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field :deep(.form-label) {
  font-size: 0.95rem;
  font-weight: 500;
  color: #444;
}

.form-field-full {
  grid-column: 1 / -1;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 0.75rem 0.875rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font: inherit;
  color: #333;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: rgb(135, 168, 149);
  box-shadow: 0 0 0 3px rgba(135, 168, 149, 0.15);
}

.checkbox-group,
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.checkbox-group :deep(.form-label-group),
.radio-group :deep(.form-label-group) {
  font-size: 0.95rem;
  font-weight: 500;
  color: #444;
}

.choice-item {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.95rem;
  color: #555;
}

.choice-item input {
  margin-top: 0.2rem;
  accent-color: rgb(135, 168, 149);
  flex-shrink: 0;
}

.choice-text {
  flex: 1;
  cursor: pointer;
  line-height: 1.45;
}

.form-actions {
  border-top: 1px solid #eee;
  padding-top: 2rem;
  text-align: center;
}

.form-note {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
}

.submit-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: rgb(135, 168, 149);
  color: white;
  border: none;
  border-radius: 50px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(135, 168, 149, 0.3);
}

.submit-button:hover:not(:disabled) {
  background: #1e4238;
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.25rem;
  }

  .plan-form {
    padding: 1.5rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
