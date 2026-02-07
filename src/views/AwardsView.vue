<template>
  <div class="awards-view">
    <!-- Background Elements -->
    <div class="bg-elements">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
    </div>

    <div class="awards-container">
      <div class="header-section" v-animate>
        <span class="badge-text">Honor & Recognition</span>
        <h2 class="section-title">Awards & Scholarships</h2>
        <p class="section-subtitle">A collection of academic achievements and recognitions.</p>
      </div>

      <div class="awards-grid">
        <div v-for="(award, index) in awardsList" 
             :key="index" 
             class="award-card"
             v-animate="{ delay: index * 100 }"
             @click="openLightbox(award)">
          <div class="card-glass">
            <div class="image-wrapper">
              <img :src="award.image" :alt="award.title" class="award-image" />
              <div class="overlay">
                <span class="view-text">View Certificate</span>
              </div>
            </div>
            <div class="card-content">
              <div class="award-date">{{ award.date }}</div>
              <h3 class="award-title">{{ award.title }}</h3>
              <p class="award-issuer">{{ award.issuer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div v-if="selectedAward" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="close-btn" @click="closeLightbox">&times;</button>
          <img :src="selectedAward.image" :alt="selectedAward.title" class="lightbox-image" />
          <div class="lightbox-caption">
            <h3>{{ selectedAward.title }}</h3>
            <p>{{ selectedAward.issuer }} • {{ selectedAward.date }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import Images
import award1 from '../assets/award1.jpeg'
import award2 from '../assets/award2.jpeg'
import award3 from '../assets/award3.png'
import award4 from '../assets/award4.jpeg'
import award5 from '../assets/award5.jpeg'
import award6 from '../assets/award6.jpeg'
import award7 from '../assets/award7.jpeg'
import award8 from '../assets/award8.jpeg'

// Animation Directive
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

// State
const selectedAward = ref(null)

// Actions
const openLightbox = (award) => {
  selectedAward.value = award
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedAward.value = null
  document.body.style.overflow = ''
}

// Data
const awardsList = [
  {
    title: "Scholarship for Computer Science Non-JUPAS School Recommendation Scheme 2025/2026",
    issuer: "Hong Kong Baptist University",
    date: "Nov 2025",
    image: award1
  },
  {
    title: "Admission Scholarship Scheme for Outstanding Local Senior Year Entrants 2024/2025",
    issuer: "Hong Kong Baptist University",
    date: "Oct 2024",
    image: award2
  },
  {
    title: "Scholarship for Computer Science Non-JUPAS School Recommendation Scheme 2024/2025",
    issuer: "Hong Kong Baptist University",
    date: "Oct 2024",
    image: award3
  },
  {
    title: "Shun Shin Outstanding Leadership Scholarship",
    issuer: "Vocational Training Council",
    date: "Aug 2024",
    image: award4
  },
  {
    title: "HKSAR Government Scholarship AY2023/24 Reaching Out Award (ROA)",
    issuer: "Government of Hong Kong",
    date: "Jul 2024",
    image: award5
  },
  {
    title: "HKSAR Government Scholarship AY2023/24 Talent Development Scholarship (TDS)",
    issuer: "Government of Hong Kong",
    date: "Jun 2024",
    image: award6
  },
  {
    title: "Mr. K. S. Cheng Memorial Scholarship",
    issuer: "Vocational Training Council",
    date: "Mar 2024",
    image: award7
  },
  {
    title: "Li Po Chun Charitable Trust Fund Scholarships",
    issuer: "Vocational Training Council",
    date: "Feb 2024",
    image: award8
  }
]
</script>

<style scoped>
.awards-view {
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
  background: #f59e0b;
  top: -100px;
  right: -100px;
}

.glow-2 {
  background: #8b5cf6;
  bottom: -100px;
  left: -100px;
}

.awards-container {
  max-width: 1200px;
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
  color: #f59e0b;
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

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 20px 0;
}

.award-card {
  cursor: pointer;
}

.card-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 1.5rem;
  overflow: hidden;
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.award-card:hover .card-glass {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
}

.image-wrapper {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.award-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.award-card:hover .award-image {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.award-card:hover .overlay {
  opacity: 1;
}

.view-text {
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  border: 1px solid white;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.award-date {
  font-size: 0.75rem;
  font-weight: 700;
  color: #f59e0b;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.award-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
  line-height: 1.4;
  flex: 1;
}

.award-issuer {
  font-size: 0.9rem;
  color: #6b7280;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.lightbox-caption {
  margin-top: 20px;
  text-align: center;
  color: white;
}

.lightbox-caption h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.lightbox-caption p {
  color: rgba(255, 255, 255, 0.7);
}

.close-btn {
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.25rem;
  }
  
  .awards-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .close-btn {
    top: -40px;
    right: 0;
  }
}
</style>
