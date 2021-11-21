<script setup lang="ts"></script>

<template>
  <section-wrapper
    id="about"
    class="about-section"
    title="For those who want to get to know me better"
  >
    <p class="about-section__text">
      At an early age I always longed to go back home during the holidays,
      because that’s where the computer was. I had the drive to create something
      every single day. Fortunately, the world is different now, and computers
      are portable. Along the road I gradually gained a full pallet of designing
      and developing expertise which I still use every day. The majority of
      people I have met refer to me as a digital wizard. I proudly call myself a
      creative developer.
    </p>
    <img
      class="about-section__image"
      alt="Jascha Huisman"
      src="@/assets/img/portrait.webp"
    />
  </section-wrapper>
</template>

<style scoped lang="sass">
@import '@/styles/_media.scss'
@import '@/styles/_mixins.sass'
.about-section
  @include container
  position: relative
.about-section__decoration
  right: 50%
  top: 0
.about-section__text
  margin-bottom: 4rem
  @include media(">=desktop")
    width: 80%
.about-section__image
  height: 300px
  width: 100%
  object-fit: cover
  object-position: 50% 35%
</style>
