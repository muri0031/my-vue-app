
<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      uxProjects: [
        {
          id: 'my-portfolio',
          title: 'My Portfolio',
          description: 'Showcases my web design and development skills with a clean, responsive, and professional interface.',
          image: '/my-portfolio.jpg',
          link: 'https://link-to-projectA.com',
        },
        {
          id: 'live-home',
          title: 'Live Home',
          description: 'A conceptual UX design project focusing on modern, user-friendly interfaces for a real estate platform.',
          image: 'path/to/imageB.jpg',
          link: 'https://link-to-projectB.com',
        },
     
      ],
      webProjects: [
        {
          id: 'seuss-treasury',
          title: 'Seuss Treassury',
          description: 'A React web app showcasing the best books of Dr. Seuss, with interactive features like book descriptions and quotes.',
          image: '/seuss.jpg',
          link: 'https://link-to-projectC.com',
        },
        {
          id: 'contact-book',
          title: 'Contact Book',
          description: 'A React app with Firebase integration for managing contact information. Features add, edit, and delete functionality.',
          image: '/contact.jpg',
          link: 'https://link-to-projectD.com',
        },
        {
          id: 'movies-review',
          title: 'Movies Review',
          description: 'A dynamic website using Vue and Strapi to manage and display movie reviews with a seamless browsing experience.',
          image: '/MoviesReview.jpg',
          link: 'https://link-to-projectD.com',
        },

      ],
    };
  },
};
</script>


<template>
    <div class="work-page">
      <h1>My Work</h1>
      
      <section class="web-development">
      <h2>Web Development Projects</h2>
      <div class="project-list">
        <ProjectCard
          v-for="project in webProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>

    <section class="ux-design">
      <h2>UX Design Projects</h2>
      <div class="project-list">
        <ProjectCard
          v-for="project in uxProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>
  </div>
  </template>
  
  <style scoped>
  .work-page {
    padding: 20px;
    max-width: 1200px; /* Limit the width of the page */
  margin: 0 auto; /* Center the page */
  color: white; /* Text color */
  }
  
  h1 {
    text-align: center;
    color: #AED6F1; /* Heading color */
  font-size: 3em;
  margin-bottom: 20px; /* Space below the main heading */
  }
  
  section {
    margin: 40px 0;
    padding: 20px; /* Add padding to sections */
  border-radius: 8px; /* Rounded corners */
  }
  
  h2 {
  color: white; /* Section heading color */
  font-size: 2em; /* Font size for section headings */
  margin-bottom: 15px; /* Space below section headings */
}
  .project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .project-card {
  margin: 10px; /* Space between project cards */
  flex: 1 1 calc(30% - 20px); /* Responsive card width */
  max-width: 300px; /* Max width for project cards */
  background-color: #34495E; /* Card background color */
  border-radius: 8px; /* Rounded corners */
  overflow: hidden; /* Hide overflow */
  transition: transform 0.3s,  box-shadow 0.3s; /* Smooth hover effect */
}

.project-card:hover {
  transform: scale(1.05); /* Scale up on hover */
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6);
}
.project-card img {
  width: 100%; /* Full width for images height: auto; /* Maintain aspect ratio */
}

.project-card h3 {
  color: #AED6F1; /* Title color */
  padding: 10px; /* Padding for title */
  font-size: 1.5em; /* Title font size */
}

.project-card p {
  color: rgba(255, 255, 255, 0.8); /* Description color */
  padding: 0 10px 10px; /* Padding for description */
  font-size: 1em; /* Description font size */
}

.project-card a {
  display: block; /* Make link block-level */
  text-align: center; /* Center the link */
  padding: 10px; /* Padding for link */
  background-color: #AED6F1; /* Link background color */
  color: #2C3E50; /* Link text color */
  text-decoration: none; /* Remove underline */
  border-radius: 0 0 8px 8px; /* Rounded corners at the bottom */
  transition: background-color 0.3s; /* Smooth hover effect */
}



  </style>