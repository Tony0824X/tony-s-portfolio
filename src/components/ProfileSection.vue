<template>
  <section class="profile-section">
    <div class="profile-container">
      <!-- Profile Image -->
      <div class="profile-image-wrapper">
        <img src="../assets/profile.png" alt="Irene Brooks" class="profile-image" />
      </div>
      
      <!-- Profile Info -->
      <div class="profile-info">
        <div class="profile-header">
          <h1 class="profile-name">HO Chun Chit, Tony</h1>
        </div>
        
        <p class="profile-title">HKU MSc 27'<br>Full Stack Software Engineer</p>
        
        <div class="social-icons">
          <!-- Gmail -->
          <a href="#" @click.prevent="copyToClipboard('tony030824@gmail.com', 'email')" class="social-icon" aria-label="Email" :data-tooltip="emailTooltip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <!-- Phone -->
          <a href="#" @click.prevent="copyToClipboard('+852 54819060', 'phone')" class="social-icon" aria-label="Phone" :data-tooltip="phoneTooltip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/hochunchit" target="_blank" class="social-icon" aria-label="LinkedIn" data-tooltip="LinkedIn.com/in/hochunchit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          <!-- GitHub -->
          <a href="https://github.com/Tony0824X" target="_blank" class="social-icon" aria-label="GitHub" data-tooltip="https://github.com/Tony0824X">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Stats Section -->
      <div class="stats-section">
        <div class="company-icons">
          <!-- Microsoft -->
          <div class="company-icon" title="Microsoft">
            <svg width="24" height="24" viewBox="0 0 23 23">
              <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
              <path fill="#f35325" d="M1 1h10v10H1z"/>
              <path fill="#81bc06" d="M12 1h10v10H12z"/>
              <path fill="#05a6f0" d="M1 12h10v10H1z"/>
              <path fill="#ffba08" d="M12 12h10v10H12z"/>
            </svg>
          </div>
          <!-- Google -->
          <div class="company-icon" title="Google">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <!-- Apple -->
          <div class="company-icon" title="Apple">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#000000"/>
            </svg>
          </div>
        </div>
        
        <div class="stats">
          <div class="stat-item">
            <span class="stat-label">Scholarships</span>
            <span class="stat-value">8+</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Portfolio</span>
            <span class="stat-value">30+</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Certificates</span>
            <span class="stat-value">20+</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Skills</span>
            <span class="stat-value">100+</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const emailTooltip = ref('tony030824@gmail.com')
const phoneTooltip = ref('+852 54819060')

const copyToClipboard = async (text, type) => {
  try {
    await navigator.clipboard.writeText(text)
    
    if (type === 'email') {
      const original = emailTooltip.value
      emailTooltip.value = 'Copied!'
      setTimeout(() => emailTooltip.value = original, 2000)
    } else if (type === 'phone') {
      const original = phoneTooltip.value
      phoneTooltip.value = 'Copied!'
      setTimeout(() => phoneTooltip.value = original, 2000)
    }
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
</style>

<style scoped>
/* Tooltip Styles */
.social-icon {
  position: relative;
}

.social-icon::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 20;
}

.social-icon:hover::after {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* Existing Styles */
.profile-section {
  margin-top: -100px;
  padding: 0 var(--spacing-6);
  position: relative;
  z-index: 10;
}

.profile-container {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-10);
  max-width: 1280px;
  margin: 0 auto;
}

.profile-image-wrapper {
  flex-shrink: 0;
  width: 240px;
  height: 400px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  background: white;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  padding-top: 60px;
  flex: 1;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-2);
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.pro-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  font-size: var(--font-size-xs);
  font-weight: 600;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
}

.pro-icon {
  margin-left: 2px;
}

.profile-title {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-6);
  line-height: 1.6;
}

.social-icons {
  display: flex;
  gap: var(--spacing-4);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
}

.social-icon:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.stats-section {
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-6);
}

.company-icons {
  display: flex;
  gap: var(--spacing-3);
}

.company-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
  cursor: pointer;
}

.company-icon:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  background-color: white;
}

.stats {
  display: flex;
  gap: var(--spacing-10);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-1);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
}
</style>
