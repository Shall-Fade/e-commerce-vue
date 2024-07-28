import { createApp } from "vue";
import "./style.css";
import store from "./store";
import router from "./router"
import App from "./App.vue";
import BaseHeading from "./components/base/BaseHeading.vue";
import BaseFilter from "./components/base/BaseFilter.vue";
import BaseProductCardGrid from "./components/base/BaseProductCardGrid.vue";
import BaseProductCardList from "./components/base/BaseProductCardList.vue";
import BaseCartCard from "./components/base/BaseCartCard.vue";
import BaseArticle from "./components/base/BaseArticle.vue";
import BasePagination from "./components/base/BasePagination.vue";
import BaseModal from "./components/base/BaseModal.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("BaseHeading", BaseHeading);
app.component("BaseFilter", BaseFilter);
app.component("BaseProductCardGrid", BaseProductCardGrid);
app.component("BaseProductCardList", BaseProductCardList);
app.component("BaseCartCard", BaseCartCard);
app.component("BaseArticle", BaseArticle);
app.component("BasePagination", BasePagination);
app.component("BaseModal", BaseModal);

app.mount("#app");
