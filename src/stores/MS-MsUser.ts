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
    authorityList: ["?????????????????????", "11", "22"],
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

    //MS??????????????????
    goToMsUserDetail(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}` });
    },

    //MS??????????????????
    backToMsUserList() {
      router.push({ path: `/ms_user` });
    },

    goToMsUserEdit(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}/edit` });
    },

    //MS??????????????????
    backToMsUserDetail(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}` });
    },

    goToMsUserEditConfirm(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}/edit/confirm` });
    },

    //MS????????????????????????
    backToMsUserEdit(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}/edit` });
    },

    goToMsUserEditComplete(ms_user_id: string) {
      router.push({ path: `/ms_user/${ms_user_id}/edit/complete` });
    },

    //MS????????????????????????
    backToMsUserA() {
      router.push({ path: `/ms_user` });
    },

    //MS??????????????????
    backToMsUserB() {
      router.push({ path: `/ms_user` });
    },

    goToProUserCreateConfirm() {
      router.push({ path: `/ms_user/new/confirm` });
    },

    //MS????????????????????????
    backToMsUserRegist() {
      router.push({ path: `/ms_user/new` });
    },

    goToMsUserRegistComplete() {
      router.push({ path: `/ms_user/new/complete` });
    },

    //MS????????????????????????
    backToMsUserC() {
      router.push({ path: `/ms_user` });
    },
  },
});
