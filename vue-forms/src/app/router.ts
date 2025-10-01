import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import FormAPage from '@/pages/FormAPage.vue'
import FormBPage from '@/pages/FormBPage.vue'
import ResultPage from '@/pages/ResultPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/form/a', component: FormAPage },
  { path: '/form/b', component: FormBPage },
  { path: '/result', component: ResultPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
