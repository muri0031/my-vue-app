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
      isMenuOpen: false, 
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; 
    },
  },
};
</script>
<template>
    <nav class="nav-menu">
    <div class="burger" @click="toggleMenu">
      <div class="line" :class="{ 'open': isMenuOpen }"></div>
      <div class="line" :class="{ 'open': isMenuOpen }"></div>
      <div class="line" :class="{ 'open': isMenuOpen }"></div>
    </div>
    <ul :class="{ 'open': isMenuOpen }">
      <li v-for="item in menuItems" :key="item.name">
        <router-link :to="item.path" @click="isMenuOpen = false">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
  </template>

<style scoped>
.nav-menu {
  padding: 10px;
  padding-top: 50px;
  padding-right: 100px;
  position: relative; 
}

.burger {
  display: none; 
  flex-direction: column;
  cursor: pointer;
}

.line {
  height: 4px;
  width: 30px;
  background-color: white;
  margin: 4px 0;
  transition: 0.3s;
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
  background-color: #2C3E50;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6);
}

/* Tablet size */
@media (max-width: 768px) { 
  .burger {
    display: flex; 
  }

  .nav-menu ul {
    flex-direction: column; 
    align-items: flex-start; 
    gap: 20px; 
    font-size: 1.2em; 
    position: absolute; 
    top: 60px; 
    right: 0; 
    background-color: rgba(44, 62, 80, 0.9); 
    padding: 20px; 
    display: none; 
    z-index: 1000;
  }

  .nav-menu ul.open {
    display: flex;
  }

  .nav-menu li {
    margin-left: 0; 
  }
}


/*mobile*/
@media (max-width: 480px) { 
  .nav-menu {
    padding-right: 10px; 
  }

  .nav-menu ul {
    font-size: 1em; 
  }

  .nav-menu a {
    padding: 8px; 
  }
}
</style>