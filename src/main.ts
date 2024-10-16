import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/tailwind.css';
import App from './App.vue'
import router from './router'
import { VueSpinnersPlugin } from 'vue3-spinners';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSpinnersPlugin);
app.mount('#app')
