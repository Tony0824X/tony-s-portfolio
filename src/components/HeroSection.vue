<template>
  <section class="hero">
    <div class="hero-gradient"></div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse 80% 100% at 70% 0%, 
      rgba(249, 168, 212, 0.6) 0%, 
      rgba(216, 180, 254, 0.4) 40%, 
      transparent 70%
    ),
    radial-gradient(ellipse 60% 80% at 30% 20%, 
      rgba(165, 180, 252, 0.5) 0%, 
      rgba(196, 181, 253, 0.3) 50%, 
      transparent 80%
    ),
    linear-gradient(180deg, 
      rgba(255, 255, 255, 1) 0%, 
      rgba(248, 250, 255, 1) 100%
    );
  animation: gradientShift 8s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}
</style>
