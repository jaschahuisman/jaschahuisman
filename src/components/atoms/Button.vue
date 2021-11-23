<script setup lang="ts">
interface IButtonProps {
  size?: "small" | "normal";
  variant?: "primary" | "secondary";
  href?: string;
  newTab?: boolean;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  size: "normal",
  variant: "secondary",
  href: undefined,
  newTab: false,
});

function className(base: string) {
  const { size, variant } = props;
  return `${base} ${base}--${size} ${base}--${variant}`;
}
</script>

<template>
  <div class="button-wrapper">
    <a
      :href="href"
      :target="newTab ? '_blank' : undefined"
      :rel="newTab ? 'noreferrer noopener' : undefined"
      :class="`button button--${size} button--${variant}`"
      role="button"
    >
      <span :class="className('button__background')" />
      <span :class="className('button__text')">
        <slot />
      </span>
    </a>
  </div>
</template>

<style lang="sass">
@import '@/styles/_mixins.sass'
.button
  position: relative
  display: inline-flex
  align-items: center
  justify-content: center
  text-align: center
  padding: 1.25rem 2rem
  font-family: "Montserrat", sans-serif
  transition: 300ms
  cursor: pointer
  &::after
    @include decoration
    opacity: 1
    height: 100%
    width: 100%
    transition: 300ms
    transform: translate(-10px, -10px)
  &:hover
    transform: translate(2px, 2px)
    &::after
      transform: translate(-5px, -5px)
  &__text
    display: flex
    align-items: center
    svg:first-child
      margin-right: 1rem
    svg:not(:first-child)
      margin-left: 0.5rem
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
