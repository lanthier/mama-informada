<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})

const isOpen = ref(false)
const helpId = useId()

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

function onDocumentClick(event) {
  if (!event.target.closest(`[data-help-id="${helpId}"]`)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
})
</script>

<template>
  <span class="field-help" :data-help-id="helpId">
    <button
      type="button"
      class="field-help-trigger"
      :aria-expanded="isOpen"
      :aria-describedby="isOpen ? helpId : undefined"
      aria-label="Más información sobre este campo"
      @click.stop="toggle"
    >
      i
    </button>
    <span
      :id="helpId"
      class="field-help-tooltip"
      :class="{ open: isOpen }"
      role="tooltip"
    >
      {{ text }}
    </span>
  </span>
</template>

<style scoped>
.field-help {
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.field-help-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  padding: 0;
  border: 1px solid rgba(135, 168, 149, 0.5);
  border-radius: 50%;
  background: rgba(135, 168, 149, 0.12);
  color: #1e4238;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  line-height: 1;
  cursor: help;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.field-help-trigger:hover,
.field-help-trigger:focus-visible {
  background: rgba(135, 168, 149, 0.22);
  border-color: rgb(135, 168, 149);
  outline: none;
}

.field-help-tooltip {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 0.5rem);
  transform: translateX(-50%);
  z-index: 20;
  width: min(18rem, 72vw);
  padding: 0.75rem 0.875rem;
  border-radius: 10px;
  background: #1e4238;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.55;
  text-align: left;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease, visibility 0.15s ease;
}

.field-help-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #1e4238;
}

.field-help:hover .field-help-tooltip,
.field-help:focus-within .field-help-tooltip,
.field-help-tooltip.open {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .field-help-tooltip {
    left: auto;
    right: 0;
    transform: none;
  }

  .field-help-tooltip::after {
    left: auto;
    right: 0.5rem;
    transform: none;
  }
}
</style>
