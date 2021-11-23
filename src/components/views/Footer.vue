<script setup lang="ts">
import { ref, onMounted } from "vue";
import { footerSections } from "@/content/footer";
import { footerAnimations } from "@/content/animations";

const footerRef = ref<Element>();
const footerSectionRefs = ref<Element[]>([]);

onMounted(() => {
  footerAnimations(footerRef.value as Element, footerSectionRefs.value);
});
</script>

<template>
  <footer ref="footerRef" class="footer">
    <div
      v-for="({ title, text, component }, index) in footerSections"
      :ref="(element) => footerSectionRefs.push(element as Element)"
      :key="index"
      class="footer__section"
    >
      <h3 class="footer__section__title">{{ title }}</h3>
      <p class="footer__section__text">{{ text }}</p>
      <component :is="component" />
    </div>
  </footer>
</template>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.footer
  @include container(1200px)
  display: grid
  justify-content: center
  grid-template-columns: repeat(1, 1fr)
  grid-gap: 4rem
  padding-top: 4rem
  paddding-bottom: 4rem
  margin-top: 2rem
  margin-bottom: 8rem
  text-align: center
  @include media("<desktop")
    max-width: 500px
  @include media(">=desktop")
    justify-content: normal
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 1rem
    margin-top: 3rem
    margin-bottom: 4rem
    text-align: left
.footer__section
  &__title
    margin-bottom: 0.5rem
    @include media(">=desktop")
      margin-bottom: 1rem
  &__text
    &:not(:last-child)
      margin-bottom: 2.5rem
</style>
