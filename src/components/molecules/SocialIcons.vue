<script setup lang="ts">
import { icons } from "@/content/social";
</script>

<template>
  <div>
    <ul>
      <li v-for="(icon, index) in icons" :key="index">
        <a
          :href="icon.href"
          target="_blank"
          rel="noopener noreferrer"
          :title="icon.alt"
        >
          <component :is="icon.icon" :color="icon.color" :alt="icon.alt" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
ul
  margin: 0
  display: flex
li
  font-size: 1.5rem
  margin-right: 1rem
  transition: 300ms
li:hover
  transform: scale(1.1)
</style>
