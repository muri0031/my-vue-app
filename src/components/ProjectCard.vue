
<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<template>
    <div class="project-card">
      <img :src="project.image" alt="Project Image" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <router-link :to="`/projects/${project.id}`" class="project-link">View Project</router-link>
    </div>
  </template>
  
  
  <style scoped>
  .project-card {
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    display: flex; 
  flex-direction: column;
  justify-content: space-between; 
  }
  
  .project-card img {
    max-width: 100%;
    height: 200px; 
    object-fit: cover;
    border-radius: 4px;
  }
  
  .project-card h3 {
    margin: 10px 0;
  }
  
  
.project-card p {
  color: rgba(255, 255, 255, 0.8); 
  padding: 0 10px 10px; 
  font-size: 1em; 
}

  .project-card a {
    text-decoration: none;
    color: #2C3E50;
  }
  
.project-link {
  display: inline-block; 
  padding: 10px 20px; 
  background-color: #AED6F1;
  color: #2C3E50;
  text-decoration: none; 
  border-radius: 4px; 
  transition: background-color 0.3s; 
  margin-top: 10px; 
  font-weight: 400;
}

.project-link:hover {
  background-color: #2C3E50;
color:white;
box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6);
}
.project-link.clicked {
  color: #2C3E50;
}
  </style>