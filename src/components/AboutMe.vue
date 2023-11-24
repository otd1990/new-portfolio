<template>
    <article class="about-me">
        <section class="about-me__text card border-radius-std">
            <h2 class="card__title">Hi, I'm Oliver. A frontend & UI Developer based in the UK with {{ yearsExperience }} years experience</h2>
            <p class="about-me__desc">I am passionate about completing tasks, finding solutions and fixing bugs. I love creating interactive UI's and believe they are the best thing about the internet.</p>
            <h3 class="text-center font-bold">Get In Touch</h3>
            <div class="flex align-center justify-evenly">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </section>

        <section>
                <img class="aboutme__img border-radius-std" src="https://source.unsplash.com/random/400x450" />
        </section>
    </article>
</template>
<script setup>
import { computed } from "vue";

const yearsExperience = computed(() => {
    const firstYear = 2019;
    const currYear = new Date().getFullYear()


    return currYear - firstYear;
})


</script>

<style scoped>
.about-me {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
}

.about-me__text {
    flex: 1;
    background: hsla(0, 0%, 95%, 1);
/* https://coolors.co/gradient-maker/f1f1f1-ccdccf-f4d999?position=0,65,100&opacity=100,100,100&type=linear&rotation=130 */
background: hsla(0, 0%, 95%, 1);

background: linear-gradient(50deg, hsla(0, 0%, 95%, 1) 0%, hsla(131, 19%, 83%, 1) 72%, hsla(42, 81%, 78%, 1) 100%);

background: -moz-linear-gradient(50deg, hsla(0, 0%, 95%, 1) 0%, hsla(131, 19%, 83%, 1) 72%, hsla(42, 81%, 78%, 1) 100%);

background: -webkit-linear-gradient(50deg, hsla(0, 0%, 95%, 1) 0%, hsla(131, 19%, 83%, 1) 72%, hsla(42, 81%, 78%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F1F1F1", endColorstr="#CCDCCF", GradientType=1 );
}

.about-me__desc{
    margin-top: 1.5rem;
    font-size: 1.2rem;
}

.about-me__img {
    width: calc( 40vw - 40px );
    min-width: 200px;
    max-width: 460px;
    height: 500px;
    max-height: 570px;
    flex: 1;
}

h3 {
    margin: 2rem;
}
</style>