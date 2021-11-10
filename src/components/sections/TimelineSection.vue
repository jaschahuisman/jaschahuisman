<script setup lang="ts">
import ContainerWrapper from "@/components/wrappers/ContainerWrapper.vue";
import SectionWrapper from "@/components/wrappers/SectionWrapper.vue";
import Timeline from "@/components/molecules/Timeline.vue";
import { timelineItems } from "@/content/timeline";
</script>

<template>
  <container-wrapper class="timeline-container">
    <section-wrapper
      id="timeline"
      class="timeline-section"
      title="My skill-development-timeline"
      title-offset="3rem"
    >
      <timeline :timeline-items="timelineItems" />
    </section-wrapper>
  </container-wrapper>
</template>
