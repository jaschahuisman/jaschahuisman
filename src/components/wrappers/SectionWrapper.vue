<script setup lang="ts">
  defineProps<{ title?: string; titleOffset?: string }>();
</script>

<template>
  <section ref="section" class="section" role="group">
    <h2
      v-if="title"
      class="section__title"
      :style="titleOffset && 'margin-bottom:' + titleOffset"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<style lang="sass" scoped>
  .section
    padding: 4rem 0
    &__title
      margin-bottom: 1rem
      font-size: 1.75rem
      font-weight: 600
      text-align: center
</style>
