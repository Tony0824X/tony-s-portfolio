<template>
  <header class="header">
    <div class="header-container">
      <div class="logo" @click="navigateTo('/')" style="cursor: pointer">
        <span class="logo-icon">✦</span>
        <span class="logo-text">Tony</span>
      </div>
      
      <!-- Desktop Nav -->
      <nav class="nav">
        <a href="#/" class="nav-link" :class="{ active: currentRoute === '/' }">Portfolio</a>
        <a href="#/education" class="nav-link" :class="{ active: currentRoute === '/education' }">Education</a>
        <a href="#/work" class="nav-link" :class="{ active: currentRoute === '/work' }">Work</a>
        <a href="#/leadership" class="nav-link" :class="{ active: currentRoute === '/leadership' }">Leadership</a>
        <a href="#/awards" class="nav-link" :class="{ active: currentRoute === '/awards' }">Awards</a>
        <a href="#/skills" class="nav-link" :class="{ active: currentRoute === '/skills' }">Skills</a>
      </nav>
      
      <!-- Desktop Actions -->
      <div class="header-actions">
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/hochunchit" target="_blank" class="icon-btn" aria-label="LinkedIn" data-tooltip="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <!-- GitHub -->
        <a href="https://github.com/Tony0824X" target="_blank" class="icon-btn" aria-label="GitHub" data-tooltip="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        
        <a href="https://wa.me/85254819060" target="_blank" class="btn btn-primary upload-btn">Contact</a>
        
        <button class="avatar-btn" aria-label="Profile menu">
          <img src="../assets/profile.png" alt="Profile" class="avatar-img" />
        </button>
      </div>

      <!-- Hamburger Button -->
      <button class="hamburger-btn" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu" aria-label="Toggle menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Mobile Menu Overlay -->
      <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
        <nav class="mobile-nav">
          <a href="#/" class="mobile-nav-link" :class="{ active: currentRoute === '/' }" @click="closeMenu">Portfolio</a>
          <a href="#/education" class="mobile-nav-link" :class="{ active: currentRoute === '/education' }" @click="closeMenu">Education</a>
          <a href="#/work" class="mobile-nav-link" :class="{ active: currentRoute === '/work' }" @click="closeMenu">Work</a>
          <a href="#/leadership" class="mobile-nav-link" :class="{ active: currentRoute === '/leadership' }" @click="closeMenu">Leadership</a>
          <a href="#/awards" class="mobile-nav-link" :class="{ active: currentRoute === '/awards' }" @click="closeMenu">Awards</a>
          <a href="#/skills" class="mobile-nav-link" :class="{ active: currentRoute === '/skills' }" @click="closeMenu">Skills</a>
        </nav>

        <div class="mobile-actions">
          <a href="https://wa.me/85254819060" target="_blank" class="btn btn-primary upload-btn" style="width: 100%; text-align: center;">Contact Me</a>
          
          <div class="mobile-socials">
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/hochunchit" target="_blank" class="icon-btn" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <!-- GitHub -->
            <a href="https://github.com/Tony0824X" target="_blank" class="icon-btn" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from '../router'

const { currentRoute, push } = useRouter()
const isMenuOpen = ref(false)

const navigateTo = (path) => {
  push(path)
  closeMenu()
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
</style>

<style scoped>
/* Tooltip Styles */
.icon-btn {
  position: relative;
}

.icon-btn::after {
  content: attr(data-tooltip);
  position: absolute;
  top: 110%;
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

.icon-btn:hover::after {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* Existing Styles */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--spacing-4) var(--spacing-6);
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  z-index: 102; /* Ensure logo stays above mobile menu */
  position: relative;
}

.logo-icon {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.logo-text {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

.nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
}

.nav-link {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
  text-decoration: none;
  padding: var(--spacing-1) 0;
  border-bottom: 2px solid transparent;
}

.nav-link:hover, .nav-link.active {
  color: var(--color-text-primary);
}

.nav-link.active {
  border-bottom-color: var(--color-primary);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.icon-btn:hover {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
}

.upload-btn {
  padding: var(--spacing-2) var(--spacing-5);
  font-weight: 600;
}

.avatar-btn {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 2px solid var(--color-border);
  transition: border-color var(--transition-fast);
}

.avatar-btn:hover {
  border-color: var(--color-primary);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Hamburger Menu */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 102;
  padding: 0;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: var(--color-text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Mobile Menu Overlay */
.mobile-menu {
  display: none;
}

/* Mobile Responsive Styles */
@media (max-width: 968px) {
  .nav {
    display: none; /* Hide default nav */
  }

  .header-actions {
    display: none; /* Hide default actions */
  }

  .hamburger-btn {
    display: flex;
  }

  /* Mobile Menu Overlay */
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 101;
    padding: 80px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .mobile-menu.is-open {
    transform: translateX(0);
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 24px;
  }

  .mobile-nav-link {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    text-decoration: none;
    padding: 8px 0;
  }

  .mobile-nav-link.active {
    color: var(--color-primary);
  }

  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .mobile-socials {
    display: flex;
    gap: 16px;
    margin-top: 8px;
  }
  
  /* Hamburger Animation */
  .hamburger-btn.is-active .hamburger-line:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger-btn.is-active .hamburger-line:nth-child(2) {
    opacity: 0;
  }

  .hamburger-btn.is-active .hamburger-line:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
