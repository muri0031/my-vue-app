<script>

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      const mailtoLink = `mailto:karlitam21@hotmail.com?subject=Message from ${this.name}&body=${encodeURIComponent(this.message)}%0D%0AFrom: ${this.email}`;
      window.location.href = mailtoLink; // Open the email client
      this.submitted = true; 
      this.resetForm();
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>

<template>
  <div class="contact-page">
    <h1>Connect with me</h1>
    <div class="info-container">
      <div class="header-image">
      
        <div class="image-about">
          <img src="/contactUs.png" alt="contact me" />
        </div>
      </div>
      <div class="social-media">
       
        <p class="p-info">
          Have a project in mind, a question, or just want to say hello?
        </p>
        <p class="p-info">
          Feel free to reach out! I’m always excited to connect and collaborate on exciting ideas.
        </p>
        <ul>
          <li>
            <a href="https://github.com/muri0031" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="mailto:karlamurilloj21@gmail.com">
              <i class="fas fa-envelope"></i> Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karla-murillo-j95/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div class="contact-container">
        <h2>Get in touch</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="message" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
        <div v-if="submitted" class="success-message">
          Thank you for your message! I will get back to you soon.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.header-image {
  flex: 1; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
}


.image-about {
  width: 100%; 
}

.image-about img {
  width: 100%; 
  height: auto; 
  border-radius: 8px; 
}
.contact-page {
  max-width: 1200px;  min-height: 100vh;margin: 0 auto;
  min-height: 100vh; 
  padding: 20px; 
  margin: 0 auto;
  color: white; 
}
.info-container {
  display: flex; 
  justify-content: space-between; 
  margin-top: 20px; 
  min-height: 100%;
  
}
.p-info{
    text-align:left;
    margin: 2px 0;
    padding-left:20px;
}
.social-media {
  flex: 1; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
}

.contact-container {
  flex: 1; 
  background-color: #2C3E50; 
  padding: 20px; 
  border-radius: 8px; 
}
h1 {
  text-align: center; 
  color: #AED6F1; 
  font-size:3em;
  margin-bottom: 5px;
}
h2{
    color: #AED6F1;
}

.form-group {
  margin-bottom: 15px; 
}

label {
  display: block;
  margin-bottom: 5px;
  margin-top: 0px;
}

input,
textarea {
  width: 95%; 
  padding: 10px;
  border: 1px solid #AED6F1; 
  border-radius: 4px; 
  background-color: #34495E; 
  color: white; 
}

input:focus,
textarea:focus {
  border-color: #AED6F1; 
  outline: none; 
}

.submit-button {
  width: 95%; 
  padding: 10px; 
  border: none; 
  border-radius: 4px; 
  background-color: #AED6F1; 
  color: #2C3E50;
  font-size: 1.2em; 
  cursor: pointer; 
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.5);
  transition: box-shadow 0.3s;
}

.submit-button:hover {
  background-color: #2C3E50; 
  color: white; 
}

.success-message {
  margin-top: 20px;
  text-align: center; 
  color: #AED6F1; 
}
p {
  text-align: center; 
}
.social-media a {
  color: #AED6F1;
  text-decoration: none; 
  display: flex;
  align-items: center;
}

.social-media a i {
  margin-right: 8px; 
}
ul li{
    list-style:none;
}


/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .info-container {
    flex-direction: column; /* Stack elements vertically */
  }

  .social-media {
    padding: 10px; /* Reduce padding */
  }

  h1 {
    font-size: 2.5em; /* Smaller font size for mobile */
  }

  h2 {
    font-size: 1.8em; /* Adjust heading size */
  }

  .form-group {
    margin-bottom: 10px; /* Reduce margin */
  }

  .submit-button {
    font-size: 1em; /* Smaller button font size */
  }

  .p-info {
    padding-left: 10px; /* Reduce padding */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2em; /* Further reduce font size for very small screens */
  }

  h2 {
    font-size: 1.5em; /* Further adjust heading size */
  }

  input,
  textarea {
    width: 90; /* Full width for inputs */
  }

  .submit-button {
    width: 90; /* Full width button */
  }

  .p-info {
    padding-left: 5px; /* Further reduce padding */
  }
}
</style>
