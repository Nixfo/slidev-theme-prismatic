<template>
  <div class="slidev-layout card-grid-layout">
    <h1 v-if="$slots.title || slideTitle">
      <slot name="title">{{ slideTitle }}</slot>
    </h1>

    <div class="grid" :class="gridClass">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'; 

const props = defineProps({
  cols: {
    type: [Number, String],
    default: 2
  },
  gap: {
    type: [Number],
    default: 4
  }
})

const gridClass = computed(() => {
  return {
    [`grid-cols-${props.cols}`]: true,
    [`gap-${props.gap}`]: true,
  }
});

const slideTitle = computed(() => $frontmatter.title);
</script>

<style>
.card-grid-layout {
  padding: 1rem 2rem;
}
</style>