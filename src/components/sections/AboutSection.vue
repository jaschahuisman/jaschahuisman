<template>
  <Container class="about-container">
    <Section class="about-section" id="about" title="For those who want to get to know me better">
      <p class="about__paragraph">
        At an early age I always longed to go back home during the holidays, because that’s where the computer was. I
        had the drive to create something every single day. Fortunately, the world is different now, and computers are
        portable. Along the road I gradually gained a full pallet of designing and developing expertise which I still
        use every day. The majority of people I have met refer to me as a digital wizard. I proudly call myself a
        creative developer.
      </p>
      <img class="about__image" src="@/assets/img/portrait.webp" />
    </Section>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="sass" scoped>
@import "@/styles/_media.scss"
.about
  &__paragraph
    width: 80%
    margin-bottom: 4rem
    @include media('<=tablet')
      width: 100%
  &__image
    display: block
    width: 100%
    height: 400px
    object-fit: cover
</style>
