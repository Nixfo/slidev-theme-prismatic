<template>
    <div class="slidev-layout interactive-layout">
        <h1 v-if="$frontmatter?.title">{{ $frontmatter.title }}</h1>

        <div class="interactive-content-layout">
            <div class="selection-area">
                <slot name="selection"></slot>
            </div>

            <div class="content-area">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<style>
.interactive-layout {
    display: flex;
    flex-direction: column;
}

.interactive-content-layout {
    display: flex;
    gap: 1.5rem;
    flex: 1;
    min-height: 0; /* For flex:1 to work correctly */
}

.selection-area {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.content-area {
    flex: 1.5;
    overflow-y: auto;
}
</style>
