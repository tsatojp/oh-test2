<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-16 mt-10 title"
        text="顧客ユーザー一覧"
      ></v-toolbar-title>
    </v-card-title>
    <v-row>
      <v-col cols="9"></v-col>
      <v-toolbar-subtitle class="mt-5"
        >全{{ totalCount }}件 1件〜10件を表示</v-toolbar-subtitle
      >
    </v-row>
    <v-row class="mt-10 ml-12">
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
                担当者名
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              ></th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                担当者連絡先TEL
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              ></th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in showData" :key="item.customer_id">
              <td style="font-size: 14px" align="center">{{ item.name }}</td>
              <td style="font-size: 14px" align="center">
                {{ item.cusInChargeName }}
              </td>
              <td style="font-size: 14px" align="center"></td>
              <td style="font-size: 14px" align="center">
                {{ item.cusInChargeTel }}
              </td>
              <td style="font-size: 14px" align="center"></td>
              <td align="center">
                <v-btn
                  class="detailButton"
                  @click="detailButtonB(item.company_id, item.customer_id)"
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

const { setInfo, detailButtonB, pageClick } = useMsStore();

setInfo(1);

document.title = "顧客ユーザー一覧";
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
