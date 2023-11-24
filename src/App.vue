<template>
  <section id="header-section">
    <HeaderNav />
  </section>
  <main class="main">
    <section id="about-me">
      <AboutMe />
    </section>
    <section id="projects">
      <ProjectTiles />
    </section>
  </main>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue'
import AboutMe from './components/AboutMe.vue'
import ProjectTiles from './components/ProjectTiles.vue'
</script>

<style>
.main {
  margin-bottom: 1.5rem;
}
</style>
