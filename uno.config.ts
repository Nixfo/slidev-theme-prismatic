import presetLegacyCompat from '@unocss/preset-legacy-compat'
import { defineConfig } from 'unocss';

const colors = [
  "blue", "red", "green", "sky", "emerald", 
  "amber", "purple", "teal", "indigo", "fuchsia", 
  "pink", "rose", "violet", "lime", "yellow", 
  "cyan", "stone", "slate", "zinc", "neutral"
];

const safelist = colors.flatMap(color => [
  `from-${color}-50`, 
  `dark:from-${color}-900/20`, 
  `bg-${color}-50`, 
  `bg-${color}-100`, 
  `dark:bg-${color}-900/50`, 
  `text-${color}-500`, 
  `text-${color}-700`, 
  `dark:text-${color}-300`, 
  `border-${color}-500`, 
]).concat('gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-7', 'gap-8', 'gap-9', 'gap-10');

export default defineConfig({
  safelist: safelist,
  presets: [
    presetLegacyCompat({
      legacyColorSpace: true,
    }),
  ],
});