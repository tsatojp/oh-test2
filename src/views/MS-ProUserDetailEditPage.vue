<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="専門職ユーザー詳細編集"
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
          class="mt-n3 mr-2 w-25"
          bg-color="white"
          v-model="detailInfo.cusInChargeNameReading"
        ></v-text-field
      ></v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
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
      <v-col cols="9">
        <v-autocomplete
          v-model="detailInfo.occupation"
          :items="occupationList"
          class="w-75"
          bg-color="white"
        ></v-autocomplete>
      </v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
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
          class="w-25"
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
          style="height: 120%"
        >
          <v-toolbar-title
            style="font-size: 14px; font-weight: bold"
            text="オンライン保健室利用登録"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9">
        <v-radio-group v-model="detailInfo.onlineHealthCareUseRegist">
          <v-row class="pt-3 ml-1">
            <v-radio label="可" value="可"></v-radio>
            <v-radio label="不可" value="不可"></v-radio>
          </v-row>
        </v-radio-group>
      </v-col>
      <v-divider style="margin-top: -13px" inset></v-divider>
    </v-row>

    <v-row class="mb-10 mt-6">
      <v-col cols="7"></v-col>
      <v-col cols="2 ml-16">
        <v-btn class="backButton" @click="backToProUserDetail(profession_id)"
          >戻る</v-btn
        >
      </v-col>
      <v-col cols="2 ml-n10">
        <v-btn
          class="customerUser"
          @click="goToProUserDetailEditConfirm(profession_id)"
          >確認</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useProStore } from "@/stores/MS-ProUser";
import { useRoute } from "vue-router";

const route = useRoute();
const profession_id = route.params.profession_id as string;

const {
  detailInfo,
  backToProUserDetail,
  goToProUserDetailEditConfirm,
  occupationList,
} = useProStore();

document.title = "専門職編集";
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
