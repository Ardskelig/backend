import { createRouter, createWebHistory } from 'vue-router'
import BpmnPage from '@/views/BpmnPage.vue'
import HomePage from '@/views/HomePage.vue'
import ClubAdminPage from '@/views/ClubAdminPage.vue'
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
      component:HomePage
    },
    {
      path:'/clubs',
      name:'clubs',
      component:ClubAdminPage
    },
    {
      path:'/',
      name:'home',
      component:HomePage
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
  ],
})

export default router
