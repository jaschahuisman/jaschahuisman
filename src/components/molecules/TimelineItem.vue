<script setup lang="ts">
const props = defineProps<{
  index: number;
  title: string;
  description: string;
  date: string;
  image: string;
}>();

function className(base: string): string {
  const position = props.index % 2 === 0 ? "left" : "right";
  return `${base} ${base}--${position}`;
}
</script>

<template>
  <div ref="timelineItem" :class="className('timeline-item')">
    <div :class="className('timeline-item__date')">{{ date }}</div>
    <img :src="image" :alt="title" class="timeline-item__image" />
    <div :class="className('timeline-item__content')">
      <h3 :class="className('timeline-item__title')">{{ title }}</h3>
      <p :class="className('timeline-item__description')">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/styles/_media.scss'
@import '@/styles/_colors.sass'
// Todo: Refactor style
</style>
