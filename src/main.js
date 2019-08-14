import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.

Vue.use(VuePlyr)


new Vue({
  render: h => h(App)
}).$mount("#app");
