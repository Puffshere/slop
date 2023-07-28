import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './pages/App.vue';
import Records from '../src/pages/records.vue'

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/records', component: Records },
        { path: '/', component: App }
    ]
})

const app = createApp(App)

// Add the router to the app
app.use(router)

// Mount the app
app.mount('#app')
