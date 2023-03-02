import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import './assets/Styles/Element.css'
createApp(App).use(router).use(VueTelInput).mount('#app')
 
