<script setup lang="ts">
/* eslint-disable vue/no-v-html */
defineProps<{ title?: string; content?: string }>();
</script>

<template>
  <section class="project-section" role="group">
    <h3 v-if="title" class="project-section__title">{{ title }}</h3>
    <div class="project-section__content" v-html="content" />
    <slot />
  </section>
</template>

<style lang="sass">
.project-section
  padding: 2rem 0
  &__title
    font-family: 'Montserrat', sans-serif
    letter-spacing: -0.05rem
    margin-bottom: 1rem
    font-size: 1.75rem
    font-weight: 600
</style>
