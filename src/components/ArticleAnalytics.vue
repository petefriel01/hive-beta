<script setup lang="ts">
import { useHelpers } from '@/composables/useHelpers.js';
import { useArticlesStore } from '@/stores/articles';
import { onBeforeMount, reactive, ref } from 'vue';

const {
    getArticlesPerDay,
} = useHelpers();

const store = useArticlesStore();
const articleList = ref([]);
const volume = ref(0);
const chartData = ref([]);
const chartDays = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);

const radarOptions = reactive({
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        categories: chartDays.value
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
    labels: chartDays.value,
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
        categories: chartDays.value
    }
});

const areaSeries = reactive( [{
    name: 'series-1',
    data: chartData.value
}]);

onBeforeMount(async() => {
    articleList.value = await store.fetchArticles();
    volume.value = articleList.value.length;
    getArticlesPerDay(articleList.value).forEach((item)=> {
        chartData.value.push(item.length);
    });
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