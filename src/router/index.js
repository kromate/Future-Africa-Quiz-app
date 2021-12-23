import { createRouter, createWebHistory } from 'vue-router';

const routes = [


  {
    path: '/',
    name: 'HomePage',
    component: ()=> import('../views/homepage.vue'),

  },
  {
    path: '/questions',
    name: 'Questions',
    component: ()=> import('../views/Questions.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
