
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
        },
        {
          id: 'live-home',
          title: 'Live Home',
          description: 'A conceptual UX design project focusing on modern, user-friendly interfaces for a real estate platform.',
          image: '/livehome.png',
        },
     
      ],
      webProjects: [
        {
          id: 'seuss-treasury',
          title: 'Seuss Treassury',
          description: 'A React web app showcasing the best books of Dr. Seuss, with interactive features like book descriptions and quotes.',
          image: '/seuss.jpg',
        },
        {
          id: 'contact-book',
          title: 'Contact Book',
          description: 'A React app with Firebase integration for managing contact information. Features add, edit, and delete functionality.',
          image: '/contact.jpg',
          link: 'contactbookvue.netlify.app',
        },
        {
          id: 'movies-review',
          title: 'Movies Review',
          description: 'A dynamic website using Vue and Strapi to manage and display movie reviews with a seamless browsing experience.',
          image: '/MoviesReview.jpg',
         link: 'headlesscms-moviesreviews.netlify.app',
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
    
    h1 {
    text-align: center;
    color: #AED6F1; 
  font-size: 3em;
  margin-bottom: 20px; 
  }

    h2 {
  color: white; 
  font-size: 2em; 
  margin-bottom: 15px; 
}
  .work-page {
    padding: 20px;
    max-width: 1200px;
  margin: 0 auto; 
  color: white; 
  }
  section {
    margin: 40px 0;
    padding: 20px; 
  border-radius: 8px; 
  }

  .project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .project-card {
  margin: 10px;
  flex: 1 1 calc(30% - 20px); 
  max-width: 300px; 
  background-color: #34495E; 
  border-radius: 8px; 
  overflow: hidden; 
  transition: transform 0.3s,  box-shadow 0.3s;
}

.project-card:hover {
  transform: scale(1.05); 
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6);
}
.project-card img {
  width: 100%; 
}

.project-card h3 {
  color: #AED6F1; 
  padding: 10px; 
  font-size: 1.5em; 
}

.project-card p {
  color: rgba(255, 255, 255, 0.8); 
  padding: 0 10px 10px; 
  font-size: 1em; 
}

.project-card a {
  display: block; 
  text-align: center; 
  padding: 10px; 
  background-color: #AED6F1; 
  color: #2C3E50; 
  text-decoration: none; 
  border-radius: 0 0 8px 8px; 
  transition: background-color 0.3s; 
}


/*tablet*/
@media (max-width: 768px) {
  h1 {
    font-size: 2.5em; 
  }

  h2 {
    font-size: 1.8em; 
  }

  .project-card {
    flex: 1 1 calc(45% - 20px); 
    max-width: none; 
  }
}
/*mobile*/
@media (max-width: 480px) {
  h1 {
    font-size: 2em; 
  }

  h2 {
    font-size: 1.5em; 
  }

  .project-card {
    flex: 1 1 100%; 
    margin: 10px 0; 
  }
}

  </style>