<template>
  <v-card flat>
    <v-card-title>
      <v-toolbar-title
        class="ml-12 mt-10 title"
        text="契約顧客請求出力"
      ></v-toolbar-title>
    </v-card-title>
    <v-col cols="11 ml-13">
      <div class="subtitle">オンライン保健室 請求情報CSVダウンロード</div>
    </v-col>
    <v-row>
      <v-container>
        <v-row class="mt-10">
          <v-col cols="1">
            <p style="font-weight: bold; font-size: 14px">対象期間</p>
          </v-col>
          <v-col cols="3 mt-n5">
            <v-text-field
              label="YYYY/MM"
              single-line
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4"></v-col>
          <v-col cols="3 mt-n3">
            <v-btn class="backButton" append-icon="mdi-arrow-down"
              >請求先CSVダウンロード
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-col cols="11 ml-13">
      <div class="subtitle">オンライン保健室 請求情報CSVダウンロード</div>
    </v-col>
    <v-row>
      <v-container>
        <v-row class="mt-10">
          <v-col cols="8"></v-col>
          <v-col cols="3 mt-n3">
            <v-btn class="backButton" append-icon="mdi-arrow-down"
              >請求情報CSVダウンロード
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
document.title = "契約顧客請求出力";
</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: bold;
}
.endButton {
  background-color: #555555;
  color: #f4f4f4;
  font-weight: bold;
  width: 340px;
  height: 45px;
  box-shadow: none;
  font-size: 13px;
}
.backButton {
  background-color: #038fa2;
  color: #f4f4f4;
  font-weight: bold;
  width: 340px;
  height: 45px;
  box-shadow: none;
  font-size: 13px;
}
.subtitle {
  font-size: 15px;
  font-weight: bold;
  height: 45px;
  background-color: #dedbdb;
  padding-left: 14px;
  padding-top: 10px;
  border-radius: 4px;
}
</style>

//#038FA2
