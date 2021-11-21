<script setup lang="ts">
interface IProject {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}
interface IProjectCardProps {
  project: IProject;
}
defineProps<IProjectCardProps>();
</script>

<template>
  <a class="project-card" :href="`/projects/${project.slug}`">
    <img
      :src="project.image"
      :alt="project.title"
      class="project-card__image"
    />
    <span class="project-card__date">{{ project.date }}</span>
    <h3 class="project-card__title">{{ project.title }}</h3>
    <p class="project-card__description">{{ project.description }}</p>
  </a>
</template>

<style lang="sass" scoped>
@import '@/styles/_colors.sass'
@import '@/styles/_media.scss'
@import '@/styles/_mixins.sass'
.project-card
  display: flex
  flex-direction: column
  min-width: 0
  @include media("<=tablet")
    padding-bottom: 2rem
    border-bottom: 1px solid #efefef
.project-card__image
  height: 250px
  margin-bottom: 1.5rem
  object-fit: cover
  @include skeleton
.project-card__date
  font-weight: 500
  font-size: 0.9rem
  color: $color-light
  margin-bottom: 0.5rem
.project-card__title
  margin-bottom: 0.5rem
  font-size: 2rem
  font-weight: 800
</style>
