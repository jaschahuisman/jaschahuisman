<script setup lang="ts">
import HeaderSection from "@/components/sections/home/HeaderSection.vue";
import ExcerptSection from "@/components/sections/home/ExcerptSection.vue";
import AboutSection from "@/components/sections/home/AboutSection.vue";
import TimelineSection from "@/components/sections/home/TimelineSection.vue";
import ContactSection from "@/components/sections/home/ContactSection.vue";
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
