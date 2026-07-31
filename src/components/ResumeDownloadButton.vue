<script setup lang="ts">
import resumePdf from '@/assets/resume/kaden-resume-2026.pdf'

defineProps<{
  label?: string
}>()
</script>

<template>
  <a
    :href="resumePdf"
    download="Kaden-Thrower-Resume.pdf"
    class="inline-flex items-center gap-2 rounded-xl bg-sage px-5 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-sage-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-5 shrink-0"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
    <span>{{ label ?? 'Download resume' }}</span>
  </a>
</template>
