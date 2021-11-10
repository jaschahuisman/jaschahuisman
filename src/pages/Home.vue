<script setup lang="ts">
import AboutSection from "@/components/sections/AboutSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import ExcerptSection from "@/components/sections/ExcerptSection.vue";
import HeaderSection from "@/components/sections/HeaderSection.vue";
import TimelineSection from "@/components/sections/TimelineSection.vue";
import { timelineItems } from "@/content/timeline";
</script>

<template>
  <main id="home" class="home">
    <header-section />
    <excerpt-section />
    <about-section />
    <timeline-section :timeline-items="timelineItems" />
    <contact-section />
  </main>
</template>
