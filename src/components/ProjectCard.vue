
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
  }
  
  .project-card img {
    max-width: 100%;
    border-radius: 4px;
  }
  
  .project-card h3 {
    margin: 10px 0;
  }
  
  .project-card a {
    text-decoration: none;
    color: #007bff;
  }
  </style>