<script> 
export default {
  name: 'About',
};
</script>

<template>
   <!-- Banner Section -->
   <div class="banner">
    <h1>Turning your ideas into code, no console errors included!</h1> 
  </div>
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

    <div class="button-container">
      <router-link to="/contact">
        <button class="primary-button">Contact Me</button>
      </router-link>
    </div>
  </div>

</template>

<style>

.banner {
  background-color: #AED6F1; 
  padding: 40px;
  text-align: center; 
  border-radius: 0; 
  margin: 20px 0;
  width: 100%;
  position: relative; 
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6);
}

.banner h1 {
  font-family: 'Nunito', sans-serif;
  font-size: 2.5em; 
  color: #2C3E50; 
  margin: 0; 
}
.about-container {
  max-width: 1000px; 
  margin: 0 auto; 
  padding: 20px; 
color: white;
}

.about-container h1{
  text-align:left;
  color:#AED6F1;
}



h2 {
  font-family: 'Nunito', sans-serif; 
  font-size: 1.8em; 
  color:white;
  text-align: left; 
  margin-bottom: 20px; 
}

.content-row {
  display: flex; 
  align-items: center; 
  margin-top: 20px; 
}

.text-content {
  flex: 1; 
  margin-right: 20px; 
}

.image-about {
  flex: 0 0 150px; 
}

.image-about img {
  width: 200%; 
  height: auto; 
  border-radius: 8px;
}

p {
  font-family: 'Inter', sans-serif; 
  font-size: 1.3em; 
  line-height: 1.6; 
  color:white; 
  margin-bottom: 15px; 
 
}

.lets-create{
  color:  #AED6F1;
  margin-right : 10px;
  font-weight:900;
}
.button-container {
  display: flex; 
  justify-content: center; 
  margin-top: 20px;
}
.primary-button{
position: relative;
font-family: 'Nunito', sans-serif;
color: #2C3E50;
width: 150px;
height: 50px;
font-size: 1.5em;
border-radius: 15px;
margin: 0 10px;
transition: .3s;
background-color: #AED6F1;
border: none; /* Add this line to remove the border */

}

.primary-button:hover{
background-color:#2C3E50;
cursor: pointer;
color:white;
transition: .3s;

}
strong {
  color:  #AED6F1;
}
    </style>
