<template>
  <Container class="timeline-container">
    <Section
      class="timeline-section"
      id="timeline"
      title="My skill-development-timeline"
      titleOffset="3rem"
    >
      <div class="timeline" ref="timeline">
        <span class="timeline__root" ref="timelineRoot" />
        <TimelineItem
          v-for="(timelineItem, index) in timelineItems"
          :index="index"
          :key="index"
          :title="timelineItem.title"
          :description="timelineItem.description"
          :date="timelineItem.date"
          :image="timelineItem.image"
        />
      </div>
    </Section>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/wrappers/Container.vue";
import Section from "@/components/wrappers/Section.vue";
import TimelineItem from "@/components/molecules/TimelineItem.vue";
import useAnimator from "../hooks/useAnimator";

interface ITimelineData {
  title: string;
  description: string;
  date: string;
  image: string;
}

export default defineComponent({
  name: "TimelineSection",
  components: {
    Container,
    Section,
    TimelineItem,
  },
  data(): { timelineItems: ITimelineData[] } {
    return {
      timelineItems: [
        {
          title: "Avans University of Applied Sciences",
          date: "2019",
          description:
            "Propaedeutic year Bachelor Communication and Multimedia Design",
          image: require("@/assets/img/avans.png"),
        },
        {
          title: "Handpicked Agencies",
          date: "2020",
          description:
            "Tech elaboration internship & freelance at Handpicked Labs innovation centre",
          image: require("@/assets/svg/handpicked.svg"),
        },
        {
          title: "University of the Arts Utrecht",
          date: "2021",
          description: "Minor Extended Reality",
          image: require("@/assets/svg/hku.svg"),
        },
      ],
    };
  },
  setup() {
    const { animateFrom } = useAnimator();
    return { animateFrom };
  },
  mounted() {
    const timelineElement = this.$refs.timeline as HTMLElement;
    const timelineRootElement = this.$refs.timelineRoot as HTMLElement;
    this.animateFrom(timelineRootElement, {
      height: 0,
      duration: 1,
      scrollTrigger: {
        trigger: timelineElement,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  },
});
</script>

<style lang="sass" scoped>
@import "@/styles/_media.scss"
@import "@/styles/_colors.sass"
.timeline
  position: relative
  &__root
    position: absolute
    z-index: -1
    left: 50%
    width: 2px
    height: 100%
    background-color: $black
    &::before, &::after
      content: ""
      position: absolute
      height: 0.75rem
      width: 0.75rem
      background-color: $color-black
      border-radius: 50%
      left: calc(-0.35rem + 1px)
    &::before
      top: -0.75rem
    &::after
      bottom: 0
    @include media('<=tablet')
      left: 5rem
    @include media('<=phone')
      left: 3.5rem
</style>
