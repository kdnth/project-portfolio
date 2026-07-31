<script setup lang="ts">
import { ref } from 'vue'
import LiveButton from '@/components/LiveButton.vue'
import SourceCodeButton from '@/components/SourceCodeButton.vue'
import TechTag from '@/components/TechTag.vue'
import type { Project } from '@/data/projects'

const props = defineProps<{
  project: Project
}>()

const expanded = ref(false)

function toggleDescription() {
  expanded.value = !expanded.value
}
</script>

<template>
  <article
    class="group overflow-hidden rounded-2xl border border-line bg-ink-raised/80 transition-colors duration-300 hover:border-sage/40"
  >
    <div class="relative aspect-[16/10] overflow-hidden bg-ink-soft">
      <img
        :src="props.project.screenshot"
        :alt="props.project.screenshotAlt"
        class="size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        loading="lazy"
      />
    </div>

    <div class="flex flex-col gap-4 p-5 sm:p-6">
      <div class="flex items-start gap-3">
        <img
          :src="props.project.logo"
          :alt="props.project.logoAlt"
          class="size-12 shrink-0 rounded-lg bg-ink object-contain"
          loading="lazy"
        />
        <div class="min-w-0">
          <h3 class="text-xl font-semibold tracking-tight text-white">{{ props.project.name }}</h3>
          <p class="mt-1 text-sm leading-relaxed text-fog">{{ props.project.summary }}</p>
        </div>
      </div>

      <div>
        <button
          type="button"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-lilac transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac"
          :aria-expanded="expanded"
          :aria-controls="`desc-${props.project.id}`"
          @click="toggleDescription"
        >
          {{ expanded ? 'Hide details' : 'Read more' }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-4 transition-transform duration-200"
            :class="{ 'rotate-180': expanded }"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          :id="`desc-${props.project.id}`"
          class="grid transition-[grid-template-rows] duration-300 ease-out"
          :class="expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <div class="overflow-hidden">
            <p class="pt-3 text-sm leading-relaxed text-mist">
              {{ props.project.description }}
            </p>
          </div>
        </div>
      </div>

      <ul class="flex flex-wrap gap-2" aria-label="Tech stack">
        <li v-for="tag in props.project.tags" :key="tag">
          <TechTag :label="tag" />
        </li>
      </ul>

      <div class="flex flex-wrap gap-2 pt-1">
        <LiveButton :link="props.project.liveUrl" />
        <SourceCodeButton :link="props.project.sourceUrl" />
      </div>
    </div>
  </article>
</template>
