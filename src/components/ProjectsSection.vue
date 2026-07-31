<script setup lang="ts">
import ProjectPreviewCard from '@/components/ProjectPreviewCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="projects" class="scroll-mt-8 px-6 py-20 sm:px-10" aria-labelledby="projects-heading">
    <div class="mx-auto max-w-5xl">
      <div class="max-w-2xl">
        <h2 id="projects-heading" class="font-display text-4xl text-lilac sm:text-5xl">Projects</h2>
        <p class="mt-4 text-base leading-relaxed text-fog sm:text-lg">
          Selected work across full-stack apps and client-side tools. All project logos were designed
          in Figma by me.
        </p>
      </div>

      <ul class="mt-12 grid list-none gap-8 p-0 md:grid-cols-1 lg:grid-cols-1">
        <li
          v-for="(project, index) in projects"
          :key="project.id"
          class="animate-fade-up"
          :style="{ animationDelay: `${0.08 * index}s` }"
        >
          <ProjectPreviewCard :project="project" />
        </li>
      </ul>
    </div>
  </section>
</template>
