<script setup lang='ts'>
const emit = defineEmits(['item-clicked', 'update:modelValue']);

defineProps({
    titles: {
        type: Array,
        required: false,
        default: null,
    }
});

const handleInput = (e) => {
    emit('update:modelValue', e.target.value.toLowerCase());
    console.log(e.target.value);
};

</script>
<template>
    <v-autocomplete
        :items="titles"
        hide-no-data
        hide-selected
        item-title="Description"
        item-value="API"
        label="Space news articles"
        placeholder="Start typing to Search"
        @input="handleInput"
        @keydown.enter="handleInput"
        return-object
    ></v-autocomplete>
</template>
