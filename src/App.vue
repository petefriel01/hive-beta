<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';
const BaseHeader = defineAsyncComponent(() => import('@/components/BaseHeader.vue'));
</script>
<template>
    <v-app>
        <BaseHeader/>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>