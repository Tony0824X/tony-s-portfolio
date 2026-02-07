<template>
  <div class="app">
    <AppHeader />
    <main>
      <component :is="activeComponent" />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HomeView from './views/HomeView.vue'
import EducationView from './views/EducationView.vue'
import WorkView from './views/WorkView.vue'
import AwardsView from './views/AwardsView.vue'
import SkillsView from './views/SkillsView.vue'
import LeadershipView from './views/LeadershipView.vue'
import { useRouter } from './router'

const { currentRoute } = useRouter()

const activeComponent = computed(() => {
  switch (currentRoute.value) {
    case '/education':
      return EducationView
    case '/work':
      return WorkView
    case '/awards':
      return AwardsView
    case '/skills':
      return SkillsView
    case '/leadership':
      return LeadershipView
    case '/':
    default:
      return HomeView
  }
})
</script>

<style scoped>
.app {
  min-height: 100vh;
}

main {
  width: 100%;
}
</style>
