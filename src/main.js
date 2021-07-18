import { createApp, Vue } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes, faBars);

createApp(App)
  .component("FontAwesome", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
