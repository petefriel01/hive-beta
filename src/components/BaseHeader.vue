<script setup lang="ts">
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();
</script>
<template>
    <div app class="bg-grey-darken-2">
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center">
                    <h1>HIVE<span class="text-grey-lighten-1">πBETA</span></h1>
                    <p class="text-grey-lighten-1 mb-2X font-weight-thin text-logo-small">SPACE NEWS TRENDS</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="text-left">
                    <v-divider class="py-1"/>
                    <v-btn variant="text" class="py-2 py-md-0" :block="mobile" :to="{name: 'DashBoard'}">π¨βπ Analytics</v-btn>
                    <v-btn variant="text" class="py-2 py-md-0" :block="mobile" :to="{name: 'ArticleTimeline'}">π Article Timeline</v-btn>
                    <v-btn variant="text" class="py-2 py-md-0" :block="mobile" :to="{name: 'ArticleSearch'}">π Advanced Search</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style scoped>
    .text-logo-small{
        font-size: 12px;
        letter-spacing: 3px;
    }
</style>