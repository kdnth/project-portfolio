<script setup lang="ts">
defineProps<{
  link: string
  label?: string
}>()
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 rounded-xl border border-line bg-ink-soft px-3 py-2 text-sm font-medium text-mist transition-colors duration-200 hover:border-lilac hover:text-lilac focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac"
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
        d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      />
    </svg>
    <span>{{ label ?? 'Source' }}</span>
  </a>
</template>
