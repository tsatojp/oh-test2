<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="専門職ユーザー詳細"
      ></v-toolbar-title>
    </v-card-title>
    <!--  専門職情報 -->
    <v-col cols="11">
      <v-toolbar class="mt-8 ml-12 pl-5" style="height: 5%">
        <v-toolbar-title
          style="font-weight: 800; font-size: 14px"
          text="専門職情報"
        ></v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-row>
      <v-divider class="mt-10" inset></v-divider>
      <v-col cols="3">
        <v-toolbar
          class="mt-n3 ml-15 pl-5"
          justify="center"
          style="height: 85%"
        >
          <v-toolbar-title
            style="font-size: 14px; font-weight: 800"
            text="氏名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          disabled
          class="mt-n3 mr-2 w-25"
          bg-color="white"
          v-model="detailInfo.cusInChargeName"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-row style="margin-top: -75px">
      <v-divider class="mt-10" inset></v-divider>
      <v-col cols="3">
        <v-toolbar
          class="mt-n3 ml-15 pl-5"
          justify="center"
          style="height: 85%"
        >
          <v-toolbar-title
            style="font-size: 14px; font-weight: 800"
            text="氏名ヨミガナ"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          disabled
          class="mt-n3 mr-2 w-25"
          bg-color="white"
          v-model="detailInfo.cusInChargeNameReading"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-row style="margin-top: -75px">
      <v-divider class="mt-10" inset></v-divider>
      <v-col cols="3">
        <v-toolbar
          class="mt-n3 ml-15 pl-5"
          justify="center"
          style="height: 85%"
        >
          <v-toolbar-title
            style="font-size: 14px; font-weight: 800"
            text="職種"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          disabled
          class="mt-n3 mr-2 w-25"
          bg-color="white"
          v-model="detailInfo.occupation"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-row style="margin-top: -75px">
      <v-divider class="mt-10" inset></v-divider>
      <v-col cols="3">
        <v-toolbar
          class="mt-n3 ml-15 pl-5"
          justify="center"
          style="height: 85%"
        >
          <v-toolbar-title
            style="font-size: 14px; font-weight: 800"
            text="連絡先Email"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          disabled
          class="mt-n3 mr-2 w-25"
          bg-color="white"
          v-model="detailInfo.cusInChargeEmail"
        ></v-text-field
      ></v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>
    <!-- オンライン保健室利用登録 -->
    <v-col cols="11">
      <v-toolbar class="mt-10 ml-12 pl-5" style="height: 5%">
        <v-toolbar-title
          style="font-weight: 800; font-size: 14px"
          text="オンライン保健室利用登録"
        ></v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-row>
      <v-divider class="mt-10" inset></v-divider>
      <v-col cols="3">
        <v-toolbar
          class="mt-n3 ml-15 pl-5"
          justify="center"
          style="height: 85%"
        >
          <v-toolbar-title
            style="font-size: 14px; font-weight: 800"
            text="オンライン保健室利用登録"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          disabled
          class="mt-n3 mr-2 w-25"
          bg-color="white"
          v-model="detailInfo.onlineHealthCareUseRegist"
        ></v-text-field
      ></v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>

    <v-row class="mt-10">
      <v-col cols="9"></v-col>
      <v-col cols="2">
        <v-btn
          class="customerUser ml-10"
          @click="goToProUserDetailEdit(profession_id)"
          >専門職編集</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mb-10 mt-10">
      <v-col cols="9"></v-col>
      <v-col cols="2 ml-10">
        <v-btn class="backButton" @click="backToProUserList">戻る</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useProStore } from "@/stores/MS-ProUser";
import { useRoute } from "vue-router";

const route = useRoute();
const profession_id = route.params.profession_id as string;

const { detailInfo, backToProUserList, goToProUserDetailEdit } = useProStore();

document.title = "専門職詳細";
</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: 800;
}
.customerUser {
  background-color: #555555;
  color: #f4f4f4;
  font-weight: bold;
  width: 190px;
  height: 35px;
  box-shadow: none;
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
.v-divider--inset:not(.v-divider--vertical) {
  max-width: calc(90% - 72px);
  margin-inline-start: 72px;
}
.thisLabel {
  background-color: #555555;
  color: #f4f4f4;
  font-size: 14px;
  font-weight: bold;
  width: 300px;
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
  width: 300px;
  height: 35px;
  box-shadow: none;
  border-radius: 7px;
  padding-top: 6px;
}
</style>
