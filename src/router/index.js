import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue'; 
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Work from '../views/Work.vue';
import ProjectDetail from '../views/ProjectDetail.vue';


const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home, 
    },
    {
      path: '/about',
      name: 'About',
      component: About, 
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact, 
      },
      {
        path: '/work',
        name: 'Work',
        component: Work, 
      },
      {
        path: '/projects/:id', 
        name: 'ProjectDetail',
        component: ProjectDetail,
      },
  ];

  const router = createRouter({
    history: createWebHistory(), 
    routes,
  });

  export default router;