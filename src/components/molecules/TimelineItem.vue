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
    <img :src="image" :alt="title" :class="className('timeline-item__image')" />
    <div :class="className('timeline-item__content')">
      <h3 :class="className('timeline-item__title')">{{ title }}</h3>
      <p :class="className('timeline-item__description')">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/styles/_media.scss'
@import '@/styles/_colors.sass'

@mixin middle
  position: absolute
  top: 50%
  transform: translateY(-50%)

.timeline-item
  position: relative
  width: 100%
  &__date
    @include middle
    font-size: 0.9rem
    font-weight: 500
    color: $midGray
  &__image
    @include middle
    height: 3rem
  &__content
    padding-top: 2rem
    padding-bottom: 2rem
  &__title
    font-size: 1.2rem
    margin-bottom: 0.5rem
  @include media('<tablet')
    &__image
      left: 4rem
    &__content
      padding-left: 8rem
  @include media('>=tablet', '<desktop')
    &__image
      height: 4rem
      left: 6rem
    &__content
      padding-left: 12rem
  @include media('>=desktop')
    width: 50%
    &--right
      transform: translateX(100%)
    &__date--left
      right: 0
      transform: translateX(calc(2rem + 100%))
    &__date--right
      left: 0
      text-align: right
      transform: translateX(calc(-100% - 2rem))
    &__image
      height: 4.5rem
      &--left
        right: 1.5rem
      &--right
        left: 1.5rem
    &__content--left
      padding-right: 8rem
    &__content--right
      padding-left: 8rem
</style>
