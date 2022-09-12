<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

// Components
const ArticlesTimeline = defineAsyncComponent(() => import('../components/ArticlesTimeline.vue'));

</script>

<template>
    <ArticlesTimeline />
</template>