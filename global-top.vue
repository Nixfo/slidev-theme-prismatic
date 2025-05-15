<template>
  <div class="progress-bar" :style="`width: ${progressPercentage}%`"></div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { useNav } from '@slidev/client';

const { currentPage, total } = useNav();

const progressPercentage = computed(() => {
  if (!total.value) return 0;
  return (currentPage.value / total.value) * 100;
});
</script>

<style>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(to right, var(--slidev-theme-primary), rgba(255, 255, 255, 0.7));
  transition: width 0.3s ease;
  z-index: 1000;
  pointer-events: none;
}
.dark .progress-bar {
  background: linear-gradient(to right, var(--slidev-theme-primary), rgba(30, 30, 30, 0.7));
}
</style>
