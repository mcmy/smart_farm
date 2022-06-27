import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CloudCommon from "@/common/CloudCommon";
import * as toastr from "toastr";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

toastr.options = CloudCommon.ToastUtils.toastDef();

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
