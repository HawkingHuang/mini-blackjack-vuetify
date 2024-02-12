import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "../node_modules/vuetify/dist/vuetify.min.css";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(store).use(vuetify).mount("#app");
