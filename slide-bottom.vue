<template>
    <div v-if="!['intro', 'cover'].includes($nav.currentLayout)" class="fixed right-5 bottom-5 text-slate-400">
        <SlideCurrentNo />
    </div>
</template>