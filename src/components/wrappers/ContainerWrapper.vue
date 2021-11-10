<script setup lang="ts">
defineProps<{ maxWidth?: string }>();
</script>

<template>
  <div
    class="container"
    role="group"
    :style="maxWidth && 'max-width:' + maxWidth"
  >
    <slot />
  </div>
</template>

<style scoped lang="sass">
.container
    max-width: 900px
    margin: 0 auto
    padding: 0 1rem
</style>
