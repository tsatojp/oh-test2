import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

loadFonts();

createApp(App).use(router).use(vuetify).use(createPinia()).mount("#app");

// const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);

// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   next();
// });
