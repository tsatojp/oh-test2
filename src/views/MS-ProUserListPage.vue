<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="専門職ユーザー一覧"
      ></v-toolbar-title>
    </v-card-title>
    <v-row>
      <v-col cols="10" xs="5"></v-col>
      <v-btn class="customerUser mt-5 ml-n12" align="right"
        >専門職ユーザー登録</v-btn
      >
    </v-row>
    <v-row>
      <v-col cols="10" xs="5"></v-col>
      <v-toolbar-subtitle class="mt-6 ml-n8"
        >全{{ totalCount }}件 1件〜10件を表示</v-toolbar-subtitle
      >
    </v-row>
    <v-row class="mt-10 ml-2">
      <v-col cols="11">
        <v-table class="ml-16 $table-header-font-weight:500">
          <thead class="projectName">
            <tr>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                氏名
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                職種
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              ></th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              ></th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              ></th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              ></th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              >
                登録日
              </th>
              <th
                class="text-center"
                style="font-weight: bold; color: #555555; font-size: 14px"
              ></th>
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
            <tr v-for="item in showData" :key="item.name">
              <td style="font-size: 14px" align="center">
                {{ item.cusInChargeName }}
              </td>
              <td style="font-size: 14px" align="center">
                {{ item.occupation }}
              </td>
              <td style="font-size: 14px" align="center"></td>
              <td style="font-size: 14px" align="center"></td>
              <td style="font-size: 14px" align="center"></td>
              <td style="font-size: 14px" align="center"></td>

              <td style="font-size: 14px" align="center">
                {{ item.createdAt }}
              </td>
              <td style="font-size: 14px" align="center"></td>
              <td style="font-size: 14px" align="center"></td>
              <td align="center">
                <v-btn
                  class="detailButton"
                  @click="goToProUserDetail(item.profession_id)"
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
import { useProStore } from "@/stores/MS-ProUser";
import Pagination from "@/components/Pagination.vue";

const msStore = useProStore();

const { showData, totalCount, totalPage } = storeToRefs(msStore);

const { setInfo, goToProUserDetail, pageClick } = useProStore();

setInfo(1);

document.title = "専門職一覧";
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
.customerUser {
  background-color: #555555;
  color: #f4f4f4;
  font-weight: bold;
  width: 190px;
  height: 35px;
  box-shadow: none;
}
.projectName {
  background-color: #f4f4f4;
}
</style>
/
