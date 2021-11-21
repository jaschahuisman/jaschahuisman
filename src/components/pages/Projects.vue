<script setup lang="ts">
import { projects } from "@/projects.json";
import ProjectCard from "@/components/molecules/ProjectCard.vue";
</script>

<template>
  <main id="projects" class="projects-page">
    <h1 class="projects-page__title">Projects</h1>
    <div class="project-page__grid">
      <project-card
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </main>
</template>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.projects-page
  @include container
  padding-bottom: 4rem
  text-align: center
  @include media(">=tablet")
    text-align: unset
.projects-page__title
  margin-bottom: 2rem
  text-align: center
  @include media(">=desktop")
    text-align: unset
.project-page__grid
  position: relative
  display: grid
  grid-template-columns: 1fr
  grid-gap: 4rem
  @include media(">=desktop")
    grid-gap: 3rem 2rem
    grid-template-columns: 1fr 1fr
</style>
