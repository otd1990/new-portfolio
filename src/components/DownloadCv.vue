<template>
  <article class="project-single">
    <section class="project__wrapper border-radius-std">
      <div class="project__content project__content">
        <a href="/OliverDyerCv-20240423.pdf" class="project__link-overlay" download>
          <div class="project__top">
            <div class="project__info">
              <h2 class="project__title">Download My CV</h2>
            </div>
            <div>
              <span class="project__desc"
                >Take a look at my professional experience by clicking anywhere on this tile.</span
              >
            </div>
          </div>
          <img src="/cv-image.png" />
        </a>
      </div>
    </section>
  </article>
</template>

<style src="../assets/projects.css"></style>

<style scoped>
.project__wrapper {
  background-color: #96baff;
  padding-bottom: 50%;
  width: 60%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .project__wrapper {
    height: 100%;
    width: 100%;
    padding-bottom: 80%;
  }
}
</style>
