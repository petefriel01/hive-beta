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
    >
        <v-row>
            <v-col>
                <v-card-subtitle class="text-uppercase font-weight-bold text-h6">
                    {{article.newsSite}} <span v-html="$hivebeta.formatDate(article.publishedAt)"></span>
                </v-card-subtitle>
                <v-card-title v-if="article.title">
                    <v-btn variant="plain" :href="article.url" target="_blank" class="text-wrap px-0">
                        <p class="text-wrap px-0">{{article.title}}</p>
                    </v-btn>
                </v-card-title>
            </v-col>
            <v-col>
                <v-img class="rounded-circle ml-auto" :lazy-src="article.imageUrl" width="200" ></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <ArticleCardTags :events="article.events" :launches="article.launches" />
            </v-col>
            <v-col>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
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
                    <p class="text-wrap"> {{article.summary}}</p>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>
