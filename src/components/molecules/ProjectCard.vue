<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    description: string;
    image: string;
    date: string;
    id: string;
  };
}>();
</script>

<template>
  <a :href="`/projects/${project.id}`" class="project-card">
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

<style scoped lang="sass">
@import '@/styles/_colors.sass'
.project-card
    position: relative
    display: flex
    flex-direction: column
    width: 100%
    &__date
       font-size: 0.8rem
       font-weight: 500
       margin-bottom: 0.5rem
       color: $midGray
    &__image
        width: 100%
        height: 256px
        object-fit: cover
    &__title
        margin-bottom: 0.5rem
</style>
