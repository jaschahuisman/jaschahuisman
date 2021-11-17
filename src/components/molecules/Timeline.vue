<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "@/vendors/gsap";
import TimelineItem from "@/components/molecules/TimelineItem.vue";

defineProps<{
  timelineItems: Array<{
    title: string;
    description: string;
    date: string;
    image: string;
  }>;
}>();

const timelineRef = ref(null);
const timelineStemRef = ref(null);
const timelineElements: Array<Element | unknown> = [];

onMounted(() => {
  const timelineElement = timelineRef.value;
  const timelineStemElement = timelineStemRef.value;
  const trigger = {
    trigger: timelineElement,
    start: "top 50%",
    end: "bottom 50%",
  };
  gsap.from(timelineElements, {
    opacity: 0,
    y: -70,
    duration: 1.5,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      ...trigger,
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(timelineStemElement, {
    opacity: 0,
    height: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      ...trigger,
      scrub: true,
    },
  });
});
</script>

<template>
  <div ref="timelineRef" class="timeline">
    <span ref="timelineStemRef" class="timeline__stem" />
    <div
      v-for="(timelineItem, index) in timelineItems"
      :key="index"
      :ref="(timelineElement) => timelineElements.push(timelineElement)"
    >
      <timeline-item
        :index="index"
        :title="timelineItem.title"
        :description="timelineItem.description"
        :date="timelineItem.date"
        :image="timelineItem.image"
      />
    </div>
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
