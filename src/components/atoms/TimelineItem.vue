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

@mixin middle($X: 0, $Y: -50%)
  position: absolute
  top: 50%
  transform: translate($X, $Y)

.timeline-item
  position: relative
  width: 100%
  &__date
    @include middle
    font-family: 'Montserrat', sans-serif
    font-size: 0.9rem
    font-weight: 500
    color: $midGray
  &__image
    @include middle(0, -50%)
    height: 3rem
  &__content
    padding-top: 2rem
    padding-bottom: 2rem
  &__title
    font-size: 1.2rem
    margin-bottom: 0.5rem
  &::after
    @include middle(0, -50%)
    content: ''
    width: 1rem
    height: 1rem
    background-color: $white
    border: 2px solid $midGray
    border-radius: 100%
  @include media('<tablet')
    &__image
      left: 4rem
    &__content
      padding-left: 8rem
    &::after
      left: 3rem
  @include media('>=tablet', '<desktop')
    &__image
      height: 4rem
      left: 6rem
    &__content
      padding-left: 12rem
    &::after
      left: 3.5rem
  @include media('>=desktop')
    width: 50%
    &--left
      &::after
        right: -0.5rem
    &--right
      transform: translateX(100%)
      &::after
        left: -0.5rem
    &__date--left
      @include middle(calc(2rem + 100%), -50%)
      right: 0
    &__date--right
      @include middle(calc(-100% - 2rem), -50%)
      left: 0
      text-align: right
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
