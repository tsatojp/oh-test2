import { createRouter, createWebHistory } from "vue-router";
import ContractClientList from "../views/client/MS-ContractClientListPage.vue";
import ContractClientDetail from "../views/client/MS-ContractClientDetailPage.vue";
import ContractClientEdit from "../views/client/MS-ContractClientEditPage.vue";
import ContractClientEditConfirm from "../views/client/MS-ContractClientEditConfirmPage.vue";
import ContractClientEditComplete from "../views/client/MS-ContractClientEditCompletePage.vue";
import ContractClientRequestOutput from "../views/client/MS-ContractClientRequestOutputPage.vue";
import ClientUserList from "../views/client/MS-ClientUserListPage.vue";
import ClientUserDetail from "../views/client/MS-ClientUserDetailPage.vue";
import ProUserList from "../views/profession/MS-ProUserListPage.vue";
import ProUserCreate from "../views/profession/MS-ProUserCreatePage.vue";
import ProUserCreateConfirm from "../views/profession/MS-ProUserCreateConfirmPage.vue";
import ProUserCreateComplete from "../views/profession/MS-ProUserCreateCompletePage.vue";
import ProUserDetail from "../views/profession/MS-ProUserDetailPage.vue";
import ProUserDetailEdit from "../views/profession/MS-ProUserDetailEditPage.vue";
import ProUserDetailEditConfirm from "../views/profession/MS-ProUserDetailEditConfirmPage.vue";
import ProUserDetailEditComplete from "../views/profession/MS-ProUserDetailEditCompletePage.vue";
import MsUserList from "../views/ms/MS-MsUserListPage.vue";
import MsUserRegist from "../views/ms/MS-MsUserRegistPage.vue";
import MsUserRegistConfirm from "../views/ms/MS-MsUserRegistConfirmPage.vue";
import MsUserRegistComplete from "../views/ms/MS-MsUserRegistCompletePage.vue";
import MsUserDetail from "../views/ms/MS-MsUserDetailPage.vue";
import MsUserEdit from "../views/ms/MS-MsUserEditPage.vue";
import MsUserEditConfirm from "../views/ms/MS-MsUserEditConfirmPage.vue";
import MsUserEditComplete from "../views/ms/MS-MsUserEditCompletePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //契約顧客一覧
    {
      path: "/company",
      name: "ContractClientList",
      component: ContractClientList,
      meta: {
        title: "契約顧客一覧",
      },
    },
    //契約顧客詳細
    {
      path: "/company/:company_id",
      name: "ContractClientDetail",
      component: ContractClientDetail,
      meta: {
        text: "契約顧客詳細",
      },
    },
    //契約顧客編集
    {
      path: "/company/:company_id/edit",
      name: "ContractClientEdit",
      component: ContractClientEdit,
      meta: {
        text: "契約顧客編集",
      },
    },
    //契約顧客編集確認
    {
      path: "/company/:company_id/edit/confirm",
      name: "ContractClientEditConfirm",
      component: ContractClientEditConfirm,
      meta: {
        title: "契約顧客編集確認",
      },
    },
    //契約顧客編集完了
    {
      path: "/company/:company_id/edit/complete",
      name: "ContractClientEditComplete",
      component: ContractClientEditComplete,
      meta: {
        title: "契約顧客編集完了",
      },
    },
    //契約顧客請求出力
    {
      path: "/company/:company_id/download",
      name: "ContractClientRequestOutput",
      component: ContractClientRequestOutput,
      meta: {
        title: "契約顧客請求出力",
      },
    },
    //顧客ユーザー一覧
    {
      path: "/company/:company_id/customer",
      name: "ClientUserList",
      component: ClientUserList,
      meta: {
        title: "顧客ユーザー一覧",
      },
    },
    //顧客ユーザー詳細
    {
      path: "/company/:company_id/customer/:customer_id",
      name: "ClientUserDetail",
      component: ClientUserDetail,
      meta: {
        title: "顧客ユーザー詳細",
      },
    },

    //専門職一覧
    {
      path: "/profession",
      name: "ProUserList",
      component: ProUserList,
      meta: {
        title: "専門職一覧",
      },
    },
    //専門職作成
    {
      path: "/profession/new",
      name: "ProUserCreate",
      component: ProUserCreate,
      meta: {
        title: "専門職作成",
      },
    },
    //専門職作成確認
    {
      path: "/profession/new/confirm",
      name: "ProUserCreateConfirm",
      component: ProUserCreateConfirm,
      meta: {
        title: "専門職作成確認",
      },
    },
    //専門職作成完了
    {
      path: "/profession/new/complete",
      name: "ProUserCreateComplete",
      component: ProUserCreateComplete,
      meta: {
        title: "専門職作成完了",
      },
    },
    //専門職詳細
    {
      path: "/profession/:profession_id",
      name: "ProUserDetail",
      component: ProUserDetail,
      meta: {
        title: "専門職詳細",
      },
    },
    //専門職編集
    {
      path: "/profession/:profession_id/edit",
      name: "ProUserDetailEdit",
      component: ProUserDetailEdit,
      meta: {
        title: "専門職編集",
      },
    },
    //専門職編集確認
    {
      path: "/profession/:profession_id/edit/confirm",
      name: "ProUserDetailEditConfirm",
      component: ProUserDetailEditConfirm,
      meta: {
        title: "専門職編集確認",
      },
    },
    //専門職編集完了
    {
      path: "/profession/:profession_id/edit/complete",
      name: "ProUserDetailEditComplete",
      component: ProUserDetailEditComplete,
      meta: {
        title: "専門職編集完了",
      },
    },
    //MSユーザー一覧
    {
      path: "/ms_user",
      name: "MsUserList",
      component: MsUserList,
      meta: {
        title: "MSユーザー一覧",
      },
    },
    //MSユーザー登録
    {
      path: "/ms_user/new",
      name: "MsUserRegist",
      component: MsUserRegist,
      meta: {
        title: "MSユーザー登録",
      },
    },
    //MSユーザー登録確認
    {
      path: "/ms_user/new/confirm",
      name: "MsUserRegistConfirm",
      component: MsUserRegistConfirm,
      meta: {
        title: "MSユーザー登録確認",
      },
    },
    //MSユーザー登録完了
    {
      path: "/ms_user/new/complete",
      name: "MsUserRegistComplete",
      component: MsUserRegistComplete,
      meta: {
        title: "MSユーザー登録完了",
      },
    },
    //MSユーザー詳細
    {
      path: "/ms_user/:ms_user_id",
      name: "MsUserDetail",
      component: MsUserDetail,
      meta: {
        title: "MSユーザー詳細",
      },
    },
    //MSユーザー編集
    {
      path: "/ms_user/:ms_user_id/edit",
      name: "MsUserEdit",
      component: MsUserEdit,
      meta: {
        title: "MSユーザー編集",
      },
    },
    //MSユーザー編集確認
    {
      path: "/ms_user/:ms_user_id/edit/confirm",
      name: "MsUserEditConfirm",
      component: MsUserEditConfirm,
      meta: {
        title: "MSユーザー編集確認",
      },
    },
    //MSユーザー編集完了
    {
      path: "/ms_user/:ms_user_id/edit/complete",
      name: "MsUserEditComplete",
      component: MsUserEditComplete,
      meta: {
        title: "MSユーザー編集完了",
      },
    },
  ],
});

export default router;
