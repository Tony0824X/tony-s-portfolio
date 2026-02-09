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
                <span class="stat icon-btn" title="Download">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                <span class="stat icon-btn" title="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
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

const activeTab = ref('website')

const tabs = [
  { id: 'website', label: 'Website', count: null },
  { id: 'ios', label: 'iOS App', count: null },
  { id: 'macos', label: 'MacOS App', count: null },
  { id: 'visionos', label: 'VisionOS App', count: null },
  { id: 'android', label: 'Android App', count: null },
  { id: 'chrome', label: 'Chrome Extension', count: null },
  { id: 'automation', label: 'Automation System', count: null },
  { id: 'ragai', label: 'RAG AI', count: null },
  { id: 'smart', label: 'Smart Contract', count: null },
  { id: 'nft', label: 'NFT', count: null }
]

const projects = [
  {
    id: 1,
    title: 'VPN Mobile App',
    category: 'Mobile UI, Research',
    image: vpnApp,
    badges: null
  },
  {
    id: 2,
    title: 'Property Dashboard',
    category: 'Web Interface',
    image: propertyDashboard,
    badges: [
      { text: 'UI', color: 'orange' }
    ]
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    category: 'Mobile UI, Branding',
    image: healthcareApp,
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
