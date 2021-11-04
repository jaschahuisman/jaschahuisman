<template>
  <Container class="footer-container" maxWidth="1200px">
    <footer class="footer">
      <Section class="footer__section">
        <h3 class="footer__section__title">Interested in my work?</h3>
        <p class="footer__section__paragraph">
          Did I make you curious about my work? View my complete portfolio and follow my work!
        </p>
        <Button
          size="normal"
          variant="primary"
          href="https://www.behance.net/jaschahuisman"
          :icon="['fab', 'behance']"
          newTab
        >
          Visit my portfolio
        </Button>
      </Section>
      <Section class="footer__section">
        <h3 class="footer__section__title">I'm an open book.</h3>
        <p class="footer__section__paragraph">
          I like to open source most of my projects, so that everyone can learn something from my projects.
        </p>
        <Button
          size="normal"
          href="https://www.github.com/jaschahuisman/jaschahuisman"
          :icon="['fab', 'github']"
          newTab
        >
          Check the repo
        </Button>
      </Section>
      <Section class="footer__section">
        <h3 class="footer__section__title">Let's connect.</h3>
        <p class="footer__section__paragraph">
          Give me a call, or even a text message will work. Then we we'll talk about what we can do for each other.
        </p>
        <div class="footer__section__icons">
          <a
            v-for="icon in icons"
            class="footer__section__icons__icon"
            target="_blank"
            rel="noopener noreferrer"
            :key="icon.id"
            :href="icon.href"
            :title="icon.title"
          >
            <icon :icon="icon.icon" :color="icon.color" />
          </a>
        </div>
      </Section>
    </footer>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/atoms/Button.vue';

export default defineComponent({
  components: { Button },
  data() {
    return {
      icons: [
        {
          id: 'linkedin',
          href: 'https://www.linkedin.com/in/jaschahuisman',
          icon: ['fab', 'linkedin-in'],
          color: '#2867B2',
          title: 'LinkedIn',
        },
        {
          id: 'whatsapp',
          href: 'https://wa.me/+31611808827?text=Hi%20Jascha!&lang=en',
          icon: ['fab', 'whatsapp'],
          color: '#25D366',
          title: 'Whatsapp',
        },
        {
          id: 'instagram',
          href: 'https://www.instagram.com/jaschahuisman',
          icon: ['fab', 'instagram'],
          color: '#E1306C',
          title: 'Instagram',
        },
        {
          id: 'github',
          href: 'https://www.github.com/jaschahuisman',
          icon: ['fab', 'github'],
          title: 'Github',
        },
      ],
    };
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
  @include media("<=1200px", ">phone")
    padding: 0 1.5rem
  @include media("<=tablet")
    grid-template-columns: repeat(1, 1fr)
    justify-content: center
    text-align: center
    grid-gap: 5rem
  @include media("<=tablet", ">phone")
    grid-template-columns: repeat(1, 1fr)
    width: 90%
    margin: 0 auto
  &__section
    display: flex
    flex-direction: column
    &__title
      margin-bottom: 0.5rem
    &__paragraph:not(:last-child)
      margin-bottom: 2rem
    &__icons
      display: flex
      align-items: center
      @include media("<=tablet")
        justify-content: center
        margin-bottom: 3rem
      &__icon
        width: 1.5rem
        height: 1.5rem
        margin-right: 1rem
        svg
          width: 100%
          height: 100%
</style>
