---
layout: none
---

<div class="grid grid-cols-5 gap-4 p-4">
    <InfoCard v-for="color in colors" :key="color" :color="color">
        <h3>{{ color }}</h3>
        <p>{{ color }} card</p>
    </InfoCard>
</div>

<script setup>
const colors = [
  'red', 'rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'amber',  
  'stale', 'stone', 'zinc', 'neutral'
];
</script>