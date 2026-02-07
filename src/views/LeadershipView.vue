<template>
  <div class="leadership-view">
    <!-- Background Elements -->
    <div class="bg-elements">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <div class="content-container">
      <div class="header-section" v-animate>
        <span class="badge-text">Community & Impact</span>
        <h2 class="section-title">Leadership & Service</h2>
        <p class="section-subtitle">Leading initiatives and contributing to the tech community.</p>
      </div>

      <!-- VTC iOS Club Section -->
      <section class="activity-section" v-animate>
        <div class="content-wrapper">
          <div class="text-content">
            <h3 class="org-name">VTC iOS Club</h3>
            <div class="role-badge">Founder & Chairperson</div>
            <p class="description">
              As the founder and chairperson of the VTC iOS Club, I established a community for students passionate about Apple technologies. I organized workshops, hackathons, and guest lectures to foster learning and innovation within the campus.
            </p>
          </div>
          <div class="image-content">
            <div class="image-card" @click="openLightbox(vtcArgs)">
              <img :src="vtcImage" alt="VTC iOS Club" />
              <div class="overlay"><span class="view-btn">View Photo</span></div>
            </div>
          </div>
        </div>
      </section>

      <!-- HKIIT Section -->
      <section class="activity-section reverse" v-animate>
        <div class="content-wrapper">
          <div class="text-content">
            <h3 class="org-name">HKIIT</h3>
            <h4 class="sub-org">Hong Kong Institute of Information Technology</h4>
            <div class="role-badge">Student Representative</div>
            <p class="description">
              Represented the student body at the MOU Signing Ceremony. Contributed to strengthening industry partnerships and promoting vocational education in the IT sector.
            </p>
          </div>
          <div class="image-content">
            <div class="image-card" @click="openLightbox(hkiitArgs)">
              <img :src="hkiitImage" alt="HKIIT MOU Signing" />
              <div class="overlay"><span class="view-btn">View Photo</span></div>
            </div>
          </div>
        </div>
      </section>

      <!-- HKACE Section -->
      <section class="activity-section" v-animate>
        <div class="section-header">
          <h3 class="org-name">HKACE</h3>
          <h4 class="sub-org">Hong Kong Association for Computer Education</h4>
          <p class="section-desc">Supporting computer education initiatives and volunteering at key industry events.</p>
        </div>
        <div class="gallery-grid">
          <div v-for="(img, index) in hkaceImages" 
               :key="index" 
               class="gallery-item"
               @click="openLightbox({ image: img, title: 'HKACE Activity', desc: 'Volunteering and Event Support' })">
            <img :src="img" alt="HKACE Activity" />
            <div class="overlay"><span class="view-btn">View</span></div>
          </div>
        </div>
      </section>

      <!-- HKCERI Section -->
      <section class="activity-section" v-animate>
        <div class="section-header">
          <h3 class="org-name">HKCERI</h3>
          <h4 class="sub-org">Hong Kong Centre for Educational Research and Innovation</h4>
          <p class="section-desc">Participating in educational research seminars and contributing to innovative learning methodologies.</p>
        </div>
        <div class="gallery-grid four-cols">
          <div v-for="(img, index) in hkceriImages" 
               :key="index" 
               class="gallery-item"
               @click="openLightbox({ image: img, title: 'HKCERI Event', desc: 'Educational Research & Innovation' })">
            <img :src="img" alt="HKCERI Activity" />
            <div class="overlay"><span class="view-btn">View</span></div>
          </div>
        </div>
      </section>
    </div>

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="selectedItem" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="close-btn" @click="closeLightbox">&times;</button>
          <img :src="selectedItem.image" :alt="selectedItem.title" />
          <div class="caption">
            <h3>{{ selectedItem.title }}</h3>
            <p>{{ selectedItem.desc }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import Images
import vtcImg from '../assets/leadership/VTCiOSClub_CharFounder1.png'
import hkiitImg from '../assets/leadership/LPS–HKIIT_MOU1.png'
import hkace1 from '../assets/leadership/HKACE1.jpeg'
import hkace2 from '../assets/leadership/HKACE2.jpeg'
import hkace3 from '../assets/leadership/HKACE3.jpeg'
import hkceri1 from '../assets/leadership/HKCERI1.jpeg'
import hkceri2 from '../assets/leadership/HKCERI2.jpeg'
import hkceri3 from '../assets/leadership/HKCERI3.jpeg'
import hkceri4 from '../assets/leadership/HKCERI4.jpeg'

const vtcImage = vtcImg
const hkiitImage = hkiitImg
const hkaceImages = [hkace1, hkace2, hkace3]
const hkceriImages = [hkceri1, hkceri2, hkceri3, hkceri4]

const vtcArgs = { image: vtcImg, title: 'VTC iOS Club', desc: 'Founder & Chairperson' }
const hkiitArgs = { image: hkiitImg, title: 'HKIIT MOU Signing', desc: 'Student Representative' }

const selectedItem = ref(null)

const openLightbox = (item) => {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedItem.value = null
  document.body.style.overflow = ''
}

const vAnimate = {
  mounted: (el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.15 })
    
    observer.observe(el)
  }
}
</script>

<style scoped>
.leadership-view {
  min-height: 100vh;
  padding: 40px var(--spacing-6) 100px;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;
}

.bg-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.1;
}

.blob-1 { width: 400px; height: 400px; background: #3b82f6; top: -100px; right: -100px; }
.blob-2 { width: 500px; height: 500px; background: #ec4899; bottom: 10%; left: -100px; }
.blob-3 { width: 300px; height: 300px; background: #10b981; top: 40%; right: 20%; animation: float 10s infinite alternate; }

@keyframes float {
  from { transform: translateY(0); }
  to { transform: translateY(40px); }
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header-section {
  text-align: center;
  margin-bottom: 80px;
}

.badge-text {
  display: inline-block;
  padding: 6px 16px;
  background: white;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #6366f1;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.1);
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #1e293b;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #64748b;
}

.activity-section {
  margin-bottom: 100px;
}

.content-wrapper {
  display: flex;
  align-items: center;
  gap: 60px;
}

.reverse .content-wrapper {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

.image-content {
  flex: 1;
}

.org-name {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
  line-height: 1;
}

.sub-org {
  font-size: 1.1rem;
  font-weight: 500;
  color: #475569;
  margin-bottom: 16px;
}

.role-badge {
  display: inline-block;
  padding: 6px 14px;
  background: #eff6ff;
  color: #2563eb;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 8px;
  margin-bottom: 24px;
}

.description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #334155;
}

.image-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
  cursor: pointer;
  position: relative;
  aspect-ratio: 16/10;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.image-card:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-card:hover .overlay,
.gallery-item:hover .overlay {
  opacity: 1;
}

.view-btn {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(4px);
  color: white;
  padding: 8px 20px;
  border-radius: 30px;
  border: 1px solid white;
  font-weight: 600;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.section-desc {
  font-size: 1.1rem;
  color: #64748b;
  margin-top: 10px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.four-cols {
  grid-template-columns: repeat(2, 1fr);
}

.gallery-item {
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 4/3;
  position: relative;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.95);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 4px;
  box-shadow: 0 0 50px rgba(0,0,0,0.5);
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
}

.caption {
  text-align: center;
  color: white;
  margin-top: 20px;
}

.caption h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.caption p {
  color: #94a3b8;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .section-title { font-size: 2.5rem; }
  .content-wrapper { flex-direction: column !important; gap: 30px; }
  .gallery-grid { grid-template-columns: 1fr; }
  .four-cols { grid-template-columns: 1fr; }
}
</style>
