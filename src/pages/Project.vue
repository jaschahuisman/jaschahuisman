<script setup lang="ts">
import { useRoute } from "vue-router";
import ProjectSectionWrapper from "@/components/wrappers/ProjectSectionWrapper.vue";
import data from "@/projects.json";
const { projects } = data;
const project = projects.find(
  (project) => project.id === useRoute().params.projectId,
);
</script>

<template>
  <container-wrapper>
    <div v-if="project" class="project">
      <project-section-wrapper class="project-header-section">
        <img :src="project.image" :alt="project.title" class="project__image" />
        <span class="project__date">{{ project.date }}</span>
        <h1 class="project__title">{{ project.title }}</h1>
        <b class="project__description">{{ project.description }}</b>
      </project-section-wrapper>

      <project-section-wrapper
        v-for="(projectSection, index) in project.sections"
        :key="index"
        :animate="false"
        :title="projectSection.title"
        :content="projectSection.content"
        class="project-section"
      />

      <project-section-wrapper
        v-if="project.associations"
        class="project-associations-section"
        title="Associations"
      >
        <a
          v-for="(association, index) in project.associations"
          :key="index"
          class="project__association"
          :href="association.href"
        >
          <img :src="association.image" :alt="association.company" />
          {{ association.company }}
        </a>
      </project-section-wrapper>
    </div>
  </container-wrapper>
</template>

<style scoped lang="sass">
@import '@/styles/_colors.sass'
.project-header-section
  padding-bottom: 2rem
.project
  &__image
    width: 100%
    height: 200px
    object-fit: cover
    margin-bottom: 2rem
  &__date
    display: block
    font-weight: 500
    margin-bottom: 0.5rem
    color: $midGray
  &__title
    font-size: 4rem
    font-weight: 800
    margin-bottom: 0.5rem
  &__description
    font-size: 1.5rem
    font-weight: 400
    line-height: 1.5em
  &__association
    display: inline-flex
    padding: 0.5rem
    padding-right: 1rem
    line-height: 2em
    align-items: center
    border: 1px solid $midGray
    border-radius: 0.25rem
    margin-right: 1rem
    img
      border-radius: 100%
      width: 3em
      height: 3em
      margin-right: 0.5rem
</style>
