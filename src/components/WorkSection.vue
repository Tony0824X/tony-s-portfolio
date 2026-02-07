<template>
  <section class="work-section">
    <div class="work-container">
      <!-- Tabs -->
      <nav class="tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="['tab', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
          <span v-if="tab.count" class="tab-count">{{ tab.count }}</span>
        </button>
      </nav>
      
      <!-- Work Grid -->
      <div class="work-grid">
        <article 
          v-for="project in projects" 
          :key="project.id"
          class="project-card"
        >
          <div class="project-image-wrapper">
            <img :src="project.image" :alt="project.title" class="project-image" />
            <div v-if="project.badges" class="project-badges">
              <span 
                v-for="badge in project.badges" 
                :key="badge.text"
                :class="['project-badge', `badge-${badge.color}`]"
              >
                {{ badge.text }}
              </span>
            </div>
          </div>
          
          <div class="project-info">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-stats">
                <span class="stat">
                  <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {{ project.likes }}
                </span>
                <span class="stat">
                  <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="3.5"/>
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/>
                  </svg>
                  {{ project.views }}
                </span>
              </div>
            </div>
            <p class="project-category">{{ project.category }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import vpnApp from '../assets/vpn-app.png'
import propertyDashboard from '../assets/property-dashboard.png'
import healthcareApp from '../assets/healthcare-app.png'

const activeTab = ref('work')

const tabs = [
  { id: 'work', label: 'Work', count: 54 },
  { id: 'moodboards', label: 'Moodboards', count: null },
  { id: 'likes', label: 'Likes', count: null },
  { id: 'about', label: 'About', count: null }
]

const projects = [
  {
    id: 1,
    title: 'VPN Mobile App',
    category: 'Mobile UI, Research',
    image: vpnApp,
    likes: 517,
    views: '9.3k',
    badges: null
  },
  {
    id: 2,
    title: 'Property Dashboard',
    category: 'Web Interface',
    image: propertyDashboard,
    likes: 983,
    views: '14k',
    badges: [
      { text: 'UI', color: 'orange' }
    ]
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    category: 'Mobile UI, Branding',
    image: healthcareApp,
    likes: 875,
    views: '13.5k',
    badges: [
      { text: 'UI', color: 'orange' },
      { text: 'Br', color: 'purple' }
    ]
  }
]
</script>

<style scoped>
.work-section {
  padding: var(--spacing-12) var(--spacing-6);
}

.work-container {
  max-width: 1280px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  gap: var(--spacing-8);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--spacing-10);
}

.tab {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-4) 0;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: all var(--transition-fast);
}

.tab:hover {
  color: var(--color-text-secondary);
}

.tab.active {
  color: var(--color-text-primary);
  border-bottom-color: var(--color-text-primary);
}

.tab-count {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  vertical-align: super;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
}

.project-card {
  cursor: pointer;
  transition: transform var(--transition-base);
}

.project-card:hover {
  transform: translateY(-8px);
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background-color: #e8efff;
  margin-bottom: var(--spacing-4);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-badges {
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  display: flex;
  gap: var(--spacing-2);
}

.project-badge {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: white;
  border-radius: 50%;
}

.badge-orange {
  background-color: #f97316;
}

.badge-purple {
  background-color: #a855f7;
}

.project-info {
  padding: 0 var(--spacing-2);
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-1);
}

.project-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
}

.project-stats {
  display: flex;
  gap: var(--spacing-3);
}

.stat {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.stat-icon {
  opacity: 0.6;
}

.project-category {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .work-grid {
    grid-template-columns: 1fr;
  }
  
  .tabs {
    gap: var(--spacing-4);
    overflow-x: auto;
    padding-bottom: var(--spacing-2);
  }
}
</style>
