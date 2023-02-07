<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="契約顧客編集"
      ></v-toolbar-title>
    </v-card-title>
    <!--  契約顧客(申込情報) -->
    <v-col cols="11">
      <v-toolbar class="mt-10 ml-12 pl-5" style="height: 5%">
        <v-toolbar-title
          style="font-weight: 800; font-size: 14px"
          text="契約顧客(申込情報)"
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
          class="mt-n3 mr-2 w-50"
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
            text="ヨミガナ"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.nameReading"
          class="mt-n3 mr-2 w-50"
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
            text="郵便番号"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusZipcode"
          class="mt-n3 mr-2 w-50"
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
            text="都道府県"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-autocomplete
          v-model="detailInfo.companyPrefectureId"
          :items="companyPrefectureIdList"
          class="w-75"
          bg-color="white"
        >
        </v-autocomplete
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
            text="市区町村番地"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusAddress"
          class="mt-n3 mr-2 w-50"
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
            text="ビル名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusBuilding"
          class="mt-n3 mr-2 w-50"
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
            text="代表者"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.representativeName"
          class="mt-n3 mr-2 w-50"
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
            text="契約担当名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeName"
          class="mt-n3 mr-2 w-50"
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
            text="ヨミガナ"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeNameReading"
          class="mt-n3 mr-2 w-50"
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
            text="部署"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeDivision"
          class="mt-n3 mr-2 w-50"
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
            text="役職"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargePosition"
          class="mt-n3 mr-2 w-50"
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
            text="契約担当者連絡先TEL"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeTel"
          class="mt-n3 mr-2 w-50"
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
            text="契約担当者連絡先Email"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusInChargeEmail"
          class="mt-n3 mr-2 w-50"
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
            text="資本金"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.capital"
          class="mt-n3 mr-2 w-50"
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
            text="お支払方法"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.paymentMethod"
          class="mt-n3 mr-2 w-50"
          bg-color="white"
        ></v-text-field
      ></v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>
    <!-- 請求情報 -->
    <v-col cols="11">
      <v-toolbar class="mt-10 ml-12 pl-5" style="height: 5%">
        <v-toolbar-title
          style="font-weight: 800; font-size: 14px"
          text="請求情報"
        ></v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-row>
      <v-divider class="mt-10" inset></v-divider>
      <v-col cols="3" style="z-index: 0">
        <v-toolbar
          class="mt-n3 ml-15 pl-5"
          justify="center"
          style="height: 85%"
        >
          <!-- <div class="mustLabel ml-n10" style="z-index: 2">必須</div> -->
          <v-toolbar-title
            style="font-size: 14px; font-weight: 800"
            text="顧客名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          v-model="detailInfo.companyName"
          class="mt-n3 mr-2 w-50"
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
            text="郵便番号"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="detailInfo.companyZipcode"
          class="mt-n3 mr-2 w-50"
          bg-color="white"
        >
        </v-text-field
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
            text="都道府県"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9">
        <v-autocomplete
          v-model="detailInfo.companyPrefectureId"
          :items="companyPrefectureIdList"
          class="w-75"
          bg-color="white"
        >
        </v-autocomplete>
      </v-col>
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
            text="市区町村番地"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          v-model="detailInfo.companyAddress"
          class="mt-n3 mr-2 w-50"
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
            text="建物名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          v-model="detailInfo.companyBuilding"
          class="mt-n3 mr-2 w-50"
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
            text="担当部署"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          v-model="detailInfo.companyInChargeDepartment"
          class="mt-n3 mr-2 w-50"
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
            text="担当者氏名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.companyInChargeName"
          class="mt-n3 mr-2 w-50"
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
            text="連絡先TEL"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          v-model="detailInfo.companyTel"
          class="mt-n3 mr-2 w-50"
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
            text="送付先Email"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9"
        ><v-text-field
          v-model="detailInfo.companyEmail"
          class="mt-n3 mr-2 w-50"
          bg-color="white"
        ></v-text-field
      ></v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>
    <!-- ステータス -->
    <v-col cols="11">
      <v-toolbar class="mt-10 ml-12 pl-5" style="height: 5%">
        <v-toolbar-title
          style="font-weight: 800; font-size: 14px"
          text="ステータス"
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
            text="顧客登録ステータス"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9">
        <v-autocomplete
          v-model="detailInfo.registrationStatus"
          :items="registrationStatusList"
          class="w-75"
          bg-color="white"
        ></v-autocomplete>
      </v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>
    <!-- 利用サービス -->
    <v-col cols="11">
      <v-toolbar class="mt-10 ml-12 pl-5" style="height: 5%">
        <v-toolbar-title
          style="font-weight: 800; font-size: 14px"
          text="利用サービス"
        ></v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-row>
      <v-divider class="mt-10" inset></v-divider>
      <v-col cols="3">
        <v-toolbar
          class="mt-n3 ml-15 pl-5"
          justify="center"
          style="height: 185%"
        >
          <v-toolbar-title
            style="font-size: 14px; font-weight: 800"
            text="オンライン保健室"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9">
        <v-radio-group v-model="detailInfo.onlineHealthCare">
          <v-row class="pt-3 ml-1">
            <v-radio label="利用" value="利用"></v-radio>
            <v-radio label="利用しない" value="利用しない"></v-radio>
          </v-row>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row style="margin-top: -55px">
      <v-divider class="mt-10" inset></v-divider>
      <v-col cols="3">
        <v-toolbar
          class="mt-n3 ml-15 pl-5"
          justify="center"
          style="height: 85%"
        >
          <v-toolbar-title
            style="font-size: 14px; font-weight: 800"
            text="エムステージ担当者"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9">
        <v-autocomplete
          v-model="detailInfo.msInChargeUser"
          :items="msInChargeUserNameList"
          class="w-75"
          bg-color="white"
        >
        </v-autocomplete>
      </v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>
    <!-- オンライン保健室 -->
    <v-col cols="11">
      <v-toolbar class="mt-10 ml-12 pl-5" style="height: 5%">
        <v-toolbar-title
          style="font-weight: 800; font-size: 14px"
          text="オンライン保健室"
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
            text="自動更新"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9">
        <v-autocomplete
          v-model="detailInfo.automaticUpdate"
          :items="automaticUpdateList"
          class="w-75"
          bg-color="white"
        >
        </v-autocomplete>
      </v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>
    <v-row class="mb-10">
      <v-col cols="7"></v-col>
      <v-col cols="2 ml-16">
        <v-btn
          class="backButton"
          @click="backToContractClientDetail(company_id)"
          >戻る</v-btn
        >
      </v-col>
      <v-col cols="2 ml-n10">
        <v-btn
          class="customerUser"
          @click="goToContractClientEditConfirm(company_id)"
          >確認</v-btn
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

const {
  detailInfo,
  backToContractClientDetail,
  goToContractClientEditConfirm,
  companyPrefectureIdList,
  registrationStatusList,
  msInChargeUserNameList,
  automaticUpdateList,
} = useMsStore();

document.title = "契約顧客編集";
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
.mustLabel {
  font-size: 15px;
  font-weight: 800;
  width: 58px;
  height: 35px;
  background-color: #555555;
  color: #ffffff;
  padding-left: 14px;
  padding-top: 6px;
}
</style>
