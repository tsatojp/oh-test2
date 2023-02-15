<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="MSユーザー一覧"
      ></v-toolbar-title>
    </v-card-title>
    <v-row>
      <v-col cols="10"></v-col>
      <v-toolbar-subtitle class="mt-10 ml-n16"
        >全{{ totalCount }}件 1件〜10件を表示</v-toolbar-subtitle
      >
    </v-row>
    <v-row class="mt-16 ml-12">
      <v-col cols="11">
        <v-table class="ml-16">
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
                利用サービス/権限
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
                {{ item.useService }} / {{ item.authority }}
              </td>
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
                  @click="goToMsUserDetail(item.ms_user_id)"
                  >詳細</v-btn
                >
                <v-btn class="deleteButton ml-2" @click="deleteButton"
                  >削除</v-btn
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
          <!-- <v-col cols="6" style="display: flex">
            <v-btn
              class="mt-11"
              flat
              prepend-icon="mdi-arrow-collapse-left"
              @click="frontPage"
            ></v-btn>
            <v-container class="max-width">
              <v-pagination
                v-model="state.page"
                class="my-4"
                :length="totalPage"
                @input="handlePageChange"
              ></v-pagination>
            </v-container>
            <v-btn
              class="mt-11"
              flat
              prepend-icon="mdi-arrow-collapse-right"
              @click="lastPage"
            ></v-btn>
          </v-col> -->
          <Pagination :maxPageNo="totalPage" @pageClick="pageClick" />
        </v-row>
      </v-container>
      <v-dialog v-model="showModal" width="400">
        <v-card>
          <v-card-text class="dialogTitle" align="center"
            >削除しますか？</v-card-text
          >
          <div align="center">
            <v-btn flat>削除</v-btn>
            <v-btn flat @click="cancelButton">キャンセル</v-btn>
          </div></v-card
        >
      </v-dialog>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMsUserStore } from "@/stores/MS-MsUser";
import Pagination from "@/components/Pagination.vue";

const msUserStore = useMsUserStore();

const { showData, totalCount, totalPage, showModal } = storeToRefs(msUserStore);

const { setInfo, pageClick, goToMsUserDetail } = useMsUserStore();

setInfo(1);

document.title = "MSユーザー一覧";

const deleteButton = () => {
  showModal.value = true;
};

const cancelButton = () => {
  showModal.value = false;
};
</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: bold;
}
.detailButton {
  background-color: #3a3a3a;
  color: #f4f4f4;
  font-weight: bold;
}
.deleteButton {
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
.dialogTitle {
  background-color: #f4f4f4;
}
</style>
/
