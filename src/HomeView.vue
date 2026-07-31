<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import HomeHero from '@/components/HomeHero.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <HomeHero />
    <main class="flex-1">
      <AboutSection />
      <ProjectsSection />
    </main>
    <SiteFooter />
  </div>
</template>
