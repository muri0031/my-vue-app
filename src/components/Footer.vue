<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Karla Murillo. All rights reserved.</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/karla-murillo-j95/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/muri0031" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:karlamurilloj21@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  </template>

  
<style scoped>
.footer {
  background-color: #2C3E50;
  color: white; 
  padding: 20px; 
  text-align: center; 
  position: relative; 
  bottom: 0; 
  width: 100%; 
  
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.social-links {
  margin-top: 10px; 
}

.social-links a {
  color: #AED6F1; 
  margin: 0 10px; 
  text-decoration: none; 
}

.social-links a:hover {
  text-decoration: underline; 
}
</style>
