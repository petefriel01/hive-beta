<script setup lang='ts'>

import { ref } from 'vue';

const emit = defineEmits(['item-clicked', 'update:modelValue']);

const titles = ref(['foo', 'bar', 'fizz', 'buzz', 'foo', 'bar', 'fizz']);

const handleInput = (e) => {
    emit('update:modelValue', e.target.value);
};
</script>
<template>
    <!-- <v-text-field
        solo
        hide-details
        label="Search for news articles"
        v-model="searchText"
        ref="searchInput"
        @input="handleInput"
    ></v-text-field> -->
    <v-autocomplete
        v-model="searchText"
        :items="titles"
        :loading="isLoading"
        hide-no-data
        hide-selected
        item-title="Description"
        item-value="API"
        label="Space news articles"
        placeholder="Start typing to Search"
        @input="handleInput"
        return-object
    ></v-autocomplete>
</template>
