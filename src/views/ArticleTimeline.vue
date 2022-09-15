<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

// Layout
const OneColumn = defineAsyncComponent(() => import('@/layouts/OneColumn.vue'));

// Components
const ArticleTimeline = defineAsyncComponent(() => import('../components/ArticleTimeline.vue'));

</script>

<template>
    <OneColumn>
        <v-row>
            <v-col cols="12" xs="12" lg="12">
                <ArticleTimeline />
            </v-col>
        </v-row>
    </OneColumn>
</template>