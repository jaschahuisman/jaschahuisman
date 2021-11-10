<script setup lang="ts">
import AboutSection from "@/components/sections/AboutSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import ExcerptSection from "@/components/sections/ExcerptSection.vue";
import HeaderSection from "@/components/sections/HeaderSection.vue";
import TimelineSection from "@/components/sections/TimelineSection.vue";
</script>

<template>
  <main id="home" class="home">
    <header-section />
    <excerpt-section />
    <about-section />
    <timeline-section />
    <contact-section />
  </main>
</template>
