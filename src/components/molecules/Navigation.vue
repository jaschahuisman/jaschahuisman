<script setup lang="ts">
import MenuItem from "@/components/atoms/MenuItem.vue";
import ContainerWrapper from "@/components/wrappers/ContainerWrapper.vue";

defineProps<{ menuItems: Array<{ label: string; href: string }> }>();
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
      margin-top: 2rem
  &__menu
    display: flex
</style>
