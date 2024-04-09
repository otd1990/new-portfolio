<template>
  <article class="contact card gradient-background border-radius-std">
    <h2 class="contact__heading">Get In Touch</h2>
    <form class="contact__form" @submit.prevent="handleSubmit">
      <div class="contact__form-group">
        <label class="contact__form-label" for="contactName">Name</label>
        <input
          type="text"
          class="contact__form-input"
          id="contactName"
          name="contactName"
          placeholder="Name"
          v-model="contactName"
          required
        />
      </div>
      <div class="contact__form-group">
        <label class="contact__form-label" for="contactEmail">Email</label>
        <input
          type="email"
          class="contact__form-input"
          id="contactEmail"
          name="contactEmail"
          placeholder="Email"
          v-model="contactEmail"
          required
        />
      </div>
      <div class="contact__form-group">
        <label class="contact__form-label" for="contactComment">Comment</label>
        <textarea
          class="contact__form-textarea"
          id="contactComment"
          name="contactComment"
          rows="4"
          cols="50"
          v-model="contactComment"
        />
      </div>
    </form>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const contactName = ref('')
const contactEmail = ref('')
const contactComment = ref('')

const handleSubmit = () => {
  console.log('Submitting')
}
</script>

<style>
.contact {
  min-height: 15rem;
  height: 100%;
}
.contact__heading {
  text-align: center;
}
.contact__form {
  max-width: 800px;
  display: block;
  margin: 0 auto;
}
.contact__form-label {
  display: block;
  margin-left: 0.15rem;
}
.contact__form-input,
.contact__form-textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #aca8a8;
}
</style>
