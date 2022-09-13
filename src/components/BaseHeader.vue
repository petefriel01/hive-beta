<template>
    <v-app-bar app class="bg-white" elevation="0">
        <v-container>
            <v-btn :to="{name: 'DashBoard'}">Dashboard</v-btn>
            <v-btn :to="{name: 'ArticleSearch'}">Search</v-btn>
        </v-container>
    </v-app-bar>
</template>
