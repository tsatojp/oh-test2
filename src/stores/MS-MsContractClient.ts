import { defineStore } from "pinia";
import json from "../static/mock.json";
import router from "@/router";

interface ContractCustomerList {
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
  //定义一个数组要+type
  companyPrefectureIdList: string[];
  registrationStatusList: string[];
  msInChargeUserNameList: string[];
  automaticUpdateList: string[];
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

export const useMsStore = defineStore("ms", {
  state: (): ContractCustomerList => ({
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
    companyPrefectureIdList: [
      "北海道",
      "青森県",
      "岩手県",
      "宮城県",
      "秋田県",
      "山形県",
      "福島県",
      "茨城県",
      "栃木県",
      "群馬県",
      "埼玉県",
      "千葉県",
      "東京都",
      "神奈川県",
      "新潟県",
      "富山県",
      "石川県",
      "福井県",
      "山梨県",
      "長野県",
      "岐阜県",
      "静岡県",
      "愛知県",
      "三重県",
      "滋賀県",
      "京都府",
      "大阪府",
      "兵庫県",
      "奈良県",
      "和歌山県",
      "鳥取県",
      "島根県",
      "岡山県",
      "広島県",
      "山口県",
      "徳島県",
      "香川県",
      "愛媛県",
      "高知県",
      "福岡県",
      "佐賀県",
      "長崎県",
      "熊本県",
      "大分県",
      "宮崎県",
      "鹿児島県",
      "沖縄県",
    ],
    registrationStatusList: ["契約OK", "与信チャック"],
    msInChargeUserNameList: [
      "山下 雅人",
      "林 佑紀",
      "山下 允盛",
      "佐藤 古都美",
    ],
    automaticUpdateList: ["あり", "なし"],
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

    //契約顧客一覧
    detailButtonA(company_id: string) {
      router.push({ path: `/company/${company_id}` });
    },

    //契約顧客詳細
    backToContractClientList() {
      router.push({ path: `/company` });
    },

    openCustomerUserList(company_id: string) {
      router.push({ path: `/company/${company_id}/customer` });
    },

    contractClientEdit(company_id: string) {
      router.push({ path: `/company/${company_id}/edit` });
    },

    //契約顧客編集
    backToContractClientDetail(company_id: string) {
      router.push({ path: `/company/${company_id}` });
    },

    goToContractClientEditConfirm(company_id: string) {
      router.push({ path: `/company/${company_id}/edit/confirm` });
    },

    //契約顧客編集確認
    backToContractClientEdit(company_id: string) {
      router.push({ path: `/company/${company_id}/edit` });
    },

    goToContractClientEditComplete(company_id: string) {
      router.push({ path: `/company/${company_id}/edit/complete` });
    },

    //契約顧客編集完了
    backToContractClientDetailA(company_id: string) {
      router.push({ path: `/company/${company_id}` });
    },

    //顧客ユーザー一覧
    detailButtonB(company_id: string, customer_id: string) {
      router.push({ path: `/company/${company_id}/customer/${customer_id}` });
    },

    //顧客ユーザー詳細
    backToClientUserList(company_id: string) {
      router.push({ path: `/company/${company_id}/customer` });
    },
  },
});
