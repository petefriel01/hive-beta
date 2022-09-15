<script setup lang='ts'>
import { defineAsyncComponent, ref, toRefs } from 'vue';

const ArticleCardTags = defineAsyncComponent(() => import('@/components/ArticleCardTags.vue'));

const show = ref(false);

const props = defineProps({
    article: {
        type: Object,
        required: true,
    },
});

const { article } = toRefs(props);

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
                    {{article.newsSite}}
                    <span class="float-right text-black" v-html="$hivebeta.formatDate(article.publishedAt)"></span>
                </v-card-subtitle>
                <v-card-title v-if="article.title">
                    <v-btn flat :href="article.url" target="_blank" class="text-wrap px-0 text-h6">
                        <span class="text-wrap ">{{article.title}}</span>
                    </v-btn>
                </v-card-title>
            </v-col>
            <v-col cols="12" xs="12" lg="2" class="px-4XXX">
                <v-img class="ml-auto" :src="article.imageUrl" :lazy-src="article.imageUrl" width="200" height="100" cover></v-img>
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