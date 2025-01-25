
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
          link: 'https://https://www.figma.com/design/or85Fy6cqOvEy4vueyPELV/Live-home-hi-fi-mobile?node-id=202-3957&t=gD5ktCCAuF0pxwiL-1',
        },
        {
          id: 'live-home',
          title: 'Live Home',
          description: 'LiveHome was a team project where I played a key role in the initial stages. I conducted research, created problem statements, and developed personas to guide our design process. Later, I collaborated with my team on wireframes and prototypes to build the project. It was a great experience working together to create something meaningful!" 😊',
          image: '/livehome.png',
          link: 'https://www.figma.com/design/or85Fy6cqOvEy4vueyPELV/Live-home-hi-fi-mobile?node-id=202-3957&t=gD5ktCCAuF0pxwiL-1',
          caseStudy: {
            purpose: "The goal of LiveHome is to design an app interface that lets homeowners monitor and manage their IoT devices remotely. This will help them increase their home’s security, efficiency, and convenience, giving them peace of mind and better control over their living spaces.",
            timeline: "The project ran from May 29th to August 14th, spanning Weeks 4 to 15 of our class schedule.",
            targetMarket: "Homeowners who want better control and security, landlords/tenants managing shared spaces, and small businesses looking to monitor their properties remotely.",
            userBenefits: [
              "Increased Security Monitoring: Keep an eye on your property from anywhere.",
              "Flexibility: Control devices remotely.",
              "Convenience: Manage everything from one app.",
              "Peace of Mind: Notifications and alarms alert you to potential problems."
            ],
            keyMessage: "Stay connected to your home from anywhere, ensuring security, efficiency, and peace of mind with our intuitive IoT interface.",
            uniqueSellingPoint: "LiveHome stands out by offering real-time monitoring and diagnostics of your home’s critical systems and structures, along with personalized maintenance recommendations and predictive alerts.",
            problemStatement: {
              affected: "Homeowners, tenants, and landlords.",
              problem: "They want real-time supervision of their properties.",
              location: "Over their property.",
              when: "When they’re away.",
              importance: "Unsupervised properties can attract burglars or face preventable issues.",
              finalStatement: "Homeowners, tenants, and landlords worry about problems that can happen when they’re not at home. These issues include open doors, stoves left on, and lights left on, which can damage the property. Disturbances in shared areas like parking lots and hallways also cause concern. Everyone needs a way to monitor their properties in real-time to identify and fix issues quickly when they’re not present."
            },
            images: {
              persona1: '/persona1live.jpg',
              persona2: '/persona2live.jpg',
              persona3: '/persona3live.jpg',
              moodboard: '/moodboardlive.jpg',
              appFlow: '/appflowlive.jpg'
            }
          }
        },
        {
          id: 'seuss-treasury',
          title: 'Seuss Treasury',
          description: 'Welcome to the Seuss Treasury! I built this website with React, and it’s all about showcasing the best Dr. Seuss books. Using React Router, I created dynamic pages for each book, so you can explore descriptions and quotes effortlessly. The data is pulled from APIs, making the content interactive. It’s a fun way to dive into the magical world of Dr. Seuss😊',
          image: '/seuss.jpg',
          link: 'https://seusstreasury.netlify.app', 
        },
        {
          id: 'contact-book',
          title: 'Contact Book',
          description: 'Check out my Contact Book app! 🌟 It is built with Vue and lets you easily add, edit, and delete contacts. All the contact info is stored using local storage, keeping it simple and accesible. I also used Vue Router to create dynamic pages that make the app smooth to navigate. It is simple, clean, and fun to use',
          image: '/contact.jpg',
          link: 'https://contactbookvue.netlify.app', 
        },
        {
          id: 'movies-review',
          title: 'Movies Review',
          description: 'My Movies Review app is a two-part project! 🎬 For the front end, I used Vue to create a clean and responsive UI, and Vue Router to dynamically generate pages for each movie. On the back end, I used Strapi to manage all the movie data and reviews. It’s an interactive way to explore movies and their reviews!😊',
          image: '/MoviesReview.jpg',
          link: 'https://headlesscms-moviesreviews.netlify.app',
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
      <!-- Case Study Section for LiveHome -->
      <div v-if="project.id === 'live-home'" class="case-study">
        <h2>Case Study Details</h2>
        <h3>Purpose of the Project</h3>
        <p>{{ project.caseStudy.purpose }}</p>
        
        <h3>Project Timeline</h3>
        <p>{{ project.caseStudy.timeline }}</p>
        
        <h3>Target Market</h3>
        <p>{{ project.caseStudy.targetMarket }}</p>
        
        <h3>User Benefits</h3>
        <ul>
          <li v-for="benefit in project.caseStudy.userBenefits" :key="benefit">{{ benefit }}</li>
        </ul>
        
        <h3>Key Message</h3>
        <p>{{ project.caseStudy.keyMessage }}</p>
        
        <h3>Unique Selling Point (USP)</h3>
        <p>{{ project.caseStudy.uniqueSellingPoint }}</p>
        <h3>Problem Statement</h3>
    <p>{{ project.caseStudy.problemStatement.finalStatement }}</p>
      </div>
       <!-- Display Images for Personas and Moodboard -->
    <div v-if="project.id === 'live-home'" class="images-container">
      <h2>Personas</h2>
      <div class="persona-images">
        <img :src="project.caseStudy.images.persona1" alt="Persona 1" />
        <img :src="project.caseStudy.images.persona2" alt="Persona 2" />
        <img :src="project.caseStudy.images.persona3" alt="Persona 3" />
      </div>
      <h2>Moodboard</h2>
      <img :src="project.caseStudy.images.moodboard" alt="Moodboard" />
      <h2>App Flow</h2>
      <img :src="project.caseStudy.images.appFlow" alt="App Flow" />
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
  font-weight:400;
  text-align: center;
}

.view-project-button:hover {
  background-color: #2C3E50; /* Darker background on hover */
  color: white; /* Change text color on hover */
  transform: scale(1.05); /* Slightly scale up on hover */
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6);
}
.case-study{
    width: 80%;
    margin-left:15%;
}

h3{
    color: #AED6F1;
}
h2{
    text-align: center;
}

.images-container{
    width:80%;
}
.images-container {
  width:70%; 
  margin-left: 15%; /* Center the images section */
  margin-top: 20px; /* Space above the images section */
  color: white; /* Text color */
  text-align: center; /* Center text */
}

.persona-images {
  justify-content: center; /* Center the images */
  margin-bottom: 20px; /* Space below the persona images */
  margin-bottom: 20px;
}

.persona-images img {
    width: 200px; /* Set a fixed width for persona images */
    height: 400;
  border-radius: 8px; /* Rounded corners for images */
  object-fit: cover; /* Maintain aspect ratio while filling the box */
  margin: 0 10px; /* Space between images */
}

.images-container img {
  width: 100%; /* Full width for moodboard and app flow images */
  border-radius: 8px; /* Rounded corners for images */
  margin-top: 10px; /* Space above the images */
}




</style>