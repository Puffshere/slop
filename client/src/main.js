import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './pages/App.vue'
import Home from './pages/Home.vue'
import Rules from '../src/pages/Rules.vue'
import CourseRecords from '../src/pages/CourseRecords.vue'
import Vue from 'vue';
import VueMeta from 'vue-meta';

Vue.use(VueMeta);

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/records', component: CourseRecords },
        { path: '/rules', component: Rules },
    ]
})

const app = createApp(App)

// Add the router to the app
app.use(router)

// Mount the app
app.mount('#app')