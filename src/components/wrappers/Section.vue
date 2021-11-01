<template>
  <section class="section" role="group" ref="section">
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
import useAnimator from "@/components/hooks/useAnimator";

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
  setup() {
    const { animateFrom, animateTo } = useAnimator();
    return { animateFrom, animateTo };
  },
  mounted() {
    const element = this.$refs.section as HTMLElement;
    this.animateFrom(element, {
      opacity: 0,
      y: -50,
      scale: 0.95,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "60% 30%",
        scrub: true,
      },
    });
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
