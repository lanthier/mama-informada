<script setup>
const FORM_ID = 'da3ebe27-1731-4409-b896-dc7c6acf579d'
const containerRef = ref(null)

function loadForm() {
  const container = containerRef.value
  if (!container) return

  container.innerHTML = ''

  const script = document.createElement('script')
  script.async = true
  script.setAttribute('data-beehiiv-form', FORM_ID)
  script.src = window.__bhv_embeds
    ? `https://subscribe-forms.beehiiv.com/v3/loader.js?_=${Date.now()}`
    : 'https://subscribe-forms.beehiiv.com/v3/loader.js'
  container.appendChild(script)
}

onMounted(() => {
  nextTick(loadForm)
})
</script>

<template>
  <div class="beehiiv-form-wrapper">
    <div ref="containerRef" class="beehiiv-form" />
  </div>
</template>

<style scoped>
.beehiiv-form-wrapper {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  width: 100%;
}

.beehiiv-form {
  min-height: 120px;
  width: 100%;
  max-width: 560px;
}
</style>
