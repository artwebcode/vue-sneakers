import './scss/main.scss'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Home from '@/pages/Home.vue'
import Favorites from '@/pages/Favorites.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/favorites', component: Favorites },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
