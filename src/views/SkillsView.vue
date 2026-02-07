<template>
  <div class="skills-view">
    <!-- Background Elements -->
    <div class="bg-elements">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>
    </div>

    <div class="skills-container">
      <div class="header-section" v-animate>
        <span class="badge-text">Technical Proficiency</span>
        <h2 class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">A comprehensive overview of my technical stack and tools.</p>
      </div>

      <div class="skills-grid">
        <div v-for="(category, index) in skillCategories" 
             :key="category.name" 
             class="skill-card"
             v-animate="{ delay: index * 100 }">
          <div class="card-glass">
            <div class="card-header">
              <div class="icon-wrapper" :style="{ background: category.gradient }">
                <component :is="category.icon" />
              </div>
              <h3 class="category-title">{{ category.name }}</h3>
            </div>
            
            <div class="skills-list">
              <div v-for="skill in category.skills" 
                   :key="skill" 
                   class="skill-pill">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

// Custom Directives
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

// Icons
const CodeIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('polyline', { points: '16 18 22 12 16 6' }),
  h('polyline', { points: '8 6 2 12 8 18' })
])

const AppIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('rect', { x: 5, y: 2, width: 14, height: 20, rx: 2, ry: 2 }),
  h('line', { x1: 12, y1: 18, x2: 12.01, y2: 18 })
])

const DatabaseIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('ellipse', { cx: 12, cy: 5, rx: 9, ry: 3 }),
  h('path', { d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' }),
  h('path', { d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' })
])

const BrainIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z' }),
  h('path', { d: 'M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z' })
])

const CloudIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z' })
])

const DesignIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M12 19l7-7 3 3-7 7-3-3z' }),
  h('path', { d: 'M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z' }),
  h('path', { d: 'M2 2l7.586 7.586' }),
  h('circle', { cx: 11, cy: 11, r: 2 })
])

// Data
const skillCategories = [
  {
    name: "Web Development",
    icon: CodeIcon,
    gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "RESTful APIs"]
  },
  {
    name: "App Development",
    icon: AppIcon,
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    skills: ["SwiftUI", "Swift", "Xcode", "XML", "Java", "Kotlin", "Android Studio"]
  },
  {
    name: "Data Analysis",
    icon: DatabaseIcon,
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    skills: ["Power Query", "Python", "R", "SQL", "Tableau", "Power BI"]
  },
  {
    name: "AI Implementation",
    icon: BrainIcon,
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    skills: ["Prompt Engineering", "RAG", "LLM", "LangChain", "Vector Database", "OpenAI API"]
  },
  {
    name: "Cloud & DevOps",
    icon: CloudIcon,
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux", "Nginx"]
  },
  {
    name: "General & Design",
    icon: DesignIcon,
    gradient: "linear-gradient(135deg, #ec4899, #db2777)",
    skills: ["Excel", "Word", "PowerPoint", "UI/UX Design", "Figma", "Canva", "CapCut", "Git/GitHub"]
  }
]
</script>

<style scoped>
.skills-view {
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
  background: #3b82f6;
  top: -100px;
  left: -100px;
}

.glow-2 {
  background: #ec4899;
  bottom: -100px;
  right: -100px;
}

.glow-3 {
  background: #10b981;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header-section {
  text-align: center;
  margin-bottom: 40px;
}

.badge-text {
  display: inline-block;
  padding: 4px 14px;
  background: white;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  color: #0ea5e9;
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  padding: 10px 0;
}

.skill-card {
  height: 100%;
}

.card-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.4s ease;
  height: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.skill-card:hover .card-glass {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  border-color: white;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px -4px rgba(0,0,0,0.1);
}

.category-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1f2937;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-pill {
  padding: 6px 14px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #4b5563;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-pill:hover {
  background: white;
  color: #111827;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .section-title {
    font-size: 2.25rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .card-glass {
    padding: 1.5rem;
  }
}
</style>
