<template>
  <Container class="footer-container" maxWidth="1200px">
    <footer class="footer">
      <section class="footer__section">
        <h3 class="footer__section__title">Interested in my work?</h3>
        <p class="footer__section__paragraph">
          Did I make you curious about my work? View my complete portfolio and
          follow my work!
        </p>
        <Button
          size="normal"
          variant="primary"
          href="https://www.behance.net/jaschahuisman"
          >Visit my portfolio</Button
        >
      </section>
      <section class="footer__section">
        <h3 class="footer__section__title">I'm an open book.</h3>
        <p class="footer__section__paragraph">
          I like to open source most of my projects, so that everyone can learn
          something from my projects.
        </p>
        <Button
          size="normal"
          href="https://www.github.com/jaschahuisman/jaschahuisman"
          >Check the repo</Button
        >
      </section>
      <section class="footer__section">
        <h3 class="footer__section__title">Let's connect.</h3>
        <p class="footer__section__paragraph">
          Give me a call, or even a text message will work. Then we we'll talk
          about what we can do for each other.
        </p>
      </section>
    </footer>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/atoms/Button.vue";
import Container from "@/components/wrappers/Container.vue";

export default defineComponent({
  name: "Footer",
  components: {
    Button,
    Container,
  },
});
</script>

<style lang="sass" scoped>
@import "@/styles/_media.scss"
.footer
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 2rem
  margin-top: 2rem
  margin-bottom: 4rem
  &__section
    display: flex
    flex-direction: column
  @include media("<=1200px", ">phone")
    padding: 0 1.5rem
  @include media("<=tablet", ">phone")
    grid-template-columns: repeat(1, 1fr)
  @include media("<=phone")
    grid-template-columns: repeat(1, 1fr)
    justify-content: center
    text-align: center
  &__section
    &__title
      margin-bottom: 0.5rem
    &__paragraph:not(:last-child)
      margin-bottom: 1.5rem
</style>
