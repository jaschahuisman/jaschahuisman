<template>
  <section class="section" role="group">
    <h2
      class="section__title"
      v-if="title"
      :style="titleOffset && 'margin-bottom:' + titleOffset"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Section",
  props: {
    title: {
      type: String,
      required: false,
    },
    titleOffset: {
      type: String,
      required: false,
    },
  },
});
</script>

<style lang="sass" scoped>
.section
  padding: 4rem 0
  &__title
    margin-bottom: 1rem
    font-size: 1.75rem
    font-weight: 600
    text-align: center
</style>
