<template>
  <div class="work-view">
    <!-- Background Elements -->
    <div class="bg-elements">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
    </div>

    <div class="work-container">
      <div class="header-section" v-animate>
        <span class="badge-text">Professional Experience</span>
        <h2 class="section-title">Work History</h2>
        <p class="section-subtitle">A showcase of my journey in software engineering and education.</p>
      </div>

      <div class="work-grid">
        <div v-for="(job, index) in workExperience" 
             :key="job.company" 
             class="work-card"
             v-animate="{ delay: index * 150 }">
          <div class="card-glass">
            <div class="card-header">
              <div class="company-logo">
                <img :src="job.logo" :alt="job.company" class="logo-image" />
              </div>
              <div class="header-info">
                <h3 class="company-name">{{ job.company }}</h3>
                <p class="job-role">{{ job.role }}</p>
              </div>
              <div class="job-period">{{ job.period }}</div>
            </div>
            
            <div class="card-body">
              <ul class="task-list">
                <li v-for="(task, tIndex) in job.tasks" :key="tIndex">
                  <span class="bullet" :style="{ color: job.color }">✦</span>
                  <p>{{ task }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import we1 from '../assets/we1.png'
import we2 from '../assets/we2.png'
import we3 from '../assets/we3.png'
import we4 from '../assets/we4.png'

const vAnimate = {
  mounted: (el, binding) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${binding.value?.delay || 0}ms`
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })
    
    observer.observe(el)
  }
}

const workExperience = [
  {
    company: "Composers and Authors Society of Hong Kong Limited",
    role: "Summer Intern - Documentation & Distribution Department",
    period: "Jun. 2025 — Aug. 2025",
    color: "#4f46e5",
    logo: we1,
    tasks: [
      "Collaborated with the head to develop a Python program, automating the scraping of music event listings and song information from LCSD and Spotify, enhancing team efficiency by 20%.",
      "Partnered with a manager to build an Excel Power Query (M) solution that calls the ChatGPT API to automatically clean and structure data, reducing processing time by up to 90%.",
      "Maintained 3,000+ musical-work records, performed data analysis using PivotTables, and assisted internal reviews with interactive dashboards."
    ]
  },
  {
    company: "Coding101",
    role: "Part-Time STEAM Tutor",
    period: "Oct. 2023 — May 2025",
    color: "#f59e0b",
    logo: we2,
    tasks: [
      "Taught foundational programming knowledge (Python, IoT, AI, SQL, RESTful APIs, Scratch) at 6 secondary and 2 primary schools.",
      "Led students in completing in-class labs to reinforce concepts and monitored student progress for effective delivery."
    ]
  },
  {
    company: "Businesspro Service Limited",
    role: "Part-Time STEAM Tutor",
    period: "Oct. 2023 — Feb. 2024",
    color: "#10b981",
    logo: we3,
    tasks: [
      "Taught coding concepts and IoT at 2 primary schools.",
      "Led a Matatalab robotics course for 20+ students, with 2 students earning Merit Awards in coding competitions."
    ]
  },
  {
    company: "Acao (HK) Limited",
    role: "Part-Time Software Engineer Intern",
    period: "Mar. 2023 — Dec. 2023",
    color: "#ec4899",
    logo: we4,
    tasks: [
      "Collaborated on a team of four to develop a Java-based Android app with AI features (RAG, AI prompt design), focusing on full-stack development.",
      "Provided on-site IT support at 5+ retail offices, including Windows system setup and network troubleshooting."
    ]
  }
]
</script>

<style scoped>
.work-view {
  min-height: 100vh;
  padding: 20px var(--spacing-6) 60px;
  background-color: #f9fafb;
  position: relative;
  overflow: hidden;
}

.bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.08;
}

.glow-1 {
  background: #6366f1;
  top: -100px;
  left: -100px;
}

.glow-2 {
  background: #ec4899;
  bottom: -100px;
  right: -100px;
}

.work-container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header-section {
  text-align: center;
  margin-bottom: 20px;
}

.badge-text {
  display: inline-block;
  padding: 4px 14px;
  background: white;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-3);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.section-title {
  font-size: 3rem;
  font-weight: 900;
  color: #111827;
  margin-bottom: var(--spacing-2);
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
}

.work-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.work-card {
  width: 100%;
}

.card-glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 1.5rem;
  padding: 1.5rem 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.work-card:hover .card-glass {
  transform: scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
  background: rgba(255, 255, 255, 0.8);
  border-color: white;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.company-logo {
  width: 60px;
  height: 60px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.05);
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-info {
  flex: 1;
  min-width: 250px;
}

.company-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.2;
}

.job-role {
  font-size: 1rem;
  font-weight: 600;
  color: #4b5563;
  margin-top: 0.25rem;
}

.job-period {
  font-size: 0.875rem;
  font-weight: 700;
  color: #374151;
  background: rgba(0, 0, 0, 0.05);
  padding: 6px 14px;
  border-radius: var(--radius-full);
}

.task-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-list li {
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
}

.bullet {
  font-size: 0.75rem;
  margin-top: 0.3rem;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .section-title {
    font-size: 2.25rem;
  }
  
  .card-glass {
    padding: 1.5rem;
  }
  
  .job-period {
    width: 100%;
    text-align: center;
    order: -1;
    margin-bottom: 1rem;
  }
}
</style>
