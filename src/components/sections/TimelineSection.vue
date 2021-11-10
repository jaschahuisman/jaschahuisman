<script setup lang="ts">
import ContainerWrapper from "@/components/wrappers/ContainerWrapper.vue";
import SectionWrapper from "@/components/wrappers/SectionWrapper.vue";
import TimelineItem from "../molecules/TimelineItem.vue";
defineProps<{
  timelineItems: Array<{
    title: string;
    description: string;
    date: string;
    image: string;
  }>;
}>();
</script>

<template>
  <container-wrapper class="timeline-container">
    <section-wrapper
      id="timeline"
      class="timeline-section"
      title="My skill-development-timeline"
      title-offset="3rem"
    >
      <div ref="timeline" class="timeline">
        <span ref="timelineRoot" class="timeline__root" />
        <timeline-item
          v-for="(timelineItem, index) in timelineItems"
          :key="index"
          :index="index"
          :title="timelineItem.title"
          :description="timelineItem.description"
          :date="timelineItem.date"
          :image="timelineItem.image"
        />
      </div>
    </section-wrapper>
  </container-wrapper>
</template>

<style scoped lang="sass">
@import "@/styles/_media.scss"
@import "@/styles/_colors.sass"
.timeline
  position: relative
  &__root
    position: absolute
    z-index: -1
    left: 50%
    width: 2px
    height: 100%
    background-color: $black
    &::before, &::after
      content: ""
      position: absolute
      height: 0.75rem
      width: 0.75rem
      background-color: $color-black
      border-radius: 50%
      left: calc(-0.35rem + 1px)
    &::before
      top: -0.75rem
    &::after
      bottom: 0
    @include media('<=tablet')
      left: 5rem
    @include media('<=phone')
      left: 3.5rem
</style>
