<script setup lang="ts">
import { icons } from "@/application/content/social";
</script>

<template>
  <div>
    <ul>
      <li v-for="(icon, index) in icons" :key="index">
        <a
          :href="icon.href"
          :title="icon.alt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <component :is="icon.icon" :color="icon.color" :alt="icon.alt" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
@import "@/styles/_media.scss"
ul
  margin: 0
  display: flex
  justify-content: center
  @include media(">=desktop")
    justify-content: left
li
  font-size: 1.5rem
  margin: 0 0.5rem
  transition: 300ms
  @include media(">=desktop")
    margin-left: 0rem
    margin-right: 1rem
li:hover
  transform: scale(1.1)
</style>
