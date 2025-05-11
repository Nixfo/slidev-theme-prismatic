# slidev-theme-prismatic

<!-- [![NPM version](https://img.shields.io/npm/v/slidev-theme-prismatic?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-prismatic) -->

A colorful, card-based theme for [Slidev](https://github.com/slidevjs/slidev).

**Live demo**: https://nixfo.github.io/slidev-theme-prismatic

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>prismatic</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Layouts

This theme provides the following layouts:

### `intro`
Introduction slide with title, author, date and event information

```markdown
---
theme: prismatic
title: How to make a <span class="title-highlight">Slidev</span> <span class="title-accent">theme?</span>
subtitle: PowerPoint is now an old pain
author: Author
date: Date
event: Event or conference
layout: intro
---

::logo::
<img src="/slidev-logo.png" class="h-12" />

::footer::
<div class="text-sm opacity-50">Footer placeholder</div>
```

![Intro layout light](/assets/intro.png)
![Intro layout dark](/assets/intro-dark.png)

### `card-grid`
Grid layout optimized for ContentCard components

```markdown
---
layout: card-grid
cols: 2
gap: 6
title: Card-grid Layout (2 cols, gap 6)
---

<ContentCard v-click color="blue" icon="i-carbon:cloud">

### Maximum Flexibility
Complete customization based on your needs

</ContentCard>

<ContentCard v-click color="teal" icon="i-carbon:security">

### Enhanced Security
Data protection at all levels

</ContentCard>

<ContentCard v-click color="amber" icon="i-carbon:currency">

### Optimized Costs
Significant reduction in expenses

</ContentCard>

<ContentCard v-click color="rose" icon="i-carbon:chart-line">

### Performance
Continuous improvement of key indicators

</ContentCard>
```

![card-grid layout light](/assets/card-grid.png)
![card-grid layout dark](/assets/card-grid-dark.png)

### `interactive-content`
Two-column interactive layout with selection and dynamic content

```markdown
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
  [...]
</ContentCard>

<script setup>
import { ref } from 'vue'
const activeSection = ref(null)
</script>
```

![interactive-content layout light](/assets/interactive-content.png)
![interactive-content layout dark](/assets/interactive-content-dark.png)

## Components

This theme provides the following components:

### `<ContentCard />`

This component displays a content card with a colored background

```html
<ContentCard v-click color="rose" icon="i-carbon:idea" title="Title of the content card">
Content of the card
</ContentCard>
```


### Utilities

![Utilities components light](/assets/utilities.png)
![Utilities components dark](/assets/utilities-dark.png)

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
