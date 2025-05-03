<template>
  <div class="slidev-layout intro flex flex-col justify-center items-center text-center h-full">
    <!-- Logo -->
    <div class="logo-container mb-4">
      <slot name="logo"></slot>
    </div>
    
    <!-- Main content -->
    <div class="content-container max-w-4xl px-8 mb-8">
      <!-- Title -->
      <h1 v-if="$slidev.configs.title" class="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
        <div v-html="$slidev.configs.title"></div>
      </h1>
      
      <!-- Optional subtitle -->
      <div v-if="$slidev.configs.subtitle" class="text-xl sm:text-2xl opacity-80 mb-8">
        <div v-html="$slidev.configs.subtitle"></div>
      </div>
      
      <!-- Metadata -->
      <div class="flex flex-wrap justify-center gap-x-8 gap-y-2 text-base opacity-70 mt-8">
        <div v-if="$slidev.configs.author" class="flex items-center">
          <div class="i-carbon:user mr-2"></div> {{ $slidev.configs.author }}
        </div>
        <div v-if="$slidev.configs.date" class="flex items-center">
          <div class="i-carbon:calendar mr-2"></div> {{ $slidev.configs.date }}
        </div>
        <div v-if="$slidev.configs.event" class="flex items-center">
          <div class="i-carbon:presentation-file mr-2"></div> {{ $slidev.configs.event }}
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="mt-auto w-full">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
.logo-container {
  max-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
