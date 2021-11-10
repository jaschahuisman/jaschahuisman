lea
<script setup lang="ts">
  defineProps<{ label: string; href: string }>();
</script>

<template>
  <a class="menu-item" role="listitem" :href="href" :title="label">
    {{ $props.label }}
  </a>
</template>

<style scoped lang="sass">
  .menu-item
    display: block
    margin-left: 1rem
    padding: 2rem 1rem
    color: gray
    cursor: pointer
    transition: 300ms
</style>
