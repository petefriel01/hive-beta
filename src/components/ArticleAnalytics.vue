<script setup lang="ts">
import { defineAsyncComponent, reactive } from 'vue';

// Layout
const OneColumn = defineAsyncComponent(() => import('@/layouts/OneColumn.vue'));
// Components
const ArticleTimeline = defineAsyncComponent(() => import('../components/ArticleTimeline.vue'));

const options = reactive({
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
});

const series = reactive( [{
    name: 'series-1',
    data: [90, 40, 45, 50, 49, 60, 70]
}]);

const chartSeries = reactive([44, 55, 41, 17, 15]);

const chartOptions = reactive({
    chart: {
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
        }
    },
    grid: {
        padding: {
            bottom: -80
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
});

</script>
<template>
    <p>ArticleAnalytics</p>
    <v-row>
        <v-col cols="12" xs="12" lg="4" class="dev">
            <v-row>
                <v-col cols="12" xs="12" lg="12" class="dev">
                    <apexchart type="donut" :options="chartOptions" :series="chartSeries"></apexchart>
                </v-col>
                <v-col cols="12" xs="12" lg="12" class="dev">
                    <apexchart width="100%" type="radar" :options="options" :series="series"></apexchart>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" xs="12" lg="8" class="dev">
            <apexchart width="100%" type="area" :options="options" :series="series"></apexchart>
        </v-col>
    </v-row>

</template>