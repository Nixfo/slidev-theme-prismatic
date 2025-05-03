<template>
  <div class="slidev-layout four-cards-layout">
    <h1 v-if="$slots.title || slideTitle">
      <slot name="title">{{ slideTitle }}</slot>
    </h1>

    <div class="grid grid-cols-2 gap-4 mt-4">
      <InfoCard class="card-1" :color="colors[0]">
        <slot name="card1"></slot>
      </InfoCard>

      <InfoCard class="card-2" :color="colors[1]">
        <slot name="card2"></slot>
      </InfoCard>

      <InfoCard class="card-3" :color="colors[2]">
        <slot name="card3"></slot>
      </InfoCard>

      <InfoCard class="card-4" :color="colors[3]">
        <slot name="card4"></slot>
      </InfoCard>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'; 

const props = defineProps({
  colors: {
    type: Array,
    default: ['blue', 'teal', 'amber', 'rose'],
  }
})
const slideTitle = computed(() => $frontmatter.title);
</script>

<style>
.four-cards-layout {
  padding: 1rem 2rem;
}
</style>