<template>
  <v-app>
    <!-- ヘッダー領域 -->
    <v-app-bar dense color="white">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>オンライン保健室</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-sheet
        color="grey-darken-1"
        elevation="3"
        height="40px"
        width="200px"
        class="ma-10 pa-2 text-center secondary text-no-wrap rounded"
        >管理者</v-sheet
      >
    </v-app-bar>
    <!-- サイドバー領域 -->
    <SideBar />

    <!-- 各画面表示領域 -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
</script>
