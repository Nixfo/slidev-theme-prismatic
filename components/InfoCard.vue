<template>
  <div class="info-card" :class="`rounded-lg shadow-sm p-5 border bg-${color}-50 dark:bg-${color}-900/20 border-${color}-200 dark:border-${color}-800`">
      <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'blue'
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style>
  .info-card h3:first-of-type,
  .info-card h4:first-of-type {
    font-weight: bold;
    margin-bottom: 0.75rem;
  }

  .info-card[class*="bg-blue"] h3:first-of-type { @apply text-blue-700; }
  .info-card[class*="bg-green"] h3:first-of-type { @apply text-green-700; }
  .info-card[class*="bg-teal"] h3:first-of-type { @apply text-teal-700; }
  .info-card[class*="bg-amber"] h3:first-of-type { @apply text-amber-700; }
  .info-card[class*="bg-rose"] h3:first-of-type { @apply text-rose-700; }
  .info-card[class*="bg-purple"] h3:first-of-type { @apply text-purple-700; }
  .info-card[class*="bg-sky"] h3:first-of-type { @apply text-sky-700; }
  .info-card[class*="bg-indigo"] h3:first-of-type { @apply text-indigo-700; }
  .info-card[class*="bg-violet"] h3:first-of-type { @apply text-violet-700; }
  .info-card[class*="bg-pink"] h3:first-of-type { @apply text-pink-700; }
  .info-card[class*="bg-fuchsia"] h3:first-of-type { @apply text-fuchsia-700; }
  .info-card[class*="bg-lime"] h3:first-of-type { @apply text-lime-700; }
  .info-card[class*="bg-emerald"] h3:first-of-type { @apply text-emerald-700; }
  .info-card[class*="bg-cyan"] h3:first-of-type { @apply text-cyan-700; }
  .info-card[class*="bg-yellow"] h3:first-of-type { @apply text-yellow-700; }
  .info-card[class*="bg-red"] h3:first-of-type { @apply text-red-700; }

  .dark .info-card[class*="bg-blue"] h3:first-of-type { @apply text-blue-300; }
  .dark .info-card[class*="bg-green"] h3:first-of-type { @apply text-green-300; }
  .dark .info-card[class*="bg-teal"] h3:first-of-type { @apply text-teal-300; }
  .dark .info-card[class*="bg-amber"] h3:first-of-type { @apply text-amber-300; }
  .dark .info-card[class*="bg-rose"] h3:first-of-type { @apply text-rose-300; }
  .dark .info-card[class*="bg-purple"] h3:first-of-type { @apply text-purple-300; }
  .dark .info-card[class*="bg-sky"] h3:first-of-type { @apply text-sky-300; }
  .dark .info-card[class*="bg-indigo"] h3:first-of-type { @apply text-indigo-300; }
  .dark .info-card[class*="bg-violet"] h3:first-of-type { @apply text-violet-300; }
  .dark .info-card[class*="bg-pink"] h3:first-of-type { @apply text-pink-300; }
  .dark .info-card[class*="bg-fuchsia"] h3:first-of-type { @apply text-fuchsia-300; }
  .dark .info-card[class*="bg-lime"] h3:first-of-type { @apply text-lime-300; }
  .dark .info-card[class*="bg-emerald"] h3:first-of-type { @apply text-emerald-300; }
  .dark .info-card[class*="bg-cyan"] h3:first-of-type { @apply text-cyan-300; }
  .dark .info-card[class*="bg-yellow"] h3:first-of-type { @apply text-yellow-300; }
  .dark .info-card[class*="bg-red"] h3:first-of-type { @apply text-red-300; }
</style>
