    import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');