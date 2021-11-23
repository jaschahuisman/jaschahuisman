<script setup lang="ts">
import { ref, onMounted } from "vue";
import { timelineItems } from "@/content/timeline";
import { timelineAnimations } from "@/content/animations";
import TimelineItem from "@/components/molecules/TimelineItem.vue";

const timelineRef = ref<Element>();
const timelineStemRef = ref<Element>();
const timelineItemRefs = ref<Element[]>([]);

onMounted(() => {
  timelineAnimations(
    timelineRef.value as Element,
    timelineStemRef.value as Element,
    timelineItemRefs.value as Element[],
  );
});
</script>

<template>
  <div class="timeline-container">
    <section-wrapper
      class="timeline-section"
      title="My skill-development timeline"
      title-offset="3rem"
    >
      <div ref="timelineRef" class="timeline">
        <span ref="timelineStemRef" class="timeline__stem" />
        <div
          v-for="(timelineItem, index) in timelineItems"
          :key="index"
          :ref="(timelineElement) => timelineItemRefs.push(timelineElement as Element)"
        >
          <timeline-item :timeline-item="timelineItem" :index="index" />
        </div>
      </div>
    </section-wrapper>
  </div>
</template>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"

@mixin blackAbsolute
  content: ""
  position: absolute
  background-color: $black
  z-index: -1
.timeline-container
  @include container
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
