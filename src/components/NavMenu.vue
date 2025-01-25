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
      isMenuOpen: false, // State to track if the menu is open
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open/close state
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
  position: relative; /* Position relative for absolute positioning of the menu */
}

.burger {
  display: none; /* Hide burger menu by default */
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

/* Media Queries for Responsive Design */
@media (max-width: 768px) { /* Tablet and smaller */
  .burger {
    display: flex; /* Show burger menu on smaller screens */
  }

  .nav-menu ul {
    flex-direction: column; /* Stack items vertically */
    align-items: flex-start; /* Align items to the start */
    gap: 20px; /* Reduce gap between items */
    font-size: 1.2em; /* Slightly smaller font size */
    position: absolute; /* Position the menu absolutely */
    top: 60px; /* Position below the burger */
    right: 0; /* Align to the right */
    background-color: rgba(44, 62, 80, 0.9); /* Background color for the menu */
    padding: 20px; /* Padding for the menu */
    display: none; /* Hide the menu by default */
    z-index: 1000; /* Ensure it appears above other content */
  }

  .nav-menu ul.open {
    display: flex; /* Show the menu when open */
  }

  .nav-menu li {
    margin-left: 0; /* Remove left margin */
  }
}

@media (max-width: 480px) { /* Phone size */
  .nav-menu {
    padding-right: 10px; /* Further reduce right padding */
  }

  .nav-menu ul {
    font-size: 1em; /* Smaller font size for mobile */
  }

  .nav-menu a {
    padding: 8px; /* Adjust padding for smaller buttons */
  }
}
</style>