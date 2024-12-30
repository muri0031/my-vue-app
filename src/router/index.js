import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue'; // Correct import
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

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
      }
  ];

  const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes,
  });

  export default router;