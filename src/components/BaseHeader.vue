<script setup type="ts">
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();
</script>
<template>
    <div app class="bg-grey-darken-2">
        <v-container>
            <v-row>
                <v-col cols="12" class="devX text-center">
                    <h1>HIVE<span class="text-grey-lighten-1">🌌BETA</span></h1>
                    <p class="text-grey-lighten-1 mb-2 font-weight-thin" style="font-size: 12px;letter-spacing: 2px;">SPACE NEWS TRENDS</p>
                </v-col>
            </v-row>
            <v-divider/>
            <v-row>
                <v-col cols="12" class="text-left">
                    <v-btn variant="text" :block="mobile" class="devX flex-grow-1X text-left" :to="{name: 'DashBoard'}">👨‍🚀 Analytics {{mobile}}</v-btn>
                    <v-btn variant="text" :block="mobile" class="devX flex-grow-1X" :to="{name: 'ArticleTimeline'}">🌑 Article Timeline</v-btn>
                    <v-btn variant="text" :block="mobile" class="devX flex-grow-1X" :to="{name: 'ArticleSearch'}">🔎 Advanced Search</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style>
    .dev{
        border: solid 1px red;
    }
</style>