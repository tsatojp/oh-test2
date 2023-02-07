<template>
  <v-navigation-drawer>
    <v-list density="compact" nav v-for="(item, i) in menuItems" :key="i">
      <v-list-item
        :prepend-icon="item.icon"
        :title="item.name"
        :href="item.link"
        v-if="!item.subItems"
      ></v-list-item>

      <v-list-group v-else :key="i">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :prepend-icon="item.icon"
            :title="item.name"
          ></v-list-item>
        </template>
        <v-list-item
          class="item_menu"
          v-for="(sub, idx) in item.subItems"
          :key="idx"
          :title="sub.name"
          :prepend-icon="sub.icon"
          :href="sub.link"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const menuItems = [
  {
    name: "HOME",
    link: "/",
    icon: "mdi-home-outline",
  },
  {
    name: "面談一覧",
    link: "/about",
    icon: "mdi-account-multiple",
  },
  {
    name: "アカウント設定",
    link: "/",
    icon: "mdi-account-supervisor-outline",
    subItems: [
      {
        name: "企業情報",
        link: "/",
        icon: "mdi-menu-right",
      },
      {
        name: "ユーザー一覧",
        link: "/customer",
        icon: "mdi-menu-right",
      },
      {
        name: "パスワード変更",
        link: "/",
        icon: "mdi-menu-right",
      },
    ],
  },
  {
    name: "チケット管理",
    link: "/",
    icon: "mdi-ticket-confirmation-outline",
  },
  {
    name: "請求情報確認",
    link: "/",
    icon: "mdi-text-box-outline",
  },
  {
    name: "利用規約",
    link: "/",
    icon: "mdi-file-table",
  },
  {
    name: "ヘルプページ",
    link: "/",
    icon: "mdi-help-circle-outline",
  },
  {
    name: "ログアウト",
    link: "/",
    icon: "mdi-logout",
  },
];
</script>
<style scoped>
.list {
  cursor: pointer;
}

.item_menu {
  padding-left: 0px;
  margin-left: -25px;
}
</style>
