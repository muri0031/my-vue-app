import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue'; // Correct import
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Work from '../views/Work.vue';
import ProjectDetail from '../views/ProjectDetail.vue';


const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home, // Home component for the root path
    },
    {
      path: '/about',
      name: 'About',
      component: About, // About component for the /about path
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact, // About component for the /about path
      },
      {
        path: '/work',
        name: 'Work',
        component: Work, // About component for the /about path
      },
      {
        path: '/projects/:id', // Dynamic route for project details
        name: 'ProjectDetail',
        component: ProjectDetail,
      },
  ];

  const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes,
  });

  export default router;