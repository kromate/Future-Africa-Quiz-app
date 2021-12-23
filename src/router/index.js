import { createRouter, createWebHistory } from 'vue-router';

import Alert from '../views/alert.vue'

const routes = [

  {
    path: '/alert',
    name: 'alert',
    component: Alert,

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
