<template>
  <div class="home-view">
    <HeroSection />
    <ProfileSection />
    <WorkSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProfileSection from '../components/ProfileSection.vue'
import WorkSection from '../components/WorkSection.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>
