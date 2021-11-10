<script setup lang="ts">
import ContainerWrapper from "@/components/wrappers/ContainerWrapper.vue";
import FooterSection from "@/components/molecules/FooterSection.vue";
defineProps<{ footerSections: Array<{ title: string; text: string }> }>();
</script>

<template>
  <container-wrapper class="footer-container" max-width="1200px">
    <footer class="footer">
      <footer-section
        v-for="(footerSection, index) in footerSections"
        :key="index"
        :title="footerSection.title"
        :text="footerSection.text"
      ></footer-section>
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
  margin-bottom: 4rem
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
</style>
