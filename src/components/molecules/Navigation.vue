<template>
  <Container class="navigation-container">
    <nav class="navigation" role="navigation" ref="navigation">
      <a class="navigation__logo" title="Home" href="/">Jascha Huisman</a>
      <div class="navigation__menu" role="list">
        <a
          class="navigation__menu__item"
          role="listitem"
          v-for="menuItem in menu"
          :href="menuItem.href"
          :key="menuItem.id"
          :title="menuItem.label"
        >
          {{ menuItem.label }}
        </a>
      </div>
    </nav>
  </Container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Container from "@/components/wrappers/Container.vue";
import useAnimator from "@/components/hooks/useAnimator";

export interface IMenuItem {
  id: number;
  label: string;
  href: string;
}

export default defineComponent({
  name: "Navigation",
  components: {
    Container,
  },
  props: {
    menu: {
      type: Object as PropType<Array<IMenuItem>>,
      required: true,
    },
  },
  setup() {
    const { animateFrom, animateTo } = useAnimator();
    return { animateFrom, animateTo };
  },
  mounted() {
    const element = this.$refs.navigation as HTMLElement;
    const options = { opacity: 0, duration: 1.5, y: -100, ease: "power3.Out" };
    this.animateFrom(element, options);
  },
});
</script>

<style lang="sass" scoped>
@import "@/styles/_media.scss"
@import "@/styles/_colors.sass"
.navigation
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  height: 8rem
  width: 100%
  font-size: 1rem
  @include media("<=tablet")
    flex-direction: column
    justify-content: center
  &__logo
    font-size: 1rem
    color: $darkGray
    display: block
    font-weight: 700
    transition: 300ms
    &:hover
      color: $color-black
    @include media('<=tablet')
      padding: 1rem 0
  &__menu
    display: flex
    &__item
      display: block
      margin-left: 1rem
      padding: 2rem 1rem
      color: $midGray
      cursor: pointer
      transition: 300ms
      @include media("<=tablet")
        padding: 1rem 0
        margin: 0 1rem
      &:hover, &--active
        color: $color-black
</style>
