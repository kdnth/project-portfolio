<script setup lang="ts">
import ResumeDownloadButton from '@/components/ResumeDownloadButton.vue'
</script>

<template>
  <header class="relative flex min-h-svh flex-col justify-center px-6 py-16 sm:px-10">
    <div class="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      <div class="animate-fade-in">
        <img
          src="@/assets/lg-logo.png"
          alt="Kaden Thrower"
          class="animate-soft-float max-w-56 sm:max-w-72 md:max-w-80"
          width="320"
          height="320"
        />
      </div>

      <p
        class="animate-fade-up mt-8 max-w-xl text-lg font-light leading-relaxed text-mist sm:text-xl"
        style="animation-delay: 0.15s"
      >
        Software engineer based in Charlotte, NC, open to relocation.
      </p>

      <div class="animate-fade-up mt-8" style="animation-delay: 0.3s">
        <ResumeDownloadButton />
      </div>

      <a
        href="#projects"
        class="animate-fade-up mt-14 inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-fog transition-colors hover:text-sage"
        style="animation-delay: 0.45s"
      >
        Projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-4"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </header>
</template>
