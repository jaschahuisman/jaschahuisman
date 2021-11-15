<script setup lang="ts">
import gsap from "@/vendors/gsap";
import { ref, onMounted } from "vue";
import Decoration from "@/components/atoms/Decoration.vue";

const headerRef = ref(null);
const headerTitleRef = ref(null);
const headerImageRef = ref(null);

onMounted(() => {
  const headerElement = headerRef.value;
  const headerTitleElement = headerTitleRef.value;
  const headerImageElement = headerImageRef.value;

  const timelineIn = gsap.timeline({
    defaults: {
      duration: 1,
      delay: 0.2,
      ease: "power2.inOut",
    },
  });
  const timelineOut = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: headerElement,
        start: "0 25%",
        end: "bottom top",
        scrub: true,
      },
    },
  });

  timelineIn.from(headerElement, { y: 20, opacity: 0 });
  timelineOut
    .to(headerTitleElement, { y: -10, opacity: 0 })
    .to(headerImageElement, { rotateX: 10, y: -50, opacity: 0 });
});
</script>

<template>
  <container-wrapper class="header-container">
    <section-wrapper id="header" class="header-section" :animate="false">
      <header ref="headerRef" class="header" role="banner">
        <span ref="headerTitleRef" class="header__title">
          Design & development <br />intertwined
        </span>

        <span ref="headerImageRef" class="header__image-wrapper">
          <img
            class="header__image"
            alt="Jascha Huisman"
            src="@/assets/img/banner.jpg"
          />
          <Decoration class="header__decoration" />
        </span>
      </header>
    </section-wrapper>
  </container-wrapper>
</template>

<style scoped lang="sass">
@import "@/styles/_media.scss"
.header-section
  padding-top: 2rem
.header
  width: 100%
  &__title
    display: block
    font-size: 3.5rem
    font-weight: 600
    margin-bottom: 4rem
  &__image-wrapper
    position: relative
    display: block
    height: 400px
    width: 50%
    transform: translateX(100%)
  &__image
    height: 100%
    width: 100%
    position: absolute
    object-fit: cover
  &__decoration
    top: -20px
    left: -20px
  @include media("<=tablet")
    &__title
      font-size: 2.5rem
      text-align: center
    &__image-wrapper
      width: 100%
      transform: unset
    &__image
      right: 0
      object-position: 90%
</style>
