<script setup lang="ts">
interface ITool {
  name?: string;
  href?: string;
}
interface IToolSectionProps {
  tools: ITool[];
}
defineProps<IToolSectionProps>();
</script>

<template>
  <section class="tools-section">
    <h3 class="tools-section__title">Tools used</h3>
    <ul>
      <li v-for="(tool, index) in tools" :key="index">
        <a :href="tool.href">{{ tool.name }}</a>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.tools-section
  margin-bottom: 3rem
.tools-section__title
  margin-bottom: 1.5rem
ul
  padding-left: 1.5rem
li
  text-decoration: underline
  line-height: 2em
  color: $color-dark
  list-style-type: disc
</style>
