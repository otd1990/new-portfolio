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
    <Section id="contact">
      <ContactMe />
    </Section>
  </main>
  <!-- <article class="footer__banner">This site is in BETA and is still in development</article> -->
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue'
import AboutMe from './components/AboutMe.vue'
import ProjectTiles from './components/ProjectTiles.vue'
import ContactMe from './components/ContactMe.vue'
</script>

<style>
.main {
  padding-bottom: 2.5rem;
}

.footer__banner {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: #f7f7f7;
  width: 100%;
  text-align: center;
  box-shadow: -1px 2px 8px rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>
