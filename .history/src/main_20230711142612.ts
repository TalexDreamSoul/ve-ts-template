import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)
  
app.use(ElementPlus)

app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
