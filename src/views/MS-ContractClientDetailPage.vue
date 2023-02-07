<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="契約顧客詳細"
      ></v-toolbar-title>
    </v-card-title>
    <v-row>
      <v-col cols="10"></v-col>
      <v-btn
        class="customerUser mt-5 ml-n16"
        align="right"
        @click="openCustomerUserList(company_id)"
        >顧客ユーザー一覧</v-btn
      >
    </v-row>
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
            text="ヨミガナ"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.nameReading"
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
            text="郵便番号"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusZipcode"
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
            text="都道府県"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusPrefectureId"
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
            text="市区町村番地"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusAddress"
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
            text="ビル名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.cusBuilding"
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
            text="代表者"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.representativeName"
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
            text="契約担当名"
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
            text="ヨミガナ"
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
            text="部署"
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
            text="役職"
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
            text="契約担当者連絡先TEL"
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
            text="契約担当者連絡先Email"
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
            text="資本金"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.capital"
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
            text="お支払方法"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.paymentMethod"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
        ></v-text-field
      ></v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>
    <!--  請求先コード -->
    <v-col cols="11">
      <v-toolbar class="mt-10 ml-12 pl-5" style="height: 5%">
        <v-toolbar-title
          style="font-weight: 800; font-size: 14px"
          text="請求先コード"
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
            text="請求先コード"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.mConnectCusKey"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
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
            text="郵便番号"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.companyZipcode"
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
            text="都道府県"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.companyPrefectureId"
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
            text="市区町村番地"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.companyAddress"
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
            text="建物名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.companyBuilding"
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
            text="担当部署"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.companyInChargeDepartment"
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
            text="担当者氏名"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.companyInChargeName"
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
            text="連絡先TEL"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.companyTel"
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
            text="送付先Email"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.companyEmail"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
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
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.registrationStatus"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
        ></v-text-field
      ></v-col>
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
          style="height: 85%"
        >
          <v-toolbar-title
            style="font-size: 14px; font-weight: 800"
            text="オンライン保健室"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.onlineHealthCare"
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
        <v-toolbar class="mt-n3 ml-15" justify="center" style="height: 85%">
          <v-row style="display: block" class="pl-12">
            <v-toolbar-title
              style="font-size: 14px; font-weight: 800"
              text="エムステージ担当者"
            ></v-toolbar-title>
            <v-toolbar-title
              style="font-size: 11px; font-weight: 800"
              text="（カスタマーサポート）"
            ></v-toolbar-title>
          </v-row>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.msInChargeUser"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
        ></v-text-field
      ></v-col>
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
            text="契約期間"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.contractPeriod"
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
            text="自動更新"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.automaticUpdate"
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
            text="面談予約数"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.interviewBookingNum"
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
            text="面談実施数"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.interviewImplementNum"
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
            text="残チケット数"
          ></v-toolbar-title>
        </v-toolbar>
      </v-col>
      <v-col cols="9 "
        ><v-text-field
          v-model="detailInfo.sumOfTickets"
          disabled
          class="mt-n3 mr-2"
          style="width: 89%"
          bg-color="white"
        ></v-text-field
      ></v-col>
      <v-divider style="margin-top: -35px" inset></v-divider>
    </v-row>
    <v-row class="mb-10 mt-2">
      <v-col cols="7"></v-col>
      <v-col cols="2 ml-16">
        <v-btn class="backButton" @click="backToContractClientList">戻る</v-btn>
      </v-col>
      <v-col cols="2 ml-n10">
        <v-btn class="customerUser" @click="contractClientEdit(company_id)"
          >契約顧客編集</v-btn
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
  backToContractClientList,
  openCustomerUserList,
  contractClientEdit,
} = useMsStore();

document.title = "契約顧客詳細";
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
