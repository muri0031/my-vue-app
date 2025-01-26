
<script>
export default {
  data() {
    return {
      project: null,
    };
  },
  created() {
    const projectId = this.$route.params.id; 
    this.fetchProjectDetails(projectId);
  },
  methods: {
    fetchProjectDetails(id) {
    
      const projects = [
       {
        id: 'my-portfolio',
      title: 'My Portfolio',
      description: 'My portfolio is a project I built from scratch! ✨ I started with research to understand my target audience and then picked the perfect colors and typography to match the vibe. I created mood boards, wireframes, and a prototype to plan everything out. Finally, I brought it to life using HTML, CSS, and JavaScript. It’s a space where I can showcase my work and creativity!',
      image: '/my-portfolio.jpg',
      link: 'https://www.figma.com/design/or85Fy6cqOvEy4vueyPELV/Live-home-hi-fi-mobile?node-id=202-3957&t=gD5ktCCAuF0pxwiL-1',
      caseStudy: {
        projectOverview: "To create a portfolio that effectively showcases my skills and attracts diverse audiences, I followed a structured process. This included conducting in-depth research, developing audience personas, creating a moodboard, and drafting a creative brief. These steps helped me define the goals and tone of my portfolio while ensuring it resonates with potential employers, freelance clients, and collaborators.",
        audienceResearch: [
          {
            audience: "Main Audience: Companies & Employers",
            details: {
              ages: "25-50",
              jobs: "Hiring managers, HR professionals, team leads",
              education: "College or university graduates with tech, business, or design backgrounds",
              values: "Creativity, efficiency, and innovation"
            }
          },
          {
            audience: "Second Audience: Freelancers & Small Business Owners",
            details: {
              ages: "25-50",
              jobs: "Entrepreneurs, start-up founders, and small business owners",
              education: "College-educated, many with business backgrounds",
              values: "Affordability, flexibility, and creativity",
              goals: "Building an online presence that fits their brand and supports growth"
            }
          },
          {
            audience: "Third Audience: Collaborators & Creatives",
            details: {
              ages: "20-45",
              jobs: "Web designers, developers, UI/UX designers",
              education: "Degrees in tech or design fields",
              values: "Collaboration, creativity, and innovation",
              goals: "Connecting, working on exciting projects, and sharing inspiration"
            }
          }
        ],
        personas: [
          {
            persona: "Persona 1",
            description: "Hiring manager seeking a reliable designer to build engaging websites for their company’s brand."
          },
          {
            persona: "Persona 2",
            description: "Small business owner needing an affordable yet professional online presence."
          },
          {
            persona: "Persona 3",
            description: "Developer looking for collaboration opportunities to create innovative projects."
          }
        ],
        creativeBrief: {
          keyMessage: "Need a website that stands out? I’m here to help you build or improve your site, making it functional, beautiful, and attention-grabbing. Whether it’s for a small project or a big team, I’ll make sure it fits your needs perfectly.",
          tone: "Casual yet professional to make the portfolio relatable to all audiences.",
          goals: "Showcase my skills and experience while providing clear pathways for potential clients or collaborators to connect with me.",
          images: {
            creativeBrief1: '/creativebriefp.jpg',
            creativeBrief2: '/creativebrief2p.jpg',
            persona1: '/persona1p.jpg',
            persona2: '/persona2p.jpg',
            persona3: '/persona3p.jpg',
        }
        },
        results: "By following this process, I built a portfolio that speaks directly to each audience’s needs. It highlights my skills in web design and development and positions me as a creative and reliable professional ready to deliver quality results."
      }
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


      <!----------------------------LiveHome page ---------------------------->
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


    
    <!---------------------------------------My Portfolio page ------------------------------>
<div v-if="project.id === 'my-portfolio'" class="case-study">
  <h2>Case Study Details</h2>
  
  <h3>Project Overview</h3>
  <p>{{ project.caseStudy.projectOverview }}</p>
  
  <h3>Audience Research</h3>
  <table class="audience-research-table">
    <thead>
      <tr>
        <th>Audience</th>
        <th>Ages</th>
        <th>Jobs</th>
        <th>Education</th>
        <th>Values</th>
        <th>Goals</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="audience in project.caseStudy.audienceResearch" :key="audience.audience">
        <td>{{ audience.audience }}</td>
        <td>{{ audience.details.ages }}</td>
        <td>{{ audience.details.jobs }}</td>
        <td>{{ audience.details.education }}</td>
        <td>{{ audience.details.values }}</td>
        <td v-if="audience.details.goals">{{ audience.details.goals }}</td>
        <td v-else>-</td>
      </tr>
    </tbody>
  </table>
  
  <h3 class="headingh">Personas</h3>
  <div class="personas-container">
  <div class="persona-column" v-for="persona in project.caseStudy.personas" :key="persona.persona">
    <h4>{{ persona.persona }}</h4>
    <p>{{ persona.description }}</p>
  </div>
</div>
  <div class="images-container">
    <img :src="project.caseStudy.creativeBrief.images.persona1" alt="Persona 1 Image" class="case-study-image" />
    <img :src="project.caseStudy.creativeBrief.images.persona2" alt="Persona 2 Image" class="case-study-image" />
    <img :src="project.caseStudy.creativeBrief.images.persona3" alt="Persona 3 Image" class="case-study-image" />
  </div>

  
  <h3 class="headingh">Creative Brief</h3>
  <table class="creative-brief-table">
  <thead>
    <tr>
      <th>Key Message</th>
      <th>Tone</th>
      <th>Goals</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ project.caseStudy.creativeBrief.keyMessage }}</td>
      <td>{{ project.caseStudy.creativeBrief.tone }}</td>
      <td>{{ project.caseStudy.creativeBrief.goals }}</td>
    </tr>
  </tbody>
</table>
<div class="images-container">
    <img :src="project.caseStudy.creativeBrief.images.creativeBrief1" alt="Creative Brief Image 1" class="case-study-image" />
    <img :src="project.caseStudy.creativeBrief.images.creativeBrief2" alt="Creative Brief Image 2" class="case-study-image" />
  </div>
  <h3 class="headingh">Results</h3>
  <p class="final">{{ project.caseStudy.results }}</p>
  </div>
  </template>

  
<style scoped>
/*general*/
h3{
    color: #AED6F1;
    text-align: center;
    font-size: 1.5em;
}
h2{
    text-align: center;
}
.project-detail-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  min-height: 100vh; 
  background: radial-gradient(circle, rgba(44, 62, 80, 0.8), rgba(0, 0, 0, 0.8)); /* Gradient background */
}

.project-detail {
  display: flex; 
  max-width: 1000px; 
  padding: 20px;
  color: white;
  border-radius: 12px;
  align-items: center;
}
.description-container {
  flex: 1; 
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
}

.button-container {
  margin-bottom: 20px; 
  align-self: flex-start;
}

/*go back button*/
.go-back-button {
  display: inline-block; 
  color: white; 
  text-decoration: none; 
  font-size: 1.3em; 
  padding: 0px 10px; 
  background-color: #2C3E50; 
  border-radius: 8px; 
  transition: background-color 0.3s, transform 0.3s; 
  box-shadow: 0 0 10px rgba(174, 214, 241, 0.5); 
}

.go-back-button:hover {
  background-color: #AED6F1; 
  color: #2C3E50; 
  transform: scale(1.05); 
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6);
}

/*view project button*/
.view-project-button {
  display: inline-block; 
  padding: 10px 20px; 
  background-color: #AED6F1; 
  color: #2C3E50; 
  text-decoration: none; 
  border-radius: 8px; 
  font-size: 1.2em; 
  transition: background-color 0.3s, transform 0.3s; 
  font-weight:400;
  text-align: center;
}

.view-project-button:hover {
  background-color: #2C3E50; 
  color: white; 
  transform: scale(1.05); 
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6);
}

/*****************************live home page************************/
.case-study{
    width: 80%;
    margin-left:15%;
}
.case-study-image {
  width: 200px; 
  height: auto; 
  border-radius: 8px; 
  margin: 10px; 
  object-fit: cover; 
}


.images-container {
  width: 80%; 
  margin: 20px auto; 
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  flex: 2; 
  margin-right: 20px; 
  flex-direction: column; 
  justify-content: flex-start;
  margin-left: 15%; 
  margin-top: 20px; 
  color: white; 
  text-align: center; 
}

.image-container img {
  max-width: 100%; 
  border-radius: 8px; 
  margin-top: 10px; 
}

/*personas*/
.headingh{
    margin-top: 70px;
}
.persona-images {
  justify-content: center; 
  margin-bottom: 20px;
  margin-bottom: 20px;
}

.persona-images img {
  width: 200px; 
  height: 400;
  border-radius: 8px; 
  object-fit: cover; 
  margin: 0 10px; 
}

/************************My portfolio page*************************************/
/*personas*/
.personas-container {
  display: flex; 
  justify-content: space-between; 
  flex-wrap: wrap; 
  margin: 20px 0; 
}

.persona-column {
  flex: 1; 
  min-width: 200px; 
  margin: 10px; 
  background-color: rgba(44, 62, 80, 0.9); 
  border-radius: 8px; 
  padding: 15px;
  box-shadow: 0 0 10px rgba(174, 214, 241, 0.5); 
  color: white; 
}

/*audience*/
.audience-research-table {
  width: 100%; 
  border-collapse: collapse; 
  margin: 20px 0; 
  color: white; 
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6); /* Box shadow */
  border-radius: 8px; 
  overflow: hidden; 
}

.audience-research-table th,
.audience-research-table td {
  border: 1px solid  #2C3E50; 
  padding: 10px; 
  text-align: left; 
}

.audience-research-table th {
  background-color:  #AED6F1; 
  color: #2C3E50; 
}

.audience-research-table tr:nth-child(even) {
  background-color: rgba(174, 214, 241, 0.1); 
}

.audience-research-table tr:hover {
  background-color: rgba(174, 214, 241, 0.3);
}

/*creative brief*/
.creative-brief-table {
  width: 100%; 
  border-collapse: collapse; 
  margin: 20px 0; 
  color: white; 
  box-shadow: 0 0 20px rgba(174, 214, 241, 0.8), 0 0 40px rgba(174, 214, 241, 0.6); /* Box shadow */
  border-radius: 8px; 
  overflow: hidden; 
}

.creative-brief-table th,
.creative-brief-table td {
  border: 1px solid #2C3E50; 
  padding: 10px; 
  text-align: left; 
}

.creative-brief-table th {
  background-color: #AED6F1; 
  color: #2C3E50; 
}

.creative-brief-table tr:nth-child(even) {
  background-color: rgba(174, 214, 241, 0.1); 
}

.creative-brief-table tr:hover {
  background-color: rgba(174, 214, 241, 0.3); 
}

.final{
    margin-bottom: 70px;
}


/*tablet*/
@media (max-width: 768px) {
    /*general*/
  .project-detail {
    flex-direction: column; 
    padding: 10px; 
  }

  .image-container {
    margin-right: 0; 
    margin-bottom: 20px; 
  }

  .description-container {
    text-align: center; 
  }
  .go-back-button {
    display: none; 
  }
  .go-back-button, .view-project-button {
    font-size: 1em; 
  }
/**************************************Live Home Page************************** */
  .persona-images {
    flex-direction: column; 
    align-items: center; 
  }

  .persona-images img {
    margin: 10px 0; 
    width: 80%; 
  }
 
  .case-study-image {
    width: 100%; 
    margin: 10px 0; 
  }

  /*********************************portfolio page***********************************/
  .personas-container {
    flex-direction: column; 
  }
  .creative-brief-table {
    font-size: 0.9em; 
  }
}

@media (max-width: 480px) {
  .go-back-button, .view-project-button {
    font-size: 0.9em; 
  }

  .case-study {
    width: 90%; 
    margin-left: 5%; 
  }

  .images-container {
    width: 90%; 
    margin-left: 5%; 
  }
}


</style>