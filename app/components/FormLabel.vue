<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  help: {
    type: String,
    default: '',
  },
  group: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <span class="form-label" :class="{ 'form-label-group': group }">
    <span>{{ text }}</span>
    <FieldHelp v-if="help" :text="help" />
  </span>
</template>

<style scoped>
.form-label {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

.form-label-group {
  display: flex;
  margin-bottom: 0.25rem;
}
</style>
