<script setup lang="ts">
import ProjectCard from "@/components/molecules/ProjectCard.vue";
import data from "@/projects.json";
const { projects } = data;
</script>

<template>
  <container-wrapper>
    <section-wrapper :animate="false">
      <h1>Projects</h1>
      <project-card
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </section-wrapper>
  </container-wrapper>
</template>
