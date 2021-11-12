<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "@/vendors/gsap";

const props = withDefaults(
  defineProps<{ title?: string; titleOffset?: string; animate?: boolean }>(),
  { title: undefined, titleOffset: undefined, animate: true },
);

const sectionRef = ref(null);

onMounted(() => {
  const sectionElement = sectionRef.value;
  if (props.animate === true) {
    gsap.from(sectionElement, {
      opacity: 0,
      y: 80,
      scale: 0.95,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionElement,
        start: "top 90%",
        end: "60% 30%",
        scrub: true,
      },
    });
  }
});
</script>

<template>
  <section ref="sectionRef" class="section" role="group">
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

<style scoped lang="sass">
.section
  padding: 4rem 0
  &__title
    margin-bottom: 1rem
    font-size: 1.75rem
    font-weight: 600
    text-align: center
</style>
