<template>
  <div 
    :class="[
      'rounded-lg p-5 shadow-sm',
      `bg-gradient-to-br from-${color}-50 to-white dark:from-${color}-900/20 dark:to-gray-900`
    ]"
    v-bind="$attrs"
  >
    <div class="flex items-start">
      <div 
        :class="[
          'text-xl p-2 rounded-full mr-3 flex items-center justify-center',
          `bg-${color}-100 dark:bg-${color}-900/50`
        ]"
      >
        <div :class="[iconClass, `text-${color}-500 dark:text-${color}-300`]"></div>
      </div>
      
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
    default: 'i-carbon:help',
  },
  title: {
    type: String,
    default: '',
  }
})

// 'carbon:chart-maximum' -> 'i-carbon:chart-maximum'
const iconClass = computed(() => {
  if (props.icon.startsWith('i-')) {
    return props.icon;
  }
  return `i-${props.icon}`;
})
</script>
