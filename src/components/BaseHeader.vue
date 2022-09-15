<template>
    <v-app-bar app class="bg-grey-darken-2" elevation="0">
        <v-container>
            <!-- <v-row>
                <v-col>
                    HIVEBETA
                </v-col>
            </v-row> -->
            <v-row>
                <v-col cols="12" xs="12" lg="10" >
                    <v-btn :to="{name: 'DashBoard'}">Analytics</v-btn>
                    <v-btn :to="{name: 'ArticleTimeline'}">Article Timeline</v-btn>
                    <v-btn :to="{name: 'ArticleSearch'}">Advanced Search</v-btn>
                </v-col>
                <v-col>
                    <!-- <v-select
                        :items="['Month','Week']"
                        item-title="state"
                        item-value="abbr"
                        label="Week"
                        persistent-hint
                        return-object
                        single-line
                    ></v-select> -->
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>
