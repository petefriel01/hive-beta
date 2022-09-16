<script setup lang='ts'>
import { defineAsyncComponent, ref, toRefs } from 'vue';

const ArticleCardTags = defineAsyncComponent(() => import('@/components/ArticleCardTags.vue'));

const show = ref(false);

const props = defineProps({
    article: {
        type: Object,
        required: true,
    },
    showDate: {
        type: Boolean,
        default: true,
    }
});

const { article, showDate } = toRefs(props);

</script>
<template>
    <v-card
        variant="outlined"
        class="mb-8"
        color="grey-lighten-2"
    >
        <v-row>
            <v-col cols="12" xs="12" lg="10">
                <v-card-subtitle class="text-black font-weight-bold text-uppercase pt-4 text-orange-darken-4">
                    {{article.newsSite}} <span v-if="showDate" class="text-black">|</span>
                    <span v-if="showDate" class="ml-2 text-grey-darken-2" v-html="$hivebeta.formatDate(article.publishedAt)"></span>
                </v-card-subtitle>
                <v-card-title v-if="article.title">
                    <v-btn variant="text" :href="article.url" target="_blank" class="text-wrap px-0 text-h6 text-black">
                        <span class="text-wrap ">{{article.title}}</span>
                    </v-btn>
                </v-card-title>
            </v-col>
            <v-col cols="12" xs="12" lg="2">
                <img :src="article.imageUrl" class="float-right rounded" width="150" height="100" style="object-fit:cover" />
            </v-col>
        </v-row>
        <v-row>
            <v-col class="my-auto px-4">
                <ArticleCardTags :events="article.events" :launches="article.launches" />
            </v-col>
            <v-col>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="orange"
                        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="show = !show"
                    ></v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                    <p class="text-wrap text-black"> {{article.summary}}</p>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>
<style>
    .dev{
        border: solid 1px red;
    }
</style>
