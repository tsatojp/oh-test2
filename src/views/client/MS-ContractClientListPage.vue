<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="契約顧客一覧"
      ></v-toolbar-title>
    </v-card-title>
    <v-toolbar class="mt-10 ml-16 pl-5" style="width: 90%; height: 5%">
      <v-toolbar-title
        style="font-weight: bold; font-size: 14px"
        text="契約顧客"
      ></v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col cols="10"></v-col>
      <v-col cols="2 mt-10 ml-n10">
        <v-toolbar-subtitle
          >全{{ totalCount }}件 1件〜10件を表示</v-toolbar-subtitle
        >
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="11">
        <v-table class="ml-16">
          <thead class="projectName">
            <tr>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                顧客名
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                顧客登録ステータス
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                面談予約数
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                面談実施数
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                残チケット数
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                エムステージ担当者
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in showData" :key="item.name">
              <td style="font-size: 14px" align="center">
                {{ item.name }}
              </td>
              <td style="font-size: 14px" align="center">
                {{ item.registrationStatus }}
              </td>
              <td style="font-size: 14px" align="center">
                {{ item.interviewBookingNum }}
              </td>
              <td style="font-size: 14px" align="center">
                {{ item.interviewImplementNum }}
              </td>
              <td style="font-size: 14px" align="center">
                {{ item.sumOfTickets }}
              </td>
              <td style="font-size: 14px" align="center">
                {{ item.msInChargeUser }}
              </td>
              <td align="center">
                <v-btn
                  class="detailButton"
                  @click="detailButtonA(item.company_id)"
                  >詳細</v-btn
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <Pagination :maxPageNo="totalPage" @pageClick="pageClick" />
        </v-row>
      </v-container>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMsStore } from "@/stores/MS-MsContractClient";
import Pagination from "@/components/Pagination.vue";

const msStore = useMsStore();

const { showData, totalCount, totalPage } = storeToRefs(msStore);

const { setInfo, detailButtonA, pageClick } = useMsStore();

setInfo(1);

document.title = "契約顧客一覧";
</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: bold;
}
.detailButton {
  background-color: #555555;
  color: #f4f4f4;
  font-weight: bold;
}
.arrowLeft {
  padding-left: 0px;
}
.projectName {
  background-color: #f4f4f4;
}
</style>
/
