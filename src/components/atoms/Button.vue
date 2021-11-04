<template>
  <div class="button-wrapper">
    <a
      class="button"
      :class="`button--${size} button--${variant}`"
      role="button"
      :href="href"
      :target="newTab ? '_blank' : null"
      :rel="newTab ? 'noreferrer noopener' : null"
    >
      <Decoration class="button__decoration" />
      <span class="button__background"></span>
      <span class="button__text">
        <icon v-if="icon" :icon="icon" />
        <slot />
      </span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Decoration from '@/components/atoms/Decoration.vue';

interface IButtonProps {
  size: 'small' | 'normal';
  variant: 'primary' | 'secondary';
}

export default defineComponent({
  name: 'Button',
  components: {
    Decoration,
  },
  props: {
    href: {
      type: String,
      required: false,
    },
    newTab: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String as PropType<IButtonProps['size']>,
      default: function () {
        return 'normal';
      },
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    variant: {
      type: String as PropType<IButtonProps['variant']>,
      required: false,
      default: function () {
        return 'secondary';
      },
    },
  },
});
</script>

<style lang="sass">
.button
  position: relative
  display: inline-flex
  align-items: center
  justify-content: center
  text-align: center
  padding: 1.25rem 2rem
  font-family: "Montserrat", sans-serif
  transition: 300ms
  &:hover
    transform: translate(2px, 2px)
    .button__decoration
      transform: translate(-5px, -5px)
  svg
    margin-right: 0.5em
  &__decoration
    height: 100%
    width: 100%
    transition: 300ms
    transform: translate(-10px, -10px)
  &__background
    position: absolute
    height: 100%
    width: 100%
    z-index: -1
  &--normal
    font-size: 1rem
  &--small
    font-size: 0.8rem
  &--primary
    color: #f1e6ff
    .button__background
      background-color: #411e94
  &--secondary
    color: #411e94
    .button__background
      background-color: #f1e6ff
</style>
