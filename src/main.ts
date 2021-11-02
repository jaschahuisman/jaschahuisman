import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAt, faCity, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faInstagram,
  faWhatsapp,
  faBehance,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(faAt, faCity, faPhoneAlt);
library.add(faGithub, faInstagram, faWhatsapp, faBehance, faLinkedinIn);

createApp(App).use(router).component("icon", FontAwesomeIcon).mount("#app");
