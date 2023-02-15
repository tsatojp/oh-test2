<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="顧客ユーザー詳細"
      ></v-toolbar-title>
    </v-card-title>
    <!--  顧客ユーザー -->
    <v-col cols="11">
      <v-toolbar class="mt-10 ml-12 pl-5" style="height: 5%">
        <v-toolbar-title
          style="font-weight: 800; font-size: 14px"
          text="顧客ユーザー"
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
            text="顧客名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.name"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
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
            text="担当者名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeName"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
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
            text="担当者ヨミガナ"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeNameReading"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
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
            text="担当者部署"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeDivision"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
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
            text="担当者役職"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargePosition"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
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
            text="担当者連絡先TEL"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeTel"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
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
            text="担当者連絡先Email"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeEmail"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
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
            text="登録日"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.createdAt"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
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
            text="オンライン保健室利用"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.onlineHealthCareUseRegist"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
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
            text="権限"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.authority"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
        ></v-text-field
      ></v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>
    <v-row class="mb-10">
      <v-col cols="9"></v-col>
      <v-col cols="2 ml-8">
        <v-btn class="backButton" @click="backToClientUserList(company_id)"
          >戻る</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useMsStore } from "@/stores/MS-MsContractClient";
import { useRoute } from "vue-router";

const route = useRoute();
const company_id = route.params.company_id as string;

const { detailInfo, backToClientUserList } = useMsStore();

document.title = "顧客ユーザー詳細";
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
</style>
