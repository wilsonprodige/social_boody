import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import {useToast} from 'vue-toast-notification';
import store from './store'



const app =createApp(App).use(router)

const toast = useToast();
app.config.globalProperties.$toast = toast;
app.use(ToastPlugin,{
    toast,
    position: 'top-right',
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    iconEnabled: true,
    rtl: false,
  })
  app.use(store);
  app.mount('#app')