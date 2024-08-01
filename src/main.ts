import { createApp } from "vue";
import "./assets/css/bootstrap.min.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import Vue3Marquee from "vue3-marquee";

const app = createApp(App);

app.use(router);
app.use(Vue3Marquee);
app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
});

app.mount("#app");
