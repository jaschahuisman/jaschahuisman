<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { IProject } from "@/types/project";
import Button from "@/components/atoms/Button.vue";
import ContentSection from "@/components/sections/project/ContentSection.vue";
import AssociationsSection from "@/components/sections/project/AssociationsSection.vue";
import ToolsSection from "@/components/sections/project/ToolsSection.vue";
import LinksSection from "@/components/sections/project/LinksSection.vue";
import useFetch from "@/composition/useFetch";

type IProjectsResponse = IProject[];

const route = useRoute();
const jsonUrl = "/static/data/projects.json";
const project = ref<IProject | null>(null);
const projectTransformCallback = (data: IProjectsResponse) => {
  const foundProject = data.find(
    (project) => project.slug === route.params.projectId,
  );
  return foundProject;
};

useFetch<IProjectsResponse, IProject>(
  jsonUrl,
  project,
  projectTransformCallback,
);

const nextProject = ref<IProject | null>(null);
const nextProjectTransformCallback = (data: IProjectsResponse) => {
  const currentIndex = data.findIndex(
    (project) => project.slug === route.params.projectId,
  );
  const nextIndex = currentIndex + 1 === data.length ? 0 : currentIndex + 1;
  return data[nextIndex];
};
useFetch<IProjectsResponse, IProject>(
  jsonUrl,
  nextProject,
  nextProjectTransformCallback,
);
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
        v-if="project.associations && project.associations.length > 0"
        :associations="project.associations"
      />
      <tools-section
        v-if="project.tools && project.tools.length > 0"
        :tools="project.tools"
      />
      <links-section
        v-if="project.links && project.links.length > 0"
        :links="project.links"
      />
      <div class="project__buttons">
        <Button
          variant="primary"
          class="project__buttons__button"
          :href="`/projects/${nextProject?.slug}`"
        >
          <span>Next project</span>
          <icon-mdi-arrow-right />
        </Button>
      </div>
    </div>
    <div v-else class="project project--not-found">
      <h1 class="project__title">Project not found</h1>
      <Button variant="primary" href="/projects">
        <icon-mdi-keyboard-return />
        <span>Return to projects</span>
      </Button>
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
.project--not-found
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  min-height: 60vh
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
