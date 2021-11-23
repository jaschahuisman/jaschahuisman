<script setup lang="ts">
import "@/styles/main.sass";
import NavigationVue from "@/components/views/Navigation.vue";
import FooterVue from "@/components/views/Footer.vue";
</script>

<template>
  <navigation-vue />
  <router-view />
  <footer-vue />
</template>

<style lang="sass">
*, *::before, *::after
  box-sizing: border-box
  list-style: none
html, body
  margin: 0
  padding: 0
  overflow-x: hidden
p,h1,h2,h3,h4,h5,h6,ul,menu
  margin: 0
  padding: 0
</style>
