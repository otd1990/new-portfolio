<template>
  <article class="about-me">
    <section class="about-me__text card border-radius-std gradient-background">
      <div class="about-me__upper">
        <div class="about-me__intro">
          <h2 class="card__title">
            Hi, I'm Oliver. A frontend & UI Developer based in the UK with
            {{ yearsExperience }} years experience
          </h2>
          <p class="about-me__desc">
            I am passionate about completing tasks, finding solutions and fixing bugs. I love
            creating interactive UI's and believe they are the best thing about the internet.
          </p>
        </div>
        <aside class="about-me__profile">
          <picture>
            <source media="(max-width: 600px)" srcset="me-profile.jpg" />
            <source media="(min-width: 601px)" srcset="me-profile.jpg" />
            <img class="about-me__img border-radius-std" src="me-profile.jpg" />
          </picture>
        </aside>
      </div>
      <div class="about-me__contact">
        <h3 class="text-center font-bold">Get In Touch</h3>
        <div class="flex align-center justify-evenly">
          <div class="about-me__contact">
            <a
              href="mailto:oliverdyer.dev@gmail.com"
              rel="noopener noreferrer"
              class="about-me__contact-link"
            >
              <img src="/email.svg" alt="email me here!" />
            </a>
          </div>
          <div class="about-me__contact">
            <a href="#contact" rel="noopener noreferrer" class="about-me__contact-link">
              <img src="/contact-form.svg" alt="fill in the form below to contact me!" />
            </a>
          </div>
          <div class="about-me__contact">
            <a
              href="www.linkedin.com/in/oliver-dyer-a02a25227"
              target="_blank"
              rel="noopener noreferrer"
              class="about-me__contact-link"
            >
              <img src="/linkedin.svg" alt="let's connect on linkedin!" />
            </a>
          </div>
          <div class="about-me__contact">
            <a
              href="https://github.com/otd1990"
              target="_blank"
              rel="noopener noreferrer"
              class="about-me__contact-link"
            >
              <img src="/github.svg" alt="checkout my github" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
<script setup>
import { computed } from 'vue'

const yearsExperience = computed(() => {
  const firstYear = 2019
  const currYear = new Date().getFullYear()

  return currYear - firstYear
})
</script>

<style scoped>
.about-me {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}
.about-me__upper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
}

.about-me__text {
  flex: 1;
}

.about-me__desc {
  margin-top: 1.5rem;
  font-size: 1.2rem;
}

.about-me__img {
  height: 100%;
  width: calc(22vw - 40px);
  flex: 1;
}

h3 {
  margin: 2rem;
}

.about-me__contact-link {
  > img {
    height: 30px;
    width: 30px;
  }
}

@media (max-width: 1025px) {
  .about-me__img {
    width: calc(26vw - 40px);
  }
}

@media (max-width: 769px) {
  .about-me__upper {
    flex-wrap: wrap;
  }

  .about-me__intro {
    flex: 1 0 100%;
  }

  .about-me__profile {
    flex: 1 0 100%;
  }

  .about-me__img {
    display: block;
    margin: 0 auto;
    width: calc(37vw - 40px);
  }
}
</style>
