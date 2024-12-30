<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Work', path: '/Work' },
        { name: 'Contact', path: '/contact' },
      ],
    };
  },
};
</script>

<template>
    <nav class="nav-menu">
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </template>

  <style scoped>
  .nav-menu {
  padding: 10px;
padding-top: 50px;
padding-right: 100px;
}


.nav-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0; 
  display: flex; 
  justify-content: flex-end;
  gap: 50px;
  font-size: 1.5em;
  font-weight: 900;
  font-family: "Nunito", sans-serif;
}

.nav-menu li {
  display: inline;
  margin-left: 20px;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  padding: 10px; 
}

.nav-menu a:hover {
  background-color:#2C3E50;
  padding: 10px;
  border-radius: 5px;
}
  </style>