import type { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

// import MSContractCustomerDetail from "./MS-ContractCustomerDetail";
import MSContractCustomerList from "./MS-ContractCustomerList";
import MSContractCustomerDetail from "./MS-ContractCustomerDetail";

type State = {};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    MSContractCustomerList,
    MSContractCustomerDetail,
  },
});

export const useStore = () => {
  return baseUseStore(key);
};
