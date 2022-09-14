<script setup lang="ts">
import { useHelpers } from '@/composables/useHelpers.js';
import { useArticlesStore } from '@/stores/articles';
import { defineAsyncComponent, onBeforeMount, reactive, ref } from 'vue';

// Components
const ArticleTimeline = defineAsyncComponent(() => import('../components/ArticleTimeline.vue'));

const chartData = ref([]);

const {
    getFirstDayOfWeek,
    getDayFromDatetime,
} = useHelpers();

const store = useArticlesStore();
const articleList = ref([]);
const volume = ref(0);
const storyStack = reactive([]);

const radarOptions = reactive({
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
});
const radarSeries = reactive( [{
    name: 'series-1',
    data: chartData.value
}]);

const donutSeries = reactive(chartData.value);
const donutOptions = reactive({
    chart: {
        type: 'donut',
    },
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    legend: {
        show: false
    },
    sparkline: {
        enabled: true
    },
    responsive: [{
        breakpoint: 70,
        options: {
            chart: {
                width: 200
            },
        }
    }]
});

const areaOptions = reactive({
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
});

//only add in days with data
const areaSeries = reactive( [{
    name: 'series-1',
    data: chartData.value
}]);

const formatArticleList = () => {
    const today = new Date().getDate();
    const monday = getFirstDayOfWeek(new Date()).getDate();
    for(var i = monday; i <= today; i++){
        storyStack.push(articleList.value.filter((item) => {
            return getDayFromDatetime(item.publishedAt) == i;
        }));
    }
};

onBeforeMount(async() => {
    articleList.value = await store.fetchArticles('2022-09-01T08:41:11.000Z');
    formatArticleList();
    volume.value = await store.articleCount;
    console.log(storyStack);
    storyStack.forEach((item)=> {
        console.log(item.length);
        chartData.value.push(item.length);
    });
    console.log(chartData.value);
});

</script>
<template>
    <v-row>
        <v-col cols="12" xs="12" lg="12" class="dev text-left">
            <h3>TOTAL ARTICLES PUBLISHED</h3>
            <p class="text-h2">{{volume}}</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" xs="12" lg="4" class="dev">
            <v-row>
                <v-col cols="12" xs="12" lg="12" class="dev px-16">
                    <div class="px-8">
                        <apexchart type="donut" :options="donutOptions" :series="donutSeries"></apexchart>
                    </div>
                </v-col>
                <v-col cols="12" xs="12" lg="12" class="dev">
                    <apexchart width="100%" type="radar" :options="radarOptions" :series="radarSeries"></apexchart>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" xs="12" lg="8" class="dev">
            <apexchart width="100%" type="area" :options="areaOptions" :series="areaSeries"></apexchart>
        </v-col>
    </v-row>

</template>