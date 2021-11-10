<script setup lang="ts">
  import ContainerWrapper from "@/components/wrappers/ContainerWrapper.vue";
  import SectionWrapper from "@/components/wrappers/SectionWrapper.vue";
  import Decoration from "@/components/atoms/Decoration.vue";
</script>

<template>
  <container-wrapper class="header-container">
    <section-wrapper id="header" class="header-section" :animate="false">
      <header ref="header" class="header" role="banner">
        <span ref="headerTitle" class="header__title">
          Design & development <br />intertwined
        </span>
        <span ref="headerImage" class="header__image-wrapper">
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
      text-shadow: 1px 1px 0px white, 2px 2px 0px white, 3px 3px 0px white, 4px 4px 4px white, -1px -1px 0px white, -2px -2px 2px white
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
      object-position: 80%
    &__decoration
      width: 100%
      height: 100%
      top: 2rem
      left: -2rem
      object-fit: cover
</style>
