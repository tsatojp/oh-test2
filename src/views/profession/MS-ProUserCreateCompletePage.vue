<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="専門職ユーザー作成完了"
      ></v-toolbar-title>
    </v-card-title>
    <v-row>
      <v-col cols="3">
        <div class="notThisLabel ml-15 mt-5" align="center">必須項目を入力</div>
      </v-col>
      <v-col cols="3">
        <div class="notThisLabel ml-15 mt-5" align="center">入力内容を確認</div>
      </v-col>

      <v-col cols="3">
        <div class="thisLabel ml-15 mt-5" align="center">完了</div>
      </v-col>
    </v-row>
    <v-toolbar class="mt-10 ml-16 pl-5" style="width: 90%; height: 5%">
      <v-toolbar-title
        style="font-weight: 800; font-size: 14px"
        text="専門職ユーザー"
      ></v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col>
        <div class="ml-n4 mt-16" style="font-size: 14px">
          <p>専門職ユーザー作成が完了いたしました。</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col cols="9"></v-col>
      <v-col cols="3">
        <v-btn class="backButton mt-16" @click="backToMsUserList"
          >MSユーザー一覧へ戻る</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useProStore } from "@/stores/MS-ProUser";

const { backToMsUserList } = useProStore();

document.title = "専門職作成完了";
</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: 800;
}
.backButton {
  background-color: #f4f4f4;
  color: #555555;
  font-weight: bold;
  width: 190px;
  height: 35px;
  box-shadow: none;
  border: 1px solid #555555;
}
.thisLabel {
  background-color: #555555;
  color: #f4f4f4;
  font-size: 14px;
  font-weight: bold;
  width: 280px;
  height: 35px;
  box-shadow: none;
  border-radius: 7px;
  padding-top: 6px;
}
.notThisLabel {
  background-color: #f4f4f4;
  color: #555555;
  font-size: 14px;
  font-weight: bold;
  width: 280px;
  height: 35px;
  box-shadow: none;
  border-radius: 7px;
  padding-top: 6px;
}
</style>
