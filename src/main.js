import { createApp } from "vue";
import "./style.css";
import store from "./store";
import App from "./App.vue";
import BaseHeading from "./components/base/BaseHeading.vue";
import BaseFilter from "./components/base/BaseFilter.vue";
import BaseProductCardGrid from "./components/base/BaseProductCardGrid.vue";
import BaseProductCardList from "./components/base/BaseProductCardList.vue";

const app = createApp(App);

app.use(store);

app.component("BaseHeading", BaseHeading);
app.component("BaseFilter", BaseFilter);
app.component("BaseProductCardGrid", BaseProductCardGrid);
app.component("BaseProductCardList", BaseProductCardList);

app.mount("#app");
