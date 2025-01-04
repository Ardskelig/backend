import { createRouter, createWebHistory } from 'vue-router'
import BpmnPage from '@/views/BpmnPage.vue'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ClubAdminPage from '@/views/ClubAdminPage.vue'
import ActivityPage from '@/views/Server/ActivityPage.vue'
import DetailPage from '@/views/Detail/DetailPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path:'/bpmn',
        name:'bpmn',
        component:BpmnPage
    },
    {
      path:'/home',
      name:'home',
      component:HomePage,
    },
    {
      path:'/',
      name:'home',
      component:HomePage
    },
    {
      path:'/login',
      name:'login',
      component:LoginPage
  },
  {
    path:'/detail',
    name:'detail',
    component:DetailPage
  },
  {
    path:'/activity',
    name:'activity',
    component:ActivityPage
  },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },

  ],
})

export default router
