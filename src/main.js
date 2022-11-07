import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";
import router from "@/router/router";
import directives from "@/directives";
import store from "@/store";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import messagePlugin from "./utils/message.plugin";

library.add(
  faBlog,
  faCircleInfo,
  faArrowLeft,
  faRightFromBracket,
  faArrowDown,
  faHotel,
  faCircleXmark,
  faArrowRight,
  faPlus
);

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

document.addEventListener("DOMContentLoaded", () => {
  app.use(ElementPlus);
  app
    .use(messagePlugin)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
});
