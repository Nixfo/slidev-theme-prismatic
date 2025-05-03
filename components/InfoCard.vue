<template>
  <div class="info-card" :class="colorClasses">
      <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

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

const colorStyles = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
  },
  sky: {
    bg: 'bg-sky-50 dark:bg-sky-900/20',
    border: 'border-sky-200 dark:border-sky-800',
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    border: 'border-cyan-200 dark:border-cyan-800',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
  },
  lime: {
    bg: 'bg-lime-50 dark:bg-lime-900/20',
    border: 'border-lime-200 dark:border-lime-800',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    border: 'border-teal-200 dark:border-teal-800',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    border: 'border-indigo-200 dark:border-indigo-800',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
  },
  yellow: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
  },
  red: {
    bg: 'bg-red50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-900/20',
    border: 'border-violet-200 dark:border-violet-800',
  },
  fuchsia: {
    bg: 'bg-fuchsia-50 dark:bg-fuchsia-900/20',
    border: 'border-fuchsia-200 dark:border-fuchsia-800',
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    border: 'border-pink-200 dark:border-pink-800',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-200 dark:border-rose-800',
  },
  stone: {
    bg: 'bg-stone-50 dark:bg-stone-900/20',
    border: 'border-stone-200 dark:border-stone-800',
  },
  slate: {
    bg: 'bg-slate-50 dark:bg-slate-900/20',
    border: 'border-slate-200 dark:border-slate-800',
  },
  gray: {
    bg: 'bg-gray-50 dark:bg-gray-900/20',
    border: 'border-gray-200 dark:border-gray-800',
  },
  zinc: {
    bg: 'bg-zinc-50 dark:bg-zinc-900/20',
    border: 'border-zinc-200 dark:border-zinc-800',
  },
  neutral: {
    bg: 'bg-neutral-50 dark:bg-neutral-900/20',
    border: 'border-neutral-200 dark:border-neutral-800',
  },
}
const commonColorStyles = 'rounded-lg shadow-sm p-5 border';

const colorClasses = computed(() => {
  const style = colorStyles[props.color] || colorStyles.blue;
  return `${style.bg} ${style.border} ${commonColorStyles}`;
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
