<template>
  <section-wrapper id="excerpt" class="excerpt-section">
    <h2 class="excerpt-section__text">
      Since my legs can carry me, I have been in touch with tech, art and
      design. I have carried camera’s, paint brushes, computers, screwdrivers,
      hammers, harddisks and music instruments. Now I am here, designing and
      developing for you.
    </h2>
  </section-wrapper>
</template>

<style scoped lang="sass">
@import '@/styles/_media.scss'
@import '@/styles/_mixins.sass'
.excerpt-section
  @include container
  position: relative
  &::after
    @include decoration
    height: 80%
    right: 50%
    top: 0
.excerpt-section__text
  text-align: center
  font-size: 2.25rem
  line-height: 1.5em
  font-weight: 600
  @include media('>=tablet')
    line-height: 2em
  @include media('>=desktop')
    text-align: unset
</style>
