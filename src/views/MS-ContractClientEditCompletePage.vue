<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="契約顧客編集完了"
      ></v-toolbar-title>
    </v-card-title>
    <v-toolbar class="mt-10 ml-16 pl-5" style="width: 90%; height: 5%">
      <v-toolbar-title
        style="font-weight: bold; font-size: 14px"
        text="契約顧客"
      ></v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col>
        <div class="ml-n4 mt-16" style="font-size: 14px">
          <p>契約顧客編集が完了いたしました。</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col cols="9"></v-col>
      <v-col cols="3">
        <v-btn
          class="backButton mt-16"
          @click="backToContractClientDetailA(company_id)"
          >契約顧客詳細へ戻る</v-btn
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

const { backToContractClientDetailA } = useMsStore();

document.title = "契約顧客編集完了";
</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: bold;
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
</style>
