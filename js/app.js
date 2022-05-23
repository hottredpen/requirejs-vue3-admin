import router from 'babel!./router/index';
import store from 'babel!./store/store';
import App from 'component!./App';

let app = window.Vue.createApp(App)
app.use(window.ElementPlus);
app.use(window.ElementPlusIconsVue);
app.use(store)
app.use(router)
app.mount("#app")
export default app