import { createApp } from 'vue'
import App from './App.vue'
import "popper.js"
import "bootstrap";
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

// global register
import router from "./router/index"
createApp(App).use(VuePlyr, {
    plyr: {}
}).use(router).mount('#app')
