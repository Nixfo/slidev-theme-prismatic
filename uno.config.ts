import { defineConfig } from 'unocss';

const colors = [
  "blue", "red", "green", "sky", "emerald", 
  "amber", "purple", "teal", "indigo", "fuchsia", 
  "pink", "rose", "violet", "lime", "yellow", 
  "cyan", "stone", "slate", "zinc", "neutral"
];

// Génère un tableau plat de toutes les classes
const safelist = colors.flatMap(color => [
  `from-${color}-50`, 
  `dark:from-${color}-900/20`, 
  `bg-${color}-50`, 
  `bg-${color}-100`, 
  `dark:bg-${color}-900/20`, 
  `dark:bg-${color}-900/50`, 
  `text-${color}-500`, 
  `text-${color}-700`, 
  `dark:text-${color}-300`, 
  `border-${color}-200`, 
  `dark:border-${color}-800`
]);

export default defineConfig({
  safelist: safelist,
});