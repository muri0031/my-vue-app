<script> 
export default {
  name: 'About',
};
</script>

<template>
  <div class="about-container">
    <h1>Hi there! 👋🏻</h1>
    <div class="content-row">
      <div class="text-content">
        <p>
          <strong>I'm Karla Murillo,</strong> originally from Mexico and now living in Canada. I recently graduated with a diploma in Interactive Media Design, and I’m passionate about creating websites that meet people’s needs. As a web developer and designer, I’ve worked on projects using HTML, CSS, JavaScript, React, Vue, and Vite. I also hold a UX Design Certificate from Google, which has helped me create user-friendly and engaging designs.
        </p>
        <p>
          I truly enjoy building websites for different purposes and bringing ideas to life. In my free time, you’ll often find me spending time with my family, camping, exercising, going for walks, or relaxing with a good movie.
        </p>
        <p class="lets-create">
          Let’s create something amazing together! 😃
        </p>
      </div>
      <div class="image-about">
        <img src="/karla.png" alt="About Me" />
      </div>
    </div>
    <!-- Button to Contact Page -->
    <div class="button-container">
      <router-link to="/contact">
        <button class="primary-button">Contact Me</button>
      </router-link>
    </div>
  </div>

  <!-- Banner Section -->
  <div class="banner">
    <h1>Turning your ideas into code, no console errors included!</h1> <!-- Slogan -->
  </div>
</template>

<style>

.banner {
  background-color: #AED6F1; /* Dark background for the banner */
  padding: 40px; /* Padding around the banner */
  text-align: center; /* Center the text */
  border-radius: 0; /* Remove rounded corners */
  margin: 20px 0;/* Space above the banner */
  width: 100%; /* Stretch the banner horizontally */
  position: relative; /* Ensure it fits within the layout */
}

.banner h1 {
  font-family: 'Nunito', sans-serif; /* Use a clean font */
  font-size: 2.5em; /* Font size for the slogan */
  color: #2C3E50; /* Light color for contrast */
  margin: 0; /* Remove default margin */
}
.about-container {
  max-width: 1000px; /* Limit the width of the content */
  margin: 0 auto; /* Center the container */
  padding: 20px; /* Add some padding */
color: white;
}

.about-container h1{
  text-align:left;
  color:#AED6F1;
}



h2 {
  font-family: 'Nunito', sans-serif; /* Use a clean font */
  font-size: 1.8em; /* Slightly smaller than h1 */
  color:white; /* Darker shade for the subheading */
  text-align: left; /* Center the subheading */
  margin-bottom: 20px; /* Space below the subheading */
}

.content-row {
  display: flex; /* Use Flexbox to align items in a row */
  align-items: center; /* Center items vertically */
  margin-top: 20px; /* Space above the content row */
}

.text-content {
  flex: 1; /* Allow text to take the remaining space */
  margin-right: 20px; /* Space between text and image */
}

.image-about {
  flex: 0 0 150px; /* Fixed width for the image container */
}

.image-about img {
  width: 200%; /* Make the image responsive */
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px; /* Optional: rounded corners */
}

p {
  font-family: 'Inter', sans-serif; /* Use a clean font */
  font-size: 1.3em; /* Standard font size for paragraphs */
  line-height: 1.6; /* Increase line height for readability */
  color:white; /* Dark gray for text */
  margin-bottom: 15px; /* Space below paragraphs */
 
}

.lets-create{
  color:  #AED6F1;
  margin-right : 10px;
  font-weight:900;
}
.button-container {
  display: flex; /* Use flexbox for layout */
  justify-content: center; /* Center buttons horizontally */
  margin-top: 20px; /* Space above the buttons */
}
.primary-button{
position: relative;
border: 2px solid white;
font-family: 'Nunito', sans-serif;
color: #AED6F1;
width: 150px;
height: 50px;
font-size: 1.5em;
border-radius: 15px;
margin: 0 10px;
transition: .3s;

}

.primary-button:hover{
border: 2px solid #2C3E50;
background-color:white;
cursor: pointer;
color: #AED6F1;
transition: .3s;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
strong {
  color:  #AED6F1;
}
    </style>
