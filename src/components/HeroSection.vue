<template>
  <section id="home" class="hero route-section">
    <div class="hero-bg" aria-hidden="true">
      <canvas id="heroMathCanvas"></canvas>
    </div>

    <div class="hero-content">
      <h1 class="hero-label">Full-Stack Software Developer</h1>

      <p class="hero-subtitle">
        PHP, Laravel, Vue.js, JavaScript &amp; Flutter — building reliable web, mobile and API-driven products.
      </p>

      <a href="#work" class="cta-button" @click.prevent="$emit('navigate', 'work')">
        View Case Studies
      </a>
    </div>

    <div class="scroll-indicator">Scroll</div>
  </section>
</template>

<script setup>
defineEmits(['navigate'])
</script>
