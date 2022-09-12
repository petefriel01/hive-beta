<template>
    <OneColumn>
        <v-timeline>
            <v-timeline-item size="large">
                <template v-slot:icon>
                    <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
                </template>
                <template v-slot:opposite>
                    <span>Tus eu perfecto</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="text-h5">
                        Lorem ipsum
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, no nam oblique veritus.
                        Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
                        Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </OneColumn>
</template>

<script setup lang='ts'>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import {
    defineAsyncComponent
} from 'vue';
const Header = defineAsyncComponent(() => import('@/components/AppHeader.vue'));
const OneColumn = defineAsyncComponent(() => import('@/layouts/OneColumn.vue'));

const store = useCounterStore();

const { count } = storeToRefs(store);

store.increment();

console.log(store.doubleCount);
console.log(count);
</script>
