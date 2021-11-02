l/* eslint-disable prettier/prettier */
<template>
  <Container class="header-container">
    <Section class="header-section" id="header">
      <header class="header" role="banner" ref="header">
        <span class="header__title" ref="headerTitle">
          Design & development <br />intertwined
        </span>
        <span class="header__image-wrapper">
          <img
            class="header__image"
            src="@/assets/img/banner.jpg"
            ref="headerImage"
          />
          <Decoration class="header__image__decoration" />
        </span>
      </header>
    </Section>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/wrappers/Container.vue";
import Section from "@/components/wrappers/Section.vue";
import Decoration from "@/components/atoms/Decoration.vue";
import useAnimator from "@/components/hooks/useAnimator";

export default defineComponent({
  name: "HeaderSection",
  components: {
    Container,
    Section,
    Decoration,
  },
  setup() {
    const { animateFrom, animateTo } = useAnimator();
    return { animateFrom, animateTo };
  },
  mounted() {
    const header = this.$refs.header as HTMLElement;
    const title = this.$refs.headerTitle as HTMLElement;
    const image = this.$refs.headerImage as HTMLElement;
    const scrollTrigger = {
      trigger: header,
      start: "90% center",
      end: "150% center",
      scrub: 1,
    };
    this.animateTo(title, { opacity: 0, x: -50, scrollTrigger });
    this.animateTo(image, { opacity: 0, x: 50, scrollTrigger });
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
