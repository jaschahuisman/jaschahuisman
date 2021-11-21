<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/projects.json";
import ContentSection from "@/components/sections/ContentSection.vue";
import AssociationsSection from "@/components/sections/AssociationsSection.vue";
import ToolsSection from "@/components/sections/ToolsSection.vue";
import LinksSection from "@/components/sections/LinksSection.vue";
import Button from "@/components/atoms/Button.vue";

const route = useRoute();
const project = projects.find((p) => p.slug === route.params.projectId);

const nextProject = () => {
  if (!project) return;
  const index = projects.indexOf(project);
  const nextIndex = index + 1;
  return nextIndex >= projects.length ? projects[0] : projects[nextIndex];
};
</script>

<template>
  <main id="project" class="project-page">
    <div v-if="project" class="project">
      <img class="project__image" :src="project.image" />
      <h1 class="project__title">{{ project.title }}</h1>
      <span class="project__date">{{ project.date }}</span>
      <b class="project__description">{{ project.description }}</b>
      <content-section :content="project.content" />
      <associations-section
        v-if="project.associations.length > 0"
        :associations="project.associations"
      />
      <tools-section v-if="project.tools.length > 0" :tools="project.tools" />
      <links-section v-if="project.links.length > 0" :links="project.links" />
      <div class="project__buttons">
        <Button
          v-if="project.repository"
          :href="project.repository"
          variant="secondary"
          class="project__buttons__button"
        >
          <icon-mdi-github />
          <span>{{ project.cta.text }}</span>
        </Button>
        <Button
          v-if="nextProject()"
          variant="primary"
          class="project__buttons__button"
          :href="`/projects/${nextProject()?.slug}`"
        >
          <span>Next project</span>
          <icon-mdi-arrow-right />
        </Button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.project
    @include container
    padding-top: 2rem
    padding-bottom: 4rem
.project__date
  font-size: 0.9rem
  font-weight: 500
  display: inline-block
  text-align: center
  width: 100%
  margin-bottom: 1rem
  @include media(">=desktop")
    text-align: unset
.project__image
  @include skeleton
  @include fadein(1.5s)
  width: 100%
  height: 200px
  object-fit: cover
  margin-bottom: 2rem
.project__title
  font-size: 3rem
  margin-bottom: 1rem
  text-align: center
  @include media(">=desktop")
    font-size: 4rem
    text-align: unset
.project__description
  display: block
  font-size: 1.5rem
  line-height: 1.5em
  font-weight: 500
  margin-bottom: 3rem
  color: $color-heading
.project__buttons
  padding-top: 2.5rem
  display: flex
  align-items: center
  flex-direction: column
  @include media(">=desktop")
    flex-direction: row
    justify-content: space-between
.project__buttons__button
  margin-bottom: 2.5rem
.project__buttons__button:last-child
  margin-left: auto
</style>
