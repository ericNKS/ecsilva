import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue';
import IndexHome from './view/IndexHome.vue';
import IndexProjetos from './view/IndexProjetos.vue';

const routes = [
  { path: '/', component: IndexHome },
  { path: '/pojetos', component: IndexProjetos },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
    .use(router)
    .mount('#app')
