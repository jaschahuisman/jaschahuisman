<template>
  <main class="home">
    <HeaderSection />
    <ExcerptSection />
    <AboutSection />
    <TimelineSection />
    <ContactSection />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import ExcerptSection from '@/components/sections/ExcerptSection.vue';
import TimelineSection from '@/components/sections/TimelineSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import HeaderSection from '@/components/sections/HeaderSection.vue';

export default defineComponent({
  components: {
    AboutSection,
    ExcerptSection,
    TimelineSection,
    ContactSection,
    HeaderSection,
  },
});
</script>
