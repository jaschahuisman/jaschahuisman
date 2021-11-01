<template>
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 576"
    role="presentation"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <title :id="iconName" lang="en">{{ iconName }}</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
      default: 30,
    },
    height: {
      type: [Number, String],
      default: 30,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style lang="sass" scoped>
svg
  display: inline-block
  vertical-align: middle
</style>
