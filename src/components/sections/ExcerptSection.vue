<script setup lang="ts">
import Decoration from "../atoms/Decoration.vue";
</script>

<template>
  <container-wrapper class="excerpt-container">
    <section-wrapper id="excerpt" class="excerpt-section">
      <div class="excerpt">
        <Decoration class="excerpt__decoration" />
        <h2 class="excerpt__text">
          Since my legs can carry me, I have been in touch with tech, art and
          design. I have carried camera’s, paint brushes, computers,
          screwdrivers, hammers, harddisks and music instruments. Now I am here,
          designing and developing for you.
        </h2>
      </div>
    </section-wrapper>
  </container-wrapper>
</template>

<style scoped lang="sass">
@import '@/styles/_media.scss'
.excerpt
  position: relative
  &__decoration
    right: 50%
    top: 0
  &__text
    line-height: 2em
    font-size: 2.25rem
    font-weight: 600
    @include media('<=tablet')
      text-align: center
      line-height: 1.5em
</style>
