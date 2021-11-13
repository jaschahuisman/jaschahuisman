<script setup lang="ts">
const props = defineProps<{ title: string; text: string; component?: any }>();
console.log(props.component);
</script>

<template>
  <section class="footer-section">
    <h3 class="footer-section__title">{{ title }}</h3>
    <p class="footer-section__paragraph">{{ text }}</p>
    <component :is="component" />
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
