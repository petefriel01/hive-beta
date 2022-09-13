<template>
    <v-timeline-item
        size="large">
        <!-- <v-alert
                v-if="index == 0"
                border="start"
                density="default"
                type="warning"
                class="mb-6"
            >
                LATEST NEWS
            </v-alert> -->
        <template v-slot:icon>
            🚀
        </template>
        <template v-slot:opposite>
            <h3 class="text-h3">TODAY</h3>
        </template>
        <slot></slot>
    </v-timeline-item>
</template>