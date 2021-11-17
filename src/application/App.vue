<script setup lang="ts">
import "@/styles/main.sass";
import Navigation from "@/components/molecules/Navigation.vue";
import Footer from "@/components/molecules/Footer.vue";
import { footerSections } from "@/content/footer";
import { menuItems } from "@/content/navigation";
</script>

<template>
  <navigation :menu-items="menuItems" />
  <router-view />
  <Footer :footer-sections="footerSections" />
</template>

<style lang="sass">
*, *::before, *::after
  box-sizing: border-box
  list-style: none
html, body
  margin: 0
  padding: 0
  overflow-x: hidden
p,h1,h2,h3,h4,h5,h6
  margin: 0
ul
  padding: 0
</style>
