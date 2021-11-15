<template>
  <section class="project-section" role="group">
    <slot />
  </section>
</template>

<style lang="sass">
.project-section
  padding: 2rem 0
  .title, &__title
    font-family: 'Montserrat', sans-serif
    letter-spacing: -0.05rem
    margin-bottom: 1rem
    font-size: 1.75rem
    font-weight: 600
</style>
