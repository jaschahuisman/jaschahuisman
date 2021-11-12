<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "@/vendors/gsap";
import MenuItem from "@/components/atoms/MenuItem.vue";
import ContainerWrapper from "@/components/wrappers/ContainerWrapper.vue";

defineProps<{ menuItems: Array<{ label: string; href: string }> }>();

const navigationRef = ref(null);

onMounted(() => {
  const navigationElement = navigationRef.value;
  gsap.from(navigationElement, {
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    delay: 0.3,
    y: -100,
  });
});
</script>

<template>
  <container-wrapper class="navigation-container">
    <nav ref="navigationRef" class="navigation" role="navigation">
      <a class="navigation__logo" title="Home" href="/">Jascha Huisman</a>
      <div class="navigation__menu" role="list">
        <menu-item
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :label="menuItem.label"
          :href="menuItem.href"
        />
      </div>
    </nav>
  </container-wrapper>
</template>

<style scoped lang="sass">
@import "@/styles/_media.scss"
@import "@/styles/_colors.sass"
.navigation
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  height: 8rem
  width: 100%
  font-size: 1.2rem
  @include media("<=tablet")
    flex-direction: column
    justify-content: center
  &__logo
    font-size: 1.2rem
    color: $darkGray
    display: block
    font-weight: 700
    transition: 300ms
    &:hover
      color: $color-black
    @include media('<=tablet')
      padding: 1rem 0
  &__menu
    display: flex
    &__item
      display: block
      margin-left: 1rem
      padding: 2rem 1rem
      color: $midGray
      cursor: pointer
      transition: 300ms
      @include media("<=tablet")
        padding: 1rem 0
        margin: 0 1rem
      &:hover, &--active
        color: $color-black
</style>
