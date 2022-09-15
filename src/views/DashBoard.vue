<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

// Layout
const OneColumn = defineAsyncComponent(() => import('@/layouts/OneColumn.vue'));

// Components
const ArticleAnalytics = defineAsyncComponent(() => import('../components/ArticleAnalytics.vue'));

</script>

<template>
    <OneColumn>
        <v-row>
            <v-col cols="12" xs="12" lg="12">
                <ArticleAnalytics/>
            </v-col>
        </v-row>
    </OneColumn>
</template>