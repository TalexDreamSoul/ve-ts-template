import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

// import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

const routes = setupLayouts(generatedRoutes)
  
const router = createRouter({
  routes
})

app.use(router).use(ElementPlus)

app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
