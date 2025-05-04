---
layout: interactive-content
title: Interactive Content Layout (interactive-content)
---

::selection::
<div class="flex flex-col gap-4">
  <ContentCard 
    v-for="(item, index) in ['Features', 'Customization', 'Development']" 
    :key="index"
    :color="['blue', 'red', 'green'][index]"
    :icon="['i-carbon:idea', 'i-carbon:paint-brush', 'i-carbon:code'][index]"
    :title="item"
    @click="activeSection = index"
    :class="[
      'transition-all duration-300',
      activeSection === index 
        ? `scale-105 opacity-100 border-l-4 border-${['blue', 'red', 'green'][index]}-500` 
        : 'scale-100 opacity-80 border-l-4 border-transparent'
    ]"
  />
</div>

::content::
<div v-if="activeSection === null" class="flex flex-col items-center justify-center h-full text-gray-400 dark:text-gray-500">
  <div class="i-carbon:touch-interaction text-4xl mb-4"></div>
  <p class="text-xl">Select an item from the left to view its details</p>
</div>
<ContentCard v-else :color="['blue', 'red', 'green'][activeSection]" class="p-4 h-full">
  <div v-if="activeSection === 0">
    <h3>Slidev Core Features</h3>
    <p>Slidev comes with powerful features built for developers:</p>
    <ul>
      <li>Markdown-based slide authoring</li>
      <li>Support for Vue components</li>
      <li>Code highlighting with Prism or Shiki</li>
      <li>LaTeX equation rendering</li>
      <li>Integrated presenter mode</li>
    </ul>
  </div>
  
  <div v-else-if="activeSection === 1">
    <h3>Theme Customization</h3>
    <p>Make Slidev your own with extensive customization:</p>
    <ul>
      <li>Custom CSS and styling</li>
      <li>Flexible layout system</li>
      <li>Configurable transitions</li>
      <li>Global style variables</li>
      <li>Custom component integration</li>
    </ul>
  </div>
  
  <div v-else-if="activeSection === 2">
    <h3>Developer Experience</h3>
    <p>Slidev is designed with developers in mind:</p>
    <ul>
      <li>Hot module reloading</li>
      <li>Fast build times</li>
      <li>Vite-powered development</li>
      <li>Source code version control</li>
      <li>DevTools integration</li>
    </ul>
  </div>
</ContentCard>

<script setup>
import { ref } from 'vue'
const activeSection = ref(null)
</script>
