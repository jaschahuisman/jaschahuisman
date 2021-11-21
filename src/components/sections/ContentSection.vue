<script setup lang="ts">
interface IContent {
  title?: string;
  content?: string;
}
interface IContentSectionProps {
  content: IContent[];
}
defineProps<IContentSectionProps>();
</script>

<template>
  <section
    v-for="(contentItem, index) in content"
    :key="index"
    class="content-section"
  >
    <h3 v-if="contentItem.title" class="content-section__title">
      {{ contentItem.title }}
    </h3>
    <div class="content-section__content" v-html="contentItem.content" />
  </section>
</template>

<style lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.content-section
  margin-bottom: 3rem
.content-section__title
  margin-bottom: 1rem
  font-size: 1.5rem
.content-section__content
  img
    max-width: 100%
    max-height: 400px
    object-fit: cover
    margin: 1.5rem 0
  hr
    margin: 1.5rem 0
    border: none
    border-top: 1px solid $midGray
  ul
    padding-left: 1.5rem
  li
    line-height: 1.5em
    list-style-type: disc
    color: $color-heading
  p
    margin-bottom: 1rem
    @include media(">=tablet")
      width: 80%
  a
    color: $color-link
    text-decoration: underline
</style>
