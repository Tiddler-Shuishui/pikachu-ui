import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Hugh from "./components/Hugh.vue"
import Hugh2 from "./components/Hugh2.vue"

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Hugh },
    {path:'/xxx', component: Hugh2}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

