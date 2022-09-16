<script setup lang="ts">
import { useHelpers } from '@/composables/useHelpers.js';
import { useArticlesStore } from '@/stores/articles';
import { defineAsyncComponent, onBeforeMount, reactive, ref } from 'vue';

const AppSpinner = defineAsyncComponent(() => import('@/components/AppSpinner.vue'));

const {
    getArticlesPerDay,
} = useHelpers();

const store = useArticlesStore();
const articleList = ref([]);
const volume = ref(0);
const chartData = ref([]);
const chartDays = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
const isLoading = ref(true);

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
    isLoading.value = false;
});

</script>
<template>
    <v-row>
        <v-col cols="12" xs="12" lg="12" class="my-4 my-md-8 devX" >
            <h3>TOTAL ARTICLES PUBLISHED <span class="text-h2 float-right text-orange font-weight-bold">{{volume}}</span></h3>
            <p>VIEW: CURRENT WEEK</p>
        </v-col>
    </v-row>
    <v-divider class="py-8 devX" />
    <v-row>
        <v-col cols="12" sm="6" md="6" lg="4" class="devX">
            <v-row>
                <v-col cols="12" xs="12" lg="12" class="px-16">
                    <div class="px-8">
                        <apexchart type="donut" :options="donutOptions" :series="donutSeries"></apexchart>
                    </div>
                </v-col>
                <v-col cols="12" xs="12" lg="12">
                    <apexchart width="100%" type="radar" :options="radarOptions" :series="radarSeries"></apexchart>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="8">
            <apexchart width="100%" type="area" :options="areaOptions" :series="areaSeries"></apexchart>
        </v-col>
    </v-row>
    <AppSpinner v-if="isLoading"/>
</template>
<style>
    .dev{
        border: solid 1px red;
    }
</style>