<script setup lang="ts">
const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/kdnth',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kadenthrower',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:kcthrow.616@gmail.com',
    external: false,
  },
] as const
</script>

<template>
  <footer id="contact" class="border-t border-line px-6 py-14 sm:px-10">
    <div class="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="font-display text-3xl text-white">Kaden Thrower</p>
        <p class="mt-2 text-sm text-fog">Charlotte, NC · open to Seattle</p>
        <p class="mt-4 max-w-sm text-xs leading-relaxed text-fog/80">
          Personal and project logos designed in Figma.
        </p>
      </div>

      <nav aria-label="Contact">
        <ul class="flex flex-wrap gap-x-6 gap-y-3">
          <li v-for="link in links" :key="link.label">
            <a
              :href="link.href"
              class="text-sm font-medium text-mist transition-colors hover:text-sage-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
