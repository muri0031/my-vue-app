
<script>
export default {
  data() {
    return {
      project: null,
    };
  },
  created() {
    const projectId = this.$route.params.id; // Get the project ID from the route
    this.fetchProjectDetails(projectId);
  },
  methods: {
    fetchProjectDetails(id) {
      // Simulate fetching project details based on the ID
      const projects = [
        {
          id: 'my-portfolio',
          title: 'My Portfolio',
          description: 'My portfolio is a project I built from scratch! ✨ I started with research to understand my target audience and then picked the perfect colors and typography to match the vibe. I created mood boards, wireframes, and a prototype to plan everything out. Finally, I brought it to life using HTML, CSS, and JavaScript. It’s a space where I can showcase my work and creativity!',
          image: '/my-portfolio.jpg',
          link: 'https://link-to-projectA.com',
        },
        {
          id: 'live-home',
          title: 'Live Home',
          description: 'LiveHome was a team project where I played a key role in the initial stages. I conducted research, created problem statements, and developed personas to guide our design process. Later, I collaborated with my team on wireframes and prototypes to build the project. It was a great experience working together to create something meaningful!" 😊',
          image: 'path/to/imageB.jpg',
          link: 'https://link-to-projectB.com',
        },
        {
          id: 'seuss-treasury',
          title: 'Seuss Treasury',
          description: 'Welcome to the Seuss Treasury! I built this website with React, and it’s all about showcasing the best Dr. Seuss books. Using React Router, I created dynamic pages for each book, so you can explore descriptions and quotes effortlessly. The data is pulled from APIs, making the content interactive. It’s a fun way to dive into the magical world of Dr. Seuss😊',
          image: '/seuss.jpg',
          link: 'seusstreasury.netlify.app',
        },
        {
          id: 'contact-book',
          title: 'Contact Book',
          description: 'Check out my Contact Book app! 🌟 It is built with Vue and lets you easily add, edit, and delete contacts. All the contact info is stored using local storage, keeping it simple and accesible. I also used Vue Router to create dynamic pages that make the app smooth to navigate. It is simple, clean, and fun to use',
          image: '/contact.jpg',
          link: 'contactbookvue.netlify.app',
        },
        {
          id: 'movies-review',
          title: 'Movies Review',
          description: 'My Movies Review app is a two-part project! 🎬 For the front end, I used Vue to create a clean and responsive UI, and Vue Router to dynamically generate pages for each movie. On the back end, I used Strapi to manage all the movie data and reviews. It’s an interactive way to explore movies and their reviews!😊',
          image: '/MoviesReview.jpg',
          link: 'headlesscms-moviesreviews.netlify.app',
        },
      ];

      
      this.project = projects.find(project => project.id === id);
    },
  },
};
</script>


<template>
     
    <div class="project-detail-container">
        <div class="button-container">
          <router-link to="/work" class="go-back-button">Go Back</router-link>
        </div>
    <div class="project-detail">
      <div class="image-container"> 
        <img :src="project.image" alt="Project Image" />
      </div>
      <div class="description-container">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="view-project-button">View Project</a>
      </div>
    </div>
  </div>
  </template>

  
<style scoped>
.project-detail-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 100vh; /* Full height of the viewport */
  background: radial-gradient(circle, rgba(44, 62, 80, 0.8), rgba(0, 0, 0, 0.8)); /* Gradient background */
}

.project-detail {
  display: flex; /* Use flexbox for side-by-side layout */
  max-width: 1000px; /* Limit the width of the content */
  padding: 20px;
  color: white;
  /*background-color: rgba(44, 62, 80, 0.9);  Slightly more opaque background */
  border-radius: 12px; /* Rounded corners */
  align-items: center;
}

.image-container {
  flex: 2; /* Allow the image container to take up space */
  margin-right: 20px; /* Space between image and description */
  display: flex; /* Use flexbox for vertical alignment */
  flex-direction: column; /* Stack items vertically */
  justify-content: flex-start;
}

.image-container img {
  max-width: 100%; 
  border-radius: 8px; /* Rounded corners for images */
}

.description-container {
  flex: 1; /* Allow the description container to take up more space */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: flex-start; /* Center items vertically */
}

.button-container {
  margin-bottom: 20px; /* Space between the button and the image */
  align-self: flex-start;
}

.go-back-button {
  display: inline-block; /* Make it a block element */
  color: white; 
  text-decoration: none; 
  font-size: 1.3em; /* Font size */
}

.go-back-button:hover {
  color: white; /* Change text color on hover */
  transform: scale(1.05); /* Slightly scale up on hover */
}
.view-project-button {
  display: inline-block; /* Make it a block element */
  padding: 10px 20px; /* Padding for the button */
  background-color: #AED6F1; /* Button background color */
  color: #2C3E50; /* Button text color */
  text-decoration: none; /* Remove underline */
  border-radius: 8px; /* Rounded corners */
  font-size: 1.2em; /* Font size */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
}

.view-project-button:hover {
  background-color: #2C3E50; /* Darker background on hover */
  color: white; /* Change text color on hover */
  transform: scale(1.05); /* Slightly scale up on hover */
}
</style>