<template>
  <span class="decoration" :style="`background-image: url(${image})`" />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Decoration",
  data() {
    return {
      image: require("@/assets/svg/decoration.svg"),
    };
  },
});
</script>

<style lang="sass" scoped>
.decoration
    position: absolute
    display: block
    height: 100%
    width: 100%
    pointer-events: none
    z-index: -100
</style>
