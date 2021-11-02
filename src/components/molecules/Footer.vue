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
          newTab
        >
          <icon-base iconName="Behance" height="18" width="18">
            <icon-behance />
          </icon-base>
          Visit my portfolio
        </Button>
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
          newTab
        >
          <icon-base iconName="GitHub" height="18" width="18">
            <icon-github />
          </icon-base>
          Check the repo
        </Button>
      </section>
      <section class="footer__section">
        <h3 class="footer__section__title">Let's connect.</h3>
        <p class="footer__section__paragraph">
          Give me a call, or even a text message will work. Then we we'll talk
          about what we can do for each other.
        </p>
        <div class="footer__section__icons">
          <a
            class="footer__section__icons__icon"
            href="https://www.linkedin.com/in/jaschahuisman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <icon-base iconName="LinkedIn" color="#2867B2">
              <icon-linkedin />
            </icon-base>
          </a>
          <a
            class="footer__section__icons__icon"
            href="https://wa.me/+31611808827?text=Hi%20Jascha!&lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <icon-base color="#4AC959" iconName="Whatsapp">
              <icon-whatsapp />
            </icon-base>
          </a>
          <a
            class="footer__section__icons__icon"
            href="https://www.instagram.com/jaschahuisman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <icon-base color="#E1306C" iconName="Instagram">
              <icon-instagram />
            </icon-base>
          </a>
          <a
            class="footer__section__icons__icon"
            href="https://www.github.com/jaschahuisman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <icon-base color="#000000" iconName="GitHub">
              <icon-github />
            </icon-base>
          </a>
        </div>
      </section>
    </footer>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/atoms/Button.vue";
import Container from "@/components/wrappers/Container.vue";
import IconBehance from "@/components/icons/IconBehance.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconWhatsapp from "@/components/icons/IconWhatsapp.vue";

export default defineComponent({
  name: "Footer",
  components: {
    Button,
    Container,
    IconBehance,
    IconGithub,
    IconInstagram,
    IconLinkedin,
    IconWhatsapp,
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
    &__icons
      display: flex
      align-items: center
      &__icon
        margin-right: 0.75rem
</style>
