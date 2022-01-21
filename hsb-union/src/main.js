import { createApp } from 'vue'
import App from './App.vue'
import "popper.js"
import "bootstrap";

import router from "./router/index"
createApp(App).use(router).mount('#app')
