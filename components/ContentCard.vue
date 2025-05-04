<template>
  <div 
    class="content-card rounded-lg shadow-sm p-5"
    :class="[`bg-gradient-to-br from-${color}-50 to-white dark:from-${color}-900/20 dark:to-gray-900`]"
    v-bind="$attrs"
  >
    <div :class="{ 'flex items-start': hasIcon }">
      <!-- Icon section (optional) -->
      <div 
        v-if="hasIcon"
        :class="[
          'text-xl p-2 rounded-full mr-3 flex items-center justify-center',
          `bg-${color}-100 dark:bg-${color}-900/50`
        ]"
      >
        <div :class="[iconClass, `text-${color}-500 dark:text-${color}-300`]"></div>
      </div>
      
      <!-- Content section -->
      <div class="flex-1">
        <div v-if="title" :class="[`text-${color}-700 dark:text-${color}-300 font-bold text-lg mb-1`]">
          {{ title }}
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'blue',
  },
  icon: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  }
})

// Determine if we should show an icon
const hasIcon = computed(() => !!props.icon)

// 'carbon:chart-maximum' -> 'i-carbon:chart-maximum'
const iconClass = computed(() => {
  if (!props.icon) return '';
  if (props.icon.startsWith('i-')) {
    return props.icon;
  }
  return `i-${props.icon}`;
})
</script>

<style>
.content-card[class*="from-blue-50"] h3:first-of-type { @apply text-blue-700 dark:text-blue-300; }
.content-card[class*="from-green-50"] h3:first-of-type { @apply text-green-700 dark:text-green-300; }
.content-card[class*="from-teal-50"] h3:first-of-type { @apply text-teal-700 dark:text-teal-300; }
.content-card[class*="from-amber-50"] h3:first-of-type { @apply text-amber-700 dark:text-amber-300; }
.content-card[class*="from-rose-50"] h3:first-of-type { @apply text-rose-700 dark:text-rose-300; }
.content-card[class*="from-purple-50"] h3:first-of-type { @apply text-purple-700 dark:text-purple-300; }
.content-card[class*="from-sky-50"] h3:first-of-type { @apply text-sky-700 dark:text-sky-300; }
.content-card[class*="from-indigo-50"] h3:first-of-type { @apply text-indigo-700 dark:text-indigo-300; }
.content-card[class*="from-violet-50"] h3:first-of-type { @apply text-violet-700 dark:text-violet-300; }
.content-card[class*="from-pink-50"] h3:first-of-type { @apply text-pink-700 dark:text-pink-300; }
.content-card[class*="from-fuchsia-50"] h3:first-of-type { @apply text-fuchsia-700 dark:text-fuchsia-300; }
.content-card[class*="from-lime-50"] h3:first-of-type { @apply text-lime-700 dark:text-lime-300; }
.content-card[class*="from-emerald-50"] h3:first-of-type { @apply text-emerald-700 dark:text-emerald-300; }
.content-card[class*="from-cyan-50"] h3:first-of-type { @apply text-cyan-700 dark:text-cyan-300; }
.content-card[class*="from-yellow-50"] h3:first-of-type { @apply text-yellow-700 dark:text-yellow-300; }
.content-card[class*="from-red-50"] h3:first-of-type { @apply text-red-700 dark:text-red-300; }
</style>