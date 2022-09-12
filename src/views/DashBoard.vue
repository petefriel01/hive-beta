<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

// Layout
const OneColumn = defineAsyncComponent(() => import('@/layouts/OneColumn.vue'));

// Components
const ArticleAnalytics = defineAsyncComponent(() => import('../components/ArticleAnalytics.vue'));
const ArticleTimeline = defineAsyncComponent(() => import('../components/ArticleTimeline.vue'));

</script>

<template>
    <OneColumn>
        <v-row>
            <v-col cols="12" xs="12" lg="2" class="dev" >
                <ArticleAnalytics/>
            </v-col>
            <v-col cols="12" xs="12" lg="10" class="dev">
                <ArticleTimeline />
            </v-col>
        </v-row>
    </OneColumn>
</template>
<style>
    .dev{
        border: solid 1px red;
    }
</style>