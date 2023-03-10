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
    occupationList: ["?????????", "?????????", "?????????"],
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

    //???????????????????????????
    goToProUserDetail(profession_id: string) {
      router.push({ path: `/profession/${profession_id}` });
    },

    //???????????????????????????
    backToProUserList() {
      router.push({ path: `/profession` });
    },

    goToProUserDetailEdit(profession_id: string) {
      router.push({ path: `/profession/${profession_id}/edit` });
    },

    //?????????????????????????????????
    backToProUserDetail(profession_id: string) {
      router.push({ path: `/profession/${profession_id}` });
    },

    goToProUserDetailEditConfirm(profession_id: string) {
      router.push({ path: `/profession/${profession_id}/edit/confirm` });
    },

    //???????????????????????????????????????
    backToProUserDetailEdit(profession_id: string) {
      router.push({ path: `/profession/${profession_id}/edit` });
    },

    goToProUserDetailEditComplete(profession_id: string) {
      router.push({ path: `/profession/${profession_id}/edit/complete` });
    },

    //???????????????????????????????????????
    backToProUserDetailA(profession_id: string) {
      router.push({ path: `/profession/${profession_id}` });
    },

    //???????????????????????????
    backToProUserListA() {
      router.push({ path: `/profession` });
    },

    goToProUserCreateConfirm() {
      router.push({ path: `/profession/new/confirm` });
    },

    //?????????????????????????????????
    backToProUserCreate() {
      router.push({ path: `/profession/new` });
    },

    goToProUserCreateComplete() {
      router.push({ path: `/profession/new/complete` });
    },

    //?????????????????????????????????
    backToMsUserList() {
      router.push({ path: `/ms_user` });
    },
  },
});
