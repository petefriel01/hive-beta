<script setup lang='ts'>
const props = defineProps({
    launches: {
        type: [],
        required: false,
    },
    events: {
        type: [],
        required: false,
    },
});
</script>
<template>
    <v-chip
        v-if="props?.launches?.length"
        class="ma-2"
        color="pink"
        label
        size="small"
    >
        <v-icon start icon="mdi-label"></v-icon>
        Launch
    </v-chip>
    <v-chip
        v-else-if="props?.events?.length"
        class="ma-2"
        color="green"
        label
        size="small"
    >
        <v-icon start icon="mdi-label"></v-icon>
        Event
    </v-chip>
    <v-chip
        v-else
        class="ma-2"
        color="blue"
        label
        size="small"
    >
        <v-icon start icon="mdi-label"></v-icon>
        Article
    </v-chip>
</template>