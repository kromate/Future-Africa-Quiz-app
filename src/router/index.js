import { createRouter, createWebHistory } from 'vue-router';

const routes = [


  {
    path: '/',
    name: 'HomePage',
    component: ()=> import('../views/homepage.vue'),

  },
  {
    path: '/add',
    name: 'Add',
    component: ()=> import('../views/addAlert.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
