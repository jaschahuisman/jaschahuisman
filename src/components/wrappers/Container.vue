<template>
  <div class="container" role="group" :style="maxWidth && 'max-width:' + maxWidth">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    maxWidth: {
      type: String,
      default: () => '900px',
    },
  },
});
</script>

<style lang="sass" scoped>
.container
    max-width: 900px
    margin: 0 auto
    padding: 0 1rem
</style>
