<script setup lang='ts'>
import { defineProps, ref, toRefs } from 'vue';

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
        <v-card-subtitle class="text-uppercase">
            {{article.newsSite}} # {{article.publishedAt}}
        </v-card-subtitle>
        <v-card-title v-if="article.title">
            <h4 class="text-wrap">{{article.title}}</h4>
        </v-card-title>
        <v-row>
            <v-col>
                <v-chip
                    class="ma-2"
                    color="blue"
                    label
                    size="small"
                >
                    🚀
                    Launch
                </v-chip>
                <v-chip
                    class="ma-2"
                    color="pink"
                    label
                    size="small"
                >
                    <v-icon start icon="mdi-label"></v-icon>
                    Event
                </v-chip>
                <v-chip
                    class="ma-2"
                    color="grey"
                    label
                    size="small"
                >
                    <v-icon start icon="mdi-label"></v-icon>
                    Article
                </v-chip>

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