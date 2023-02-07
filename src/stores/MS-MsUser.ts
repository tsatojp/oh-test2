import { defineStore } from "pinia";
import json from "../static/mock.json";
import router from "@/router";

interface MsUserList {
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
  dateRightNow: string;
  authorityList: string[];
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

export const useMsUserStore = defineStore("ms", {
  state: (): MsUserList => ({
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
    dateRightNow: "",
    authorityList: ["サービス利用者", "11", "22"],
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

      const formatMonth = () => {
        const a = new Date().getMonth() + 1;
        let b = a.toString();
        if (a < 10) {
          return (b = "0" + a);
        } else {
          return b;
        }
      };

      const formatDate = () => {
        const c = new Date().getDate();
        let d = c.toString();
        if (c < 10) {
          return (d = "0" + c);
        } else {
          return d;
        }
      };

      this.dateRightNow =
        new Date().getFullYear() + "/" + formatMonth() + "/" + formatDate();
    },

    pageClick(pageNo: number) {
      this.setInfo(pageNo);
    },

    //MSユーザー一覧
    goToMsUserDetail(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}` });
    },

    //MSユーザー詳細
    backToMsUserList() {
      router.push({ path: `/ms_user` });
    },

    goToMsUserEdit(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}/edit` });
    },

    //MSユーザー編集
    backToMsUserDetail(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}` });
    },

    goToMsUserEditConfirm(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}/edit/confirm` });
    },

    //MSユーザー編集確認
    backToMsUserEdit(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}/edit` });
    },

    goToMsUserEditComplete(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}/edit/complete` });
    },

    //MSユーザー編集完了
    backToMsUserA() {
      router.push({ path: `/ms_user` });
    },

    //MSユーザー登録
    backToMsUserB() {
      router.push({ path: `/ms_user` });
    },

    goToProUserCreateConfirm() {
      router.push({ path: `/ms_user/new/confirm` });
    },

    //MSユーザー登録確認
    backToMsUserRegist() {
      router.push({ path: `/ms_user/new` });
    },

    goToMsUserRegistComplete() {
      router.push({ path: `/ms_user/new/complete` });
    },

    //MSユーザー登録完了
    backToMsUserC() {
      router.push({ path: `/ms_user` });
    },
  },
});
