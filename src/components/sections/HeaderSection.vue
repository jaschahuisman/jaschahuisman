<script setup lang="ts">
import { ref, onMounted } from "vue";
import { headerAnimations } from "@/application/helpers/animations";
import Decoration from "@/components/atoms/Decoration.vue";

const headerRef = ref<Element>();
const headerTitleRef = ref<Element>();
const headerImageRef = ref<Element>();

onMounted(() => {
  headerAnimations(
    headerRef.value as Element,
    headerTitleRef.value as Element,
    headerImageRef.value as Element,
  );
});
</script>

<template>
  <header ref="headerRef" class="header-section" role="banner">
    <h1 ref="headerTitleRef" class="header-section__title">
      Design & development <br />intertwined
    </h1>
    <span ref="headerImageRef" class="header-section__image-wrapper">
      <img
        class="header-section__image"
        alt="Jascha Huisman"
        src="@/assets/img/banner.jpg"
      />
      <Decoration class="header-section__decoration" />
    </span>
  </header>
</template>

<style scoped lang="sass">
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.header-section
    @include section
    @include container
    display: flex
    flex-direction: column
    padding-top: 2rem
    text-align: center
    min-height: 70vh
    @include media(">=desktop")
      text-align: left
.header-section__title
  font-size: 2.5rem
  margin-bottom: 3rem
  @include media(">=desktop")
    font-size: 3.5rem
.header-section__image-wrapper
  position: relative
  width: 100%
  height: 400px
  @include media(">=tablet")
    width: 50%
    margin: 0 auto
  @include media(">=desktop")
    margin-left: auto
    margin-right: unset
.header-section__image
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%
  object-fit: cover
  object-position: 90%
.header-section__decoration
  top: -20px
  left: -20px
</style>
