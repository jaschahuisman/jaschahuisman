<script setup lang="ts">
  defineProps<{ title: string; text: string }>();
</script>

<template>
  <section class="footer-section">
    <h3 class="footer-section__title">{{ title }}</h3>
    <p class="footer-section__paragraph">{{ text }}</p>
  </section>
</template>

<style scoped lang="sass">
  .footer-section
    display: flex
    flex-direction: column
    &__title
        margin-bottom: 0.5rem
    &__paragraph:not(:last-child)
        margin-bottom: 2rem
</style>
