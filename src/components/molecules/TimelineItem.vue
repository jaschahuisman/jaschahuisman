<template>
  <div
    class="timeline-item"
    ref="timelineItem"
    :position="index % 2 === 0 ? 'left' : 'right'"
  >
    <div class="timeline-item__date">{{ date }}</div>
    <img :src="image" :alt="title" class="timeline-item__image" />
    <div class="timeline-item__content">
      <h3 class="timeline-item__title">{{ title }}</h3>
      <p class="timeline-item__description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAnimator from "@/components/hooks/useAnimator";

export default defineComponent({
  name: "TimelineItem",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    index: { type: Number, required: true },
  },
  setup() {
    const { animateFrom } = useAnimator();
    return { animateFrom };
  },
  mounted() {
    const element = this.$refs.timelineItem as HTMLElement;
    this.animateFrom(element, {
      opacity: 0,
      top: -10,
      duration: 1,
      delay: this.index * 0.5,
      scrollTrigger: {
        trigger: element.parentElement,
        start: "10% 50%",
        end: "bottom top",
      },
    });
  },
});
</script>

<style lang="sass" scoped>
@import '@/styles/_media.scss'
@import '@/styles/_colors.sass'
.timeline-item
    position: relative
    width: 50%
    &__date
        display: inline-block
        position: absolute
        top: calc(50% - 0.5rem)
        width: 50%
        color: $midGray
        font-weight: 500
        font-size: 0.85rem
        letter-spacing: 1px
        z-index: 1
    &__image
        display: inline-block
        position: absolute
        top: calc(50% - 2rem)
        height: 4rem
        width: 4rem
        font-size: 18px
        border-radius: 40px
        z-index: 1
    &__content
        padding: 2rem 8rem 2rem 0rem
        position: relative
    &__title
        font-size: 1.2rem
        font-weight: 500
        margin-bottom: 0.5rem
    &::after
        content: ''
        position: absolute
        width: 16px
        height: 16px
        top: calc(50% - 8px)
        right: -9px
        background: $white
        border: 2px solid $color-black
        border-radius: 1rem
        z-index: 1
    @include media('<=tablet')
        width: 100%
        padding-left: 13rem
.timeline-item[position=left]
    left: 0
    .timeline-item__date
        left: calc(100% + 2em)
        text-align: left
    .timeline-item__image
        right: 2.5rem
.timeline-item[position=right]
    left: 50%
    .timeline-item__date
        right: calc(100% + 2em)
        text-align: right
    .timeline-item__image
        left: 2.5rem
    .timeline-item__content
        padding: 2rem 0rem 2rem 8rem
    &::after
        left: -7px
    @include media('<=tablet')
        left: 0%
.timeline-item[position=left],
.timeline-item[position=right]
    @include media('<=tablet')
        .timeline-item__content
            padding: 2rem 0
        .timeline-item__date
            right: auto
            text-align: left
            left: 0px
            padding-left: 1rem
        .timeline-item__image
            right: auto
            left: 6rem
        &::after
            left: calc(5rem - 0.5rem)
    @include media('<=phone')
        padding-left: 11rem
        .timeline-item__image
            left: 5rem
        .timeline-item__date
            padding: 0
        &::after
            left: calc(5rem - 2rem)
</style>
