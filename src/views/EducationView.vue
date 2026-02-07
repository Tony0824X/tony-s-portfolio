<template>
  <div class="education-view">
    <!-- Animated Background Blobs -->
    <div class="bg-blobs">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <div class="education-container">
      <div class="header-section" v-animate>
        <span class="badge-text">My Journey</span>
        <h2 class="section-title">Education</h2>
        <p class="section-subtitle">A timeline of my academic growth and achievements.</p>
      </div>

      <div class="timeline">
        <div class="timeline-line"></div>
        
        <div v-for="(edu, index) in educationList" 
             :key="edu.school" 
             class="timeline-item"
             :class="{ 'item-left': index % 2 === 0, 'item-right': index % 2 !== 0 }"
             v-animate="{ delay: index * 200 }">
          
          <div class="timeline-dot-wrapper">
            <div class="timeline-dot"></div>
          </div>

          <div class="edu-card">
            <div class="card-inner">
              <div class="card-header">
                <div class="edu-icon-container" :style="{ background: edu.iconBg }">
                  <component :is="edu.icon" />
                </div>
                <div class="header-text">
                  <p class="edu-period">{{ edu.period }}</p>
                  <h3 class="school-name">{{ edu.school }}</h3>
                </div>
              </div>
              
              <div class="card-body">
                <p class="edu-degree">{{ edu.degree }}</p>
                <div class="edu-details" v-if="edu.details">
                  <div v-for="detail in edu.details" :key="detail" class="detail-tag">
                    {{ detail }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h, onMounted } from 'vue'

// Custom Directives for Animations
const vAnimate = {
  mounted: (el, binding) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${binding.value?.delay || 0}ms`
    
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

const SchoolIcon = (color) => {
  return h('svg', { 
    width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', 
    stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' 
  }, [
    h('path', { d: 'M22 10v6M2 10l10-5 10 5-10 5z' }),
    h('path', { d: 'M6 12v5c3 3 9 3 12 0v-5' })
  ])
}

const educationList = [
  {
    school: "The University of Hong Kong",
    period: "2026 — 2027",
    degree: "Incoming MSc (Hons) in Computer Science",
    iconBg: "linear-gradient(135deg, #ef4444, #991b1b)",
    icon: () => SchoolIcon('#ef4444'),
    details: ["Artificial Intelligence", "Decentralized Technologies"]
  },
  {
    school: "Hong Kong Baptist University",
    period: "2024 — 2026",
    degree: "BSc (Hons) in Computer Science",
    iconBg: "linear-gradient(135deg, #3b82f6, #1e40af)",
    icon: () => SchoolIcon('#3b82f6'),
    details: [
      "GPA: 3.48 / 4.0",
      "Dean's List (2024-25)"
    ]
  },
  {
    school: "Hong Kong Institute of Vocational Education",
    period: "2022 — 2024",
    degree: "Higher Diploma in Software Engineering",
    iconBg: "linear-gradient(135deg, #10b981, #065f46)",
    icon: () => SchoolIcon('#10b981'),
    details: [
      "GPA: 3.87 / 4.0",
      "Distinction"
    ]
  }
]
</script>

<style scoped>
.education-view {
  min-height: 100vh;
  padding: 20px var(--spacing-6) 60px;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;
}

/* Background Blobs */
.bg-blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 20s infinite alternate;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: var(--color-primary);
  top: -100px;
  right: -50px;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: var(--color-secondary);
  bottom: -150px;
  left: -100px;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: #f472b6;
  top: 40%;
  left: 30%;
  animation-delay: -5s;
}

@keyframes float {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(40px, 60px) scale(1.1); }
}

.education-container {
  max-width: 1000px;
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
  padding: 6px 16px;
  background: white;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-4);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-4);
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 500px;
  margin: 0 auto;
}

/* Timeline */
.timeline {
  position: relative;
  padding: 10px 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--color-primary), var(--color-secondary), transparent);
  transform: translateX(-50%);
  opacity: 0.3;
}

.timeline-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  position: relative;
}

.timeline-dot-wrapper {
  position: absolute;
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  z-index: 2;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: white;
  border: 4px solid var(--color-primary);
  border-radius: 50%;
  box-shadow: 0 0 15px var(--color-primary);
}

.edu-card {
  width: 44%;
  position: relative;
}

.card-inner {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-6) var(--spacing-8);
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
  transition: all var(--transition-base);
  position: relative;
}

.card-inner::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.1));
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  pointer-events: none;
}

.timeline-item:hover .card-inner {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);
  background: rgba(255, 255, 255, 0.85);
  border-color: var(--color-primary-light);
}

.item-left .edu-card {
  margin-right: auto;
}

.item-right .edu-card {
  margin-left: auto;
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-3);
}

.edu-icon-container {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.edu-period {
  font-size: var(--font-size-xs);
  font-weight: 800;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
}

.school-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.edu-degree {
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-3);
}

.edu-details {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.detail-tag {
  padding: 4px 12px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .timeline-line {
    left: 30px;
  }
  
  .timeline-dot-wrapper {
    left: 30px;
  }
  
  .edu-card {
    width: calc(100% - 70px);
    margin-left: 70px !important;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
}
</style>
