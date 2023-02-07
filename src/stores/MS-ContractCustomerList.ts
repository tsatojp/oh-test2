import json from "../../public/static/mock.json";
import axios from "axios";
// const url = "http://localhost:5173/company";
// const headers = { Accept: "application/json" };

type ContractCustomerList = {
  info: [];
  totalCount: number;
  totalPage: number;
  showData: infoData[];
  pageSize: number;
};

type infoData = {
  name: string;
  registrationStatus: string;
  interviewBookingNum: number;
  interviewImplementNum: number;
  sumOfTickets: number;
  msInChargeUser: string;
};

export default {
  state: {
    info: [],
    totalCount: 0,
    totalPage: 0,
    showData: [],
    pageSize: 10,
  },

  mutations: {
    setInfo(state: ContractCustomerList, payload: any) {
      state.info = payload;
    },

    setShowData(state: ContractCustomerList, payload: any) {
      state.totalCount = state.info.length;
      state.totalPage = Math.ceil(state.totalCount / 10) || 1;

      state.showData = [
        ...state.info.slice(
          state.pageSize * payload - state.pageSize,
          state.pageSize * payload
        ),
      ];
    },
  },

  actions: {
    async setInfo({ commit }: { commit: Function }, payload: any) {
      // const info = await fetch(url, { headers });
      // const j = await info.json();
      commit("setInfo", json.info);
      commit("setShowData", payload);
    },

    // async openDetailInfo(context:any,company_id:number
    // ) {
    //   const response=await axios.post("http://localhost:5173/company" + company_id);
    //   context.dispatch("setInfo", company_id);
    // },
  },

  getters: {
    getInfo: (state: ContractCustomerList) => {
      return state.info;
    },

    getShowData: (state: ContractCustomerList) => {
      return state.showData;
    },

    getPageSize: (state: ContractCustomerList) => {
      return state.pageSize;
    },

    getTotalCount: (state: ContractCustomerList) => {
      return state.totalCount;
    },
  },
};
