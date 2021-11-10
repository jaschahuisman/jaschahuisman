<script setup lang="ts">
import TimelineItem from "@/components/atoms/TimelineItem.vue";
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
  <div class="timeline">
    <span class="timeline__stem" />
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
</template>

<style scoped lang="sass">
@import "@/styles/_media.scss"
@import "@/styles/_colors.sass"

@mixin blackAbsolute
  content: ""
  position: absolute
  background-color: $black
  z-index: -1

.timeline
  position: relative
  &__stem
    @include blackAbsolute
    width: 2px
    height: 100%
    transform: translateX(-50%)
    @include media('<tablet')
      left: 3.5rem
    @include media('>=tablet', '<desktop')
      left: 4rem
    @include media('>=desktop')
      left: 50%
  &__stem::before, &__stem::after
    @include blackAbsolute
    height: 1rem
    width: 1rem
    border-radius: 100%
    transform: translateX(calc(-50% + 1px))
  &__stem::before
    top: 0
  &__stem::after
    bottom: 0
</style>
