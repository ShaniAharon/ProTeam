import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import projectApp from '../views/project-app.vue';
import projectEdit from '../views/project-edit.vue';
import projectDetails from '../views/project-details.vue';
import googleForm from '../views/google-sheet-form.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/app',
      name: 'main',
      component: projectApp,
    },
    {
      path: '/sheet',
      name: 'form',
      component: googleForm,
    },
    {
      path: '/edit/:projectId?', //can also be add project , soo we put '?' after the projectId
      component: projectEdit,
    },
    {
      path: '/details/:projectId',
      component: projectDetails,
    },
  ],
});

export default router;
