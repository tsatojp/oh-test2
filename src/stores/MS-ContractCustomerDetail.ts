import axios from "axios";
import json from "../../public/static/mock.json";
// const url = "http://localhost:5173/company/";
// const headers = { Accept: "application/json" };

type ContractCustomerDetail = {
  detailInfo: detail[];
};

type detail = {
  company_id: number;
  name: string;
  registrationStatus: string;
  interviewBookingNum: number;
  interviewImplementNum: number;
  sumOfTickets: number;
  msInChargeUser: string;
};

export default {
  state: {
    detailInfo: [],
  },

  mutations: {
    setDetailInfo(state: ContractCustomerDetail, payload: any) {
      state.detailInfo = payload[0];
    },
  },

  actions: {
    async setDetailInfo(context: any) {
      //   const detailInfo = await fetch(url + payload, { headers });
      //   const j = await detailInfo.json();
      context.commit("setDetailInfo", json.info);
    },
  },

  getters: {
    getDetailInfo: (state: ContractCustomerDetail) => {
      return state.detailInfo;
    },
  },
};
