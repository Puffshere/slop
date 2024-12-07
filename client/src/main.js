import { createApp, nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './pages/App.vue'
import Home from './pages/Home.vue'
import Results from './pages/2023Results.vue'
import Rules from '../src/pages/Rules.vue'
import CourseRecords from '../src/pages/CourseRecords.vue'
import Admin from '../src/pages/Admin.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                title: 'SloppyGolf.com',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Website dedicated to tracking a year long golf competition between Shawn Taylor, Aaron Jackson, Bock Thomas, and Ron Butryn.'
                    }
                ]
            }
        },
        {
            path: '/records',
            component: CourseRecords,
            meta: {
                title: 'SloppyGolf.com - Course Records',
                metaTags: [
                    {
                        name: 'description',
                        content: 'These are the current course records.'
                    }
                ]
            }
        },
        {
            path: '/rules',
            component: Rules,
            meta: {
                title: 'SloppyGolf.com - Rules 2024',
                metaTags: [
                    {
                        name: 'description',
                        content: 'These are the current rules for 2024.'
                    }
                ]
            }
        },
        {
            path: '/2023results',
            component: Results,
            meta: {
                title: 'SloppyGolf.com - Results 2023',
                metaTags: [
                    {
                        name: 'description',
                        content: 'These are the current results for 2023.'
                    }
                ]
            }
        },
        {
            path: '/2024results',
            component: Results,
            meta: {
                title: 'SloppyGolf.com - Results 2024',
                metaTags: [
                    {
                        name: 'description',
                        content: 'These are the current results for 2024.'
                    }
                ]
            }
        },
        {
            path: '/admin',
            component: Admin,
            meta: {
                title: 'SloppyGolf.com - Admin page',
                metaTags: [
                    {
                        name: 'description',
                        content: 'This is the Administration page for SloppyGolf.com.'
                    }
                ]
            }
        },
    ]
})

router.afterEach((to) => {
    nextTick(() => {
        // Update title
        document.title = to.meta.title || 'SloppyGolf.com';

        // Remove existing meta tags
        Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

        // Add new meta tags
        to.meta.metaTags?.forEach(tagDef => {
            const tag = document.createElement('meta');
            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            tag.setAttribute('data-vue-router-controlled', '');
            document.head.appendChild(tag);
        });
    });
});

const app = createApp(App)

app.use(router)

app.mount('#app')