<template>
  <Container class="header-container">
    <Section class="header-section" id="header">
      <header class="header" role="banner">
        <span class="header__title"
          >Design & development <br />intertwined</span
        >
        <span class="header__image-wrapper">
          <img class="header__image" src="@/assets/img/banner.jpg" />
          <Decoration class="header__image__decoration" />
        </span>
      </header>
    </Section>
  </Container>
</template>

<script>
import { defineComponent } from "vue";
import Container from "@/components/wrappers/Container.vue";
import Section from "@/components/wrappers/Section.vue";

export default defineComponent({
  name: "HeaderSection",
  components: {
    Container,
    Section,
  },
});
</script>

<style lang="sass" scoped>
.header
  position: relative
  height: 60vh
  &__title
    position: absolute
    font-size: 2rem
    top: 45%
    left: 6rem
    font-family: 'Ubuntu', sans-serif
    font-weight: 300
    line-height: 1.25em
    z-index: 1
    letter-spacing: -0.05rem
  &__image-wrapper
    position: relative
    display: block
    float: right
    height: 100%
    width: 60%
  &__image
    width: 100%
    height: 100%
    object-fit: cover
</style>
