import { defineStore } from "pinia";
import json from "../static/mock.json";
import router from "@/router";

interface ProUserList {
  info: infoData[];
  totalCount: number;
  totalPage: number;
  showData: infoData[];
  pageSize: number;
  startNo: number;
  endNo: number;
  pageNo: number;
  detailInfo: DetailInfo;
  showModal: boolean;
  occupationList: string[];
}

interface DetailInfo {
  company_id: string;
  name: string;
  registrationStatus: string;
  interviewBookingNum: number;
  interviewImplementNum: number;
  sumOfTickets: number;
  msInChargeUser: string;
  profession_id: string;
  ms_user_id: string;
  customer_id: string;
  nameReading: string;
  cusZipcode: string;
  cusPrefectureId: string;
  cusAddress: string;
  cusBuilding: string;
  representativeName: string;
  cusInChargeName: string;
  cusInChargeNameReading: string;
  cusInChargeDivision: string;
  cusInChargePosition: string;
  cusInChargeTel: string;
  cusInChargeEmail: string;
  capital: string;
  paymentMethod: string;
  mConnectCusKey: string;
  mConnectOfficeKey: string;
  companyName: string;
  companyZipcode: number;
  companyPrefectureId: string;
  companyAddress: string;
  companyBuilding: string;
  companyInChargeDepartment: string;
  companyInChargeName: string;
  companyTel: number;
  companyEmail: string;
  onlineHealthCare: string;
  onlineHealthCareUseRegist: string;
  useService: string;
  contractPeriod: string;
  automaticUpdate: string;
  ID: number;
  createdAt: string;
  authority: string;
  occupation: string;
}

interface infoData {
  company_id: string;
  name: string;
  registrationStatus: string;
  interviewBookingNum: number;
  interviewImplementNum: number;
  sumOfTickets: number;
  msInChargeUser: string;
  profession_id: string;
  ms_user_id: string;
  customer_id: string;
  nameReading: string;
  cusZipcode: string;
  cusPrefectureId: string;
  cusAddress: string;
  cusBuilding: string;
  representativeName: string;
  cusInChargeName: string;
  cusInChargeNameReading: string;
  cusInChargeDivision: string;
  cusInChargePosition: string;
  cusInChargeTel: string;
  cusInChargeEmail: string;
  capital: string;
  paymentMethod: string;
  mConnectCusKey: string;
  mConnectOfficeKey: string;
  companyName: string;
  companyZipcode: number;
  companyPrefectureId: string;
  companyAddress: string;
  companyBuilding: string;
  companyInChargeDepartment: string;
  companyInChargeName: string;
  companyTel: number;
  companyEmail: string;
  onlineHealthCare: string;
  onlineHealthCareUseRegist: string;
  useService: string;
  contractPeriod: string;
  automaticUpdate: string;
  ID: number;
  createdAt: string;
  authority: string;
  occupation: string;
}

export const useProStore = defineStore("ms", {
  state: (): ProUserList => ({
    info: [] as infoData[],
    totalCount: 0,
    totalPage: 0,
    showData: [] as infoData[],
    pageSize: 10,
    startNo: 0,
    endNo: 0,
    pageNo: 1,
    detailInfo: {} as DetailInfo,
    showModal: false,
    occupationList: ["産業医", "保健師", "心理士"],
  }),

  actions: {
    async setInfo(payload: any) {
      const info = await json.info;
      this.info = info;
      this.totalCount = info.length;
      this.totalPage = Math.ceil(this.totalCount / 10) || 1;
      this.showData = this.info.slice(
        this.pageSize * payload - this.pageSize,
        this.pageSize * payload
      );
      this.detailInfo = this.info[0];
    },

    pageClick(pageNo: number) {
      this.setInfo(pageNo);
    },

    //専門職ユーザー一覧
    goToProUserDetail(profession_id: string) {
      router.push({ path: `/profession/${profession_id}` });
    },

    //専門職ユーザー詳細
    backToProUserList() {
      router.push({ path: `/profession` });
    },

    goToProUserDetailEdit(profession_id: string) {
      router.push({ path: `/profession/${profession_id}/edit` });
    },

    //専門職ユーザー詳細編集
    backToProUserDetail(profession_id: string) {
      router.push({ path: `/profession/${profession_id}` });
    },

    goToProUserDetailEditConfirm(profession_id: string) {
      router.push({ path: `/profession/${profession_id}/edit/confirm` });
    },

    //専門職ユーザー詳細編集確認
    backToProUserDetailEdit(profession_id: string) {
      router.push({ path: `/profession/${profession_id}/edit` });
    },

    goToProUserDetailEditComplete(profession_id: string) {
      router.push({ path: `/profession/${profession_id}/edit/complete` });
    },

    //専門職ユーザー詳細編集完了
    backToProUserDetailA(profession_id: string) {
      router.push({ path: `/profession/${profession_id}` });
    },

    //専門職ユーザー作成
    backToProUserListA() {
      router.push({ path: `/profession` });
    },

    goToProUserCreateConfirm() {
      router.push({ path: `/profession/new/confirm` });
    },

    //専門職ユーザー作成確認
    backToProUserCreate() {
      router.push({ path: `/profession/new` });
    },

    goToProUserCreateComplete() {
      router.push({ path: `/profession/new/complete` });
    },

    //専門職ユーザー作成完了
    backToMsUserList() {
      router.push({ path: `/ms_user` });
    },
  },
});
