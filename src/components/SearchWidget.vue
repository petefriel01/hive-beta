<script setup lang='ts'>
const emit = defineEmits(['item-clicked', 'update:modelValue']);

defineProps({
    titles: {
        type: Array,
        required: false,
        default: null,
    },
    isSource: {
        type: Boolean,
        required: false,
        default: null,
    }
});

//const titles = ref(['foo', 'bar', 'fizz', 'buzz', 'foo', 'bar', 'fizz']);

const handleInput = (e) => {
    emit('update:modelValue', e.target.value);
};
</script>
<template>
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
