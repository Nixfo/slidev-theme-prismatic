<template>
  <div class="slidev-layout whoami-layout">
    <div class="whoami-card">
      <div class="whoami-main">
        <div class="whoami-photo-wrap">
          <img
            v-if="avatar"
            :src="avatar"
            :alt="name ? 'Photo of ' + name : 'Presenter photo'"
            class="whoami-photo"
          />
          <div v-else class="whoami-photo-placeholder" aria-hidden="true">
            <div class="i-carbon:user-avatar text-5xl opacity-60"></div>
          </div>
        </div>

        <div class="whoami-content">
          <h1 class="whoami-name">
            {{ name || "Your Name" }}
          </h1>

          <p v-if="role" class="whoami-role">
            {{ role }}
          </p>

          <div v-if="company" class="whoami-company">
            <div class="i-carbon:building mr-2 text-lg"></div>
            <span>{{ company }}</span>
          </div>
        </div>
      </div>

      <div v-if="$slots.default" class="whoami-extra">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "",
  },
  company: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: "",
  },
});
</script>

<style>
.whoami-layout {
  @apply h-full grid place-items-center px-6;
}

.whoami-card {
  @apply w-full max-w-5xl rounded-2xl p-10;
  @apply bg-white/80 dark:bg-gray-900/60;
  @apply border border-gray-200/80 dark:border-gray-700/60 shadow-lg;
  backdrop-filter: blur(6px);
}

.whoami-main {
  @apply grid items-center gap-8 grid-cols-[260px_1fr];
}

.whoami-photo-wrap {
  @apply flex justify-center;
}

.whoami-photo {
  @apply h-52 w-52  rounded-2xl object-cover;
  @apply ring-4 ring-white dark:ring-gray-800 shadow-md;
}

.whoami-photo-placeholder {
  @apply h-52 w-52 rounded-2xl;
  @apply bg-gradient-to-br from-sky-100 to-blue-50 dark:from-sky-900/40 dark:to-blue-900/20;
  @apply border border-sky-200/70 dark:border-sky-700/40;
  @apply flex items-center justify-center text-sky-700 dark:text-sky-200;
}

.whoami-name {
  @apply text-4xl sm:text-5xl font-extrabold leading-tight mb-3;
}

.whoami-role {
  @apply text-xl sm:text-2xl font-semibold mb-5;
  @apply text-gray-700 dark:text-gray-200;
}

.whoami-company {
  @apply inline-flex items-center rounded-full px-4 py-2;
  @apply bg-sky-100/80 dark:bg-sky-900/40;
  @apply text-sky-900 dark:text-sky-100 font-medium;
}

.whoami-extra {
  @apply mt-8 text-base text-gray-600 dark:text-gray-300;
}
</style>
