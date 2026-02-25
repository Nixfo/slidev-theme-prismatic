<template>
  <div class="alert" :class="`alert-${resolvedType}`" :role="resolvedRole" v-bind="$attrs">
    <div v-if="showIcon" class="alert-icon" :class="resolvedIcon"></div>
    <div class="alert-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'tip', 'info', 'warning', 'danger'].includes(value)
  },
  icon: {
    type: String,
    default: ''
  }
})

const typeDefaults = {
  success: {
    icon: 'i-carbon:checkmark'
  },
  tip: {
    icon: 'i-carbon:idea'
  },
  info: {
    icon: 'i-carbon:information'
  },
  danger: {
    icon: 'i-carbon:warning'
  },
  warning: {
    icon: 'i-carbon:warning-alt'
  }
}

const resolvedType = computed(() => {
  if (Object.prototype.hasOwnProperty.call(typeDefaults, props.type)) return props.type
  return 'info'
})

const resolvedRole = computed(() => ['warning', 'danger'].includes(resolvedType.value) ? 'alert' : 'status')

const resolvedIcon = computed(() => {
  if (!props.icon) return typeDefaults[resolvedType.value].icon
  if (props.icon.startsWith('i-')) return props.icon
  return `i-${props.icon}`
})

const showIcon = computed(() => !!resolvedIcon.value)
</script>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  border-radius: 0.5rem;
  padding: 0.5rem 0.625rem;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  line-height: 1.3;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
}

.alert-icon {
  flex-shrink: 0;
  width: 0.95rem;
  height: 0.95rem;
}

.alert-body {
  line-height: 1.3;
}

.alert-body :first-child {
  margin-top: 0;
}

.alert-body :last-child {
  margin-bottom: 0;
}

.alert-success {
  border: 1px solid rgba(34, 197, 94, 0.22);
  background-color: #f0fdf4;
  color: #166534;
}

.alert-success .alert-icon {
  color: #15803d;
}

.alert-tip {
  border: 1px solid rgba(168, 85, 247, 0.22);
  background-color: #faf5ff;
  color: #6b21a8;
}

.alert-tip .alert-icon {
  color: #7e22ce;
}

.alert-info {
  border: 1px solid rgba(59, 130, 246, 0.22);
  background-color: #eff6ff;
  color: #1e3a8a;
}

.alert-info .alert-icon {
  color: #2563eb;
}

.alert-danger {
  border: 1px solid rgba(239, 68, 68, 0.22);
  background-color: #fef2f2;
  color: #7f1d1d;
}

.alert-danger .alert-icon {
  color: #dc2626;
}

.alert-warning {
  border: 1px solid rgba(245, 158, 11, 0.24);
  background-color: #fffbeb;
  color: #78350f;
}

.alert-warning .alert-icon {
  color: #d97706;
}

.dark .alert-success {
  border-color: rgba(74, 222, 128, 0.3);
  background-color: rgba(34, 197, 94, 0.14);
  color: #bbf7d0;
}

.dark .alert-success .alert-icon {
  color: #86efac;
}

.dark .alert-tip {
  border-color: rgba(192, 132, 252, 0.3);
  background-color: rgba(168, 85, 247, 0.14);
  color: #e9d5ff;
}

.dark .alert-tip .alert-icon {
  color: #d8b4fe;
}

.dark .alert-info {
  border-color: rgba(96, 165, 250, 0.3);
  background-color: rgba(59, 130, 246, 0.14);
  color: #bfdbfe;
}

.dark .alert-info .alert-icon {
  color: #93c5fd;
}

.dark .alert-danger {
  border-color: rgba(248, 113, 113, 0.3);
  background-color: rgba(239, 68, 68, 0.14);
  color: #fecaca;
}

.dark .alert-danger .alert-icon {
  color: #fca5a5;
}

.dark .alert-warning {
  border-color: rgba(251, 191, 36, 0.3);
  background-color: rgba(245, 158, 11, 0.14);
  color: #fde68a;
}

.dark .alert-warning .alert-icon {
  color: #fcd34d;
}
</style>
