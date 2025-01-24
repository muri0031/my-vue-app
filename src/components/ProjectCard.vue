
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
    display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack items vertically */
  justify-content: space-between; 
  }
  
  .project-card img {
    max-width: 100%;
    height: 200px; /* Fixed height for images */
    object-fit: cover;
    border-radius: 4px;
  }
  
  .project-card h3 {
    margin: 10px 0;
  }
  
  
.project-card p {
  color: rgba(255, 255, 255, 0.8); /* Description color */
  padding: 0 10px 10px; /* Padding for description */
  font-size: 1em; /* Description font size */
}

  .project-card a {
    text-decoration: none;
    color: #2C3E50;
  }
  
.project-link {
  display: inline-block; /* Make it a block element */
  padding: 10px 20px; /* Padding for the link */
  background-color: #AED6F1;
  color: #2C3E50; /* Button text color */
  text-decoration: none; /* Remove underline */
  border-radius: 4px; /* Rounded corners */
  transition: background-color 0.3s; /* Smooth hover effect */
  margin-top: 10px; /* Space above the link */
}

.project-link:hover {
  background-color: #2C3E50; /* Darker background on hover */
  color: white; /* Change text color on hover */
  transform: scale(1.05);
}
.project-link.clicked {
  color: #2C3E50;
}

  </style>