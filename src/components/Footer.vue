<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(), // Get the current year
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
  background-color: #2C3E50; /* Dark background color */
  color: white; /* Text color */
  padding: 20px; /* Padding for the footer */
  text-align: center; /* Center the text */
  position: relative; /* Position relative for any absolute children */
  bottom: 0; /* Stick to the bottom */
  width: 100%; /* Full width */
}

.footer-content {
  max-width: 1200px; /* Limit the width of the footer content */
  margin: 0 auto; /* Center the footer content */
}

.social-links {
  margin-top: 10px; /* Space above social links */
}

.social-links a {
  color: #AED6F1; /* Link color */
  margin: 0 10px; /* Space between links */
  text-decoration: none; /* Remove underline */
}

.social-links a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>