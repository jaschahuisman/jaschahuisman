<script setup lang="ts">
import { ref, onMounted } from "@vue/runtime-core";
import gsap from "@/vendors/gsap";
import ContainerWrapper from "@/components/wrappers/ContainerWrapper.vue";
import FooterSection from "@/components/molecules/FooterSection.vue";

defineProps<{
  // Todo: fix any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  footerSections: Array<{ title: string; text: string; component: any }>;
}>();

const footerRef = ref(null);
const footerElements: Array<Element | unknown> = [];

onMounted(() => {
  const footerElement = footerRef.value;
  gsap.from(footerElements, {
    opacity: 0,
    duration: 1,
    delay: 0.2,
    y: -20,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: footerElement,
      start: "top 90%",
      end: "bottom 90%",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<template>
  <container-wrapper class="footer-container" max-width="1200px">
    <footer ref="footerRef" class="footer">
      <div
        v-for="(footerSection, index) in footerSections"
        :key="index"
        :ref="(footerElement) => footerElements.push(footerElement)"
      >
        <footer-section
          :title="footerSection.title"
          :text="footerSection.text"
          :component="footerSection.component"
        />
      </div>
    </footer>
  </container-wrapper>
</template>

<style scoped lang="sass">
@import "@/styles/_media.scss"
.footer
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 2rem
  margin-top: 2rem
  margin-bottom: 8rem
  @include media("<=1200px", ">phone")
    padding: 0 1.5rem
  @include media("<=tablet")
    grid-template-columns: repeat(1, 1fr)
    justify-content: center
    text-align: center
    grid-gap: 5rem
  @include media("<=tablet", ">phone")
    grid-template-columns: repeat(1, 1fr)
    width: 90%
    margin: 0 auto
    margin-bottom: 6rem
</style>
