<template>
    <article class="project">
        <section v-for="project in projects" :key="project.id" class="project__wrapper border-radius-std">
            <div :class="`project__content project__content--${project.id}`"  :style="{ backgroundImage: `url(${getImagePath(project.imageName)})`, backgroundColor: `${project.backgroundColour}` }">
                <a :href="project.url ? project.url : 'https://github.com/otd1990'" class="project__link-overlay" target="_blank" rel="noopener noreferrer">                
                    <div class="project__top">
                        <div class="project__info">
                            <h2 class="project__title">{{ project.name }}</h2>
                            <div class="project__external">
                                <a :href="project.url ? project.url : 'https://github.com/otd1990'" class="project__external-link" target="_blank" rel="noopener noreferrer">-></a>
                            </div>
                        </div>
                        <span class="project__desc">{{ project.description }}</span>
                        <div class="project__skills">Built using: <span v-for="n in 3" :key="n" class="project__skills-icon">å</span></div>
                    </div>
                </a>
                <!-- <img class="project__img border-radius-std" :src="getImagePath(project.imageName)"  /> -->
            </div>
        </section>
    </article>
</template>
<script setup>

import useAssets from "../composables/useAssets";

const defaultImage = "https://source.unsplash.com/random/300x100";

const projects = [
    {
        id: 1,
        name: "Ai Chatbots",
        description: "A lightly styled look into how Vue & Node can be used to work with the OpenAI API",
        builtWith: ["Vue", "Node", "CSS"],
        imageName: "chat-bots.png",
        url: "https://github.com/otd1990/ai-bots",
        backgroundColour: "#39a7ff"
    },
    {
        id: 2,
        name: "Sandra Plumb Books",
        description: "A website used display books written by an independant author. This site is built with a CMS meaning the creator can control their work",
        builtWith: ["Nuxt", "SCSS", "Supabase"],
        url: "https://sandraplumb.com/",
        imageName: "sandra-pumb-books.png",
        backgroundColour: "#fbf8f2"
    },
    {
        id: 3,
        name: "First Dance Thame",
        description: "A website for a dance teacher",
        builtWith: ["Javascript", "CSS", "Bootstrap"],
        url: "https://firstdanceclasses.co.uk/",
        imageName: "first-dance.png",
        backgroundColour: "#333"
    },
    {
        id: 4,
        name: "Nicola Evans Fine Art",
        description: "A website for a freelance artist to showcase their work",
        builtWith: ["JQuery", "SCSS", "Bootstrap"],
        url: "https://nicolaevansfineart.com/",
        imageName: "nic-f-a.png",
        backgroundColour: "#7D7C7C"
    },
    {
        id: 5,
        name: "Portfolio v1",
        description: "My first portfolio",
        builtWith: ["React", "JS", "SCSS", "Bootstrap"],
        url: "https://odyer755.github.io/",
        imageName: "old-profile.png",
        backgroundColour: "#006a71"
    }
];

const getImagePath = (imageName) => {
    if(imageName === undefined ) return defaultImage;
    const test = useAssets(imageName)
    return test;
};

</script>
<style>
.project {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}

.project__wrapper {
    position: relative;
  padding-bottom: 100%;
  overflow: hidden;
}

.project__external {
    text-decoration: none;
    border-radius: 100%;
    background: #f7f7f7;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #272829;
}

.project__img {
    object-fit: fill;
    height: 100%;
}

.project__content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #f7f7f7;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 3.5rem 8.5rem;
}

.project__external-link {
    text-decoration: none;
}

.project__link-overlay {
    color: inherit;
    text-decoration: none;
        height: 100%;
    width: 100%;
    display: block;
}

.project__skills-icon {
    height: 20px;
    width: 20px;
    border-radius: 100%;
    color: #f7f7f7;
}

.project__top{
    width: 100%;
    margin: 0;
    padding: 0.5rem;
    color: #f7f7f7;
    padding: 0.65rem 0.85rem;
}

.project__skills { 
    display: flex;
    align-items: center;
}

.project__skills-icon {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f7f7f7;
    color: #272829;

    margin: 0 0.5rem;
}

.project__info {
    margin-right: 0.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.project__content--2 .project__top {
    color: #272829 !important;
}
</style>