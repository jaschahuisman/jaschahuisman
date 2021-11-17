<script setup lang="ts">
import ProjectCard from "@/components/molecules/ProjectCard.vue";
import data from "@/projects.json";
const { projects } = data;
</script>

<template>
  <main id="projects" class="projects">
    <container-wrapper class="projects-container">
      <section-wrapper :animate="false" class="projects-section">
        <h1 class="page-title">Projects</h1>
        <div class="projects-masonry">
          <project-card
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            class="project-card"
          />
        </div>
      </section-wrapper>
    </container-wrapper>
  </main>
</template>

<style scoped lang="sass">
.page-title
  margin-bottom: 3rem
.project-card
  margin-bottom: 4rem
.projects-masonry
  display: grid
  grid-gap: 2rem
  grid-template-columns: 1fr 1fr
</style>
