import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'
import { pinia } from './app/pinia'
import { router } from './app/router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
