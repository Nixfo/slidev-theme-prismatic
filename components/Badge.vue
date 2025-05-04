<template>
  <span class="badge" :class="[`badge-${type}`, { 'badge-outlined': outlined }]">
    <slot></slot>
  </span>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'success', 'warning', 'error', 'info', 'accent'].includes(value)
  },
  outlined: {
    type: Boolean,
    default: false
  }
})
</script>

<style>
.badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  padding: 0.1em 0.6em;
  border-radius: 4px;
  vertical-align: middle;
  white-space: nowrap;
}

/* Filled badges */
.badge-primary {
  background-color: var(--slidev-theme-primary);
  color: white;
}

.badge-success {
  background-color: #22c55e;
  color: white;
}

.badge-warning {
  background-color: #f59e0b;
  color: white;
}

.badge-error {
  background-color: #ef4444;
  color: white;
}

.badge-info {
  background-color: #3b82f6;
  color: white;
}

.badge-accent {
  background-color: var(--slidev-theme-accent);
  color: white;
}

/* Outlined badges */
.badge-outlined {
  background-color: transparent;
}

.badge-outlined.badge-primary {
  border: 1px solid var(--slidev-theme-primary);
  color: var(--slidev-theme-primary);
}

.badge-outlined.badge-success {
  border: 1px solid #22c55e;
  color: #22c55e;
}

.badge-outlined.badge-warning {
  border: 1px solid #f59e0b;
  color: #f59e0b;
}

.badge-outlined.badge-error {
  border: 1px solid #ef4444;
  color: #ef4444;
}

.badge-outlined.badge-info {
  border: 1px solid #3b82f6;
  color: #3b82f6;
}

.badge-outlined.badge-accent {
  border: 1px solid var(--slidev-theme-accent);
  color: var(--slidev-theme-accent);
}

/* Dark mode adjustments */
.dark .badge-outlined {
  opacity: 0.9;
}
</style>