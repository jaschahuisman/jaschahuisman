<script setup lang="ts">
interface ILink {
  label?: string;
  link?: string;
}
interface ILinkSectionProps {
  links: ILink[];
}
defineProps<ILinkSectionProps>();
</script>

<template>
  <section class="links-section">
    <h3 class="links-section__title">Links</h3>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.link">{{ link.label || link.link }}</a>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.links-section
  margin-bottom: 3rem
.links-section__title
  margin-bottom: 1.5rem
ul
  padding-left: 1.5rem
li
  text-decoration: underline
  line-height: 2em
  color: $color-dark
  list-style-type: disc
a
  color: $color-link
</style>
