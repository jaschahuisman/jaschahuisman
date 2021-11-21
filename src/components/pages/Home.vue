<script setup lang="ts">
import HeaderSection from "@/components/sections/HeaderSection.vue";
import ExcerptSection from "@/components/sections/ExcerptSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import TimelineSection from "@/components/sections/TimelineSection.vue";
import ContactSection from "../sections/ContactSection.vue";
</script>

<template>
  <main id="home" class="homepage">
    <header-section />
    <excerpt-section />
    <about-section />
    <timeline-section />
    <contact-section />
  </main>
</template>
