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
      // Here you can handle the form submission, e.g., send the data to an API
      console.log('Form submitted:', {
        name: this.name,
        email: this.email,
        message: this.message,
      });
      this.submitted = true; // Show a success message or reset the form
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
  flex: 1; /* Allow the header-image section to take up space */
  display: flex;
  flex-direction: column; /* Stack h1 and image vertically */
  align-items: center; /* Center items horizontally */
}


.image-about {
  width: 100%; /* Full width for the image container */
}

.image-about img {
  width: 100%; 
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px; /* Optional: rounded corners */
}
.contact-page {
  max-width: 1200px;  min-height: 100vh;margin: 0 auto; /* Center the container */
  min-height: 100vh; 
  padding: 20px; /* Add some padding */
  margin: 0 auto; /* Center the container */
  color: white; /* Text color */
}
.info-container {
  display: flex; /* Use flexbox to align items in a row */
  justify-content: space-between; /* Space between the two sections */
  margin-top: 20px; /* Space above the info container */
  min-height: 100%;
   /* Center items vertically */
}
.p-info{
    text-align:left;
    margin: 2px 0;
    padding-left:20px;
}
.social-media {
  flex: 1; /* Allow the social media section to take up space */
   /* Space between social media and contact form */
  padding: 20px; /* Padding inside the social media section */ /* Rounded corners */
  display: flex;
  flex-direction: column;
}

.contact-container {
  flex: 1; /* Allow the contact form section to take up 2/3 of the space */
  background-color: #2C3E50; /* Background color */
  padding: 20px; /* Add some padding */
  border-radius: 8px; /* Rounded corners */
}
h1 {
  text-align: center; /* Center the heading */
  color: #AED6F1; /* Heading color */
  font-size:3em;
  margin-bottom: 5px;
}
h2{
    color: #AED6F1;
}

.form-group {
  margin-bottom: 15px; /* Space between form groups */
}

label {
  display: block; /* Make labels block elements */
  margin-bottom: 5px; /* Space below labels */
  margin-top: 0px;
}

input,
textarea {
  width: 95%; /* Full width */
  padding: 10px; /* Padding inside inputs */
  border: 1px solid #AED6F1; /* Border color */
  border-radius: 4px; /* Rounded corners */
  background-color: #34495E; /* Input background color */
  color: white; /* Input text color */
}

input:focus,
textarea:focus {
  border-color: #AED6F1; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.submit-button {
  width: 95%; /* Full width */
  padding: 10px; /* Padding inside button */
  border: none; /* Remove border */
  border-radius: 4px; /* Rounded corners */
  background-color: #AED6F1; /* Button background color */
  color: #2C3E50; /* Button text color */
  font-size: 1.2em; /* Button font size */
  cursor: pointer; /* Pointer cursor on hover */
}

.submit-button:hover {
  background-color: #2C3E50; /* Darker background on hover */
  color: white; /* Change text color on hover */
}

.success-message {
  margin-top: 20px; /* Space above success message */
  text-align: center; /* Center the success message */
  color: #AED6F1; /* Success message color */
}
p {
 /* Set the color for paragraph text */
  text-align: center; /* Center-align the text */
}
/* Additional styles for social media links */
.social-media a {
  color: #AED6F1; /* Icon and link color */
  text-decoration: none; /* Remove underline from links */
  display: flex; /* Flexbox for icon and text alignment */
  align-items: center; /* Center the icon and text vertically */
}

.social-media a i {
  margin-right: 8px; /* Space between icon and text */
}
ul li{
    list-style:none;
}
</style>