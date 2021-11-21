<script setup lang="ts">
interface ISectionProps {
  title?: string;
  titleOffset?: string;
}

withDefaults(defineProps<ISectionProps>(), {
  title: undefined,
  titleOffset: "2rem",
});
</script>

<template>
  <section class="section">
    <h2
      v-if="title"
      class="section__title"
      :style="'margin-bottom:' + titleOffset"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<style scoped lang="sass">
@import '@/styles/_media.scss'
@import '@/styles/_mixins.sass'
.section
  @include section
.section__title
  text-align: center
  font-size: 1.7rem
</style>
