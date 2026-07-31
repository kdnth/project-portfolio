<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="rounded-md border border-line bg-ink px-2.5 py-1 text-xs font-medium tracking-wide text-fog"
  >
    {{ label }}
  </span>
</template>
