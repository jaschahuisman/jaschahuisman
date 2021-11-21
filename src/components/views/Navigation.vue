<script setup lang="ts">
import { menuItems } from "@/content/navigation";
</script>

<template>
  <nav class="navigation">
    <router-link to="/" class="navigation__logo">Jascha Huisman</router-link>
    <menu class="navigation__menu">
      <router-link
        v-for="(menuItem, index) in menuItems"
        :key="index"
        :to="menuItem.href"
        class="navigation__menu__item"
      >
        {{ menuItem.label }}
      </router-link>
    </menu>
  </nav>
</template>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.navigation
  @include container
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 8rem
  @include media(">=desktop")
    flex-direction: row
    justify-content: space-between
.navigation__logo
  padding: 1rem 0
  font-size: 1.2rem
  font-weight: 600
  color: $color-heading
.navigation__menu
  display: flex
  align-items: center
  &__item
    padding: 1rem
    font-weight: 500
    transition: 300ms
    &:hover
      color: $color-dark
    @include media(">=desktop")
      margin-left: 1rem
</style>
