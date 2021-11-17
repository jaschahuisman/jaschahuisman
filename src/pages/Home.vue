<script setup lang="ts">
import AboutSection from "@/components/sections/home/AboutSection.vue";
import ContactSection from "@/components/sections/home/ContactSection.vue";
import ExcerptSection from "@/components/sections/home/ExcerptSection.vue";
import HeaderSection from "@/components/sections/home/HeaderSection.vue";
import TimelineSection from "@/components/sections/home/TimelineSection.vue";
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
