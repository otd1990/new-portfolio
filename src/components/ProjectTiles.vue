<template>
  <article class="project">
    <section
      v-for="project in projects"
      :key="project.id"
      class="project__wrapper border-radius-std"
    >
      <div
        :class="`project__content project__content--${project.id}`"
        :style="{
          backgroundColor: `${project.backgroundColour}`
        }"
      >
        <a
          :href="project.url ? project.url : 'https://github.com/otd1990'"
          class="project__link-overlay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="project__top">
            <div class="project__info">
              <h2 class="project__title">{{ project.name }}</h2>
              <div class="project__external">
                <a
                  :href="project.url ? project.url : 'https://github.com/otd1990'"
                  class="project__external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/arrow.svg" alt="click to go to project" />
                  <span class="sr-only">Click to visit project</span>
                </a>
              </div>
            </div>
            <span class="project__desc">{{ project.description }}</span>
            <div class="project__skills">
              Built using:

              <span v-for="n in project.builtWith" :key="n" class="project__skills-icon">
                <img :key="n" :src="`/${n}.svg`" :alt="n" class="project__skills-icon" />
              </span>
            </div>
          </div>
          <img :src="getImagePath(project.imageName)" />
        </a>
      </div>
    </section>
  </article>
</template>
<script setup>
import useAssets from '../composables/useAssets'

const defaultImage = 'https://source.unsplash.com/random/300x100'

const projects = [
  {
    id: 1,
    name: 'Ai Chatbots',
    description:
      'A lightly styled look into how Vue & Node can be used to work with the OpenAI API',
    builtWith: ['vue', 'nodejs', 'css'],
    imageName: 'chat-bots.png',
    url: 'https://github.com/otd1990/ai-bots',
    backgroundColour: '#39a7ff'
  },
  {
    id: 2,
    name: 'Sandra Plumb Books',
    description:
      'A website used display books written by an independant author. This site is built with a CMS meaning the creator can control their work',
    builtWith: ['nuxt', 'scss', 'supabase'],
    url: 'https://sandraplumb.com/',
    imageName: 'sandra-pumb-books.png',
    backgroundColour: '#fbf8f2'
  },
  {
    id: 3,
    name: 'First Dance Thame',
    description: 'A website for a dance teacher',
    builtWith: ['js', 'css', 'bootstrap'],
    url: 'https://firstdanceclasses.co.uk/',
    imageName: 'first-dance.png',
    backgroundColour: '#333'
  },
  {
    id: 4,
    name: 'Nicola Evans Fine Art',
    description: 'A website for a freelance artist to showcase their work',
    builtWith: ['jquery', 'scss', 'bootstrap'],
    url: 'https://nicolaevansfineart.com/',
    imageName: 'nic-f-a.png',
    backgroundColour: '#7D7C7C'
  },
  {
    id: 5,
    name: 'Portfolio v1',
    description: 'My first portfolio',
    builtWith: ['react', 'js', 'scss', 'bootstrap'],
    url: 'https://odyer755.github.io/',
    imageName: 'old-profile.png',
    backgroundColour: '#006a71'
  },
  {
    id: 6,
    name: 'Gallery App v1',
    description: 'My first portfolio',
    builtWith: ['vue', 'css'],
    url: 'https://otd1990.github.io/gallery-app/',
    imageName: 'gallery-app.png',
    backgroundColour: '#070F2B'
  }
]

const getImagePath = (imageName) => {
  if (imageName === undefined) return defaultImage
  const test = useAssets(imageName)
  return test
}
</script>
<style src="../assets/projects.css"></style>
