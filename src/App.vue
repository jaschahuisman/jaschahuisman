<template>
  <Navigation :menu="menu" />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation, { IMenuItem } from "@/components/molecules/Navigation.vue";
import Footer from "@/components/molecules/Footer.vue";
import "@/styles/main.sass";

export default defineComponent({
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      menu: [
        { id: 0, label: "About", href: "/#about" },
        { id: 1, label: "Contact", href: "/#contact" },
      ] as IMenuItem[],
    };
  },
});
</script>

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
</style>
