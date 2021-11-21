<script setup lang="ts">
interface IAssociation {
  company?: string;
  href?: string;
  image?: string;
}
interface IAssociationSectionProps {
  associations: IAssociation[];
}
defineProps<IAssociationSectionProps>();
</script>

<template>
  <section class="association-section">
    <h3 class="association-section__title">Associations</h3>
    <div class="association-section__associations">
      <a
        v-for="(association, index) in associations"
        :key="index"
        :href="association.href"
        class="association-section__association"
      >
        <img
          :src="association.image"
          :alt="association.company"
          class="association-section__image"
        />
        <span class="association-section__company">
          {{ association.company }}
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.association-section
  margin-bottom: 3rem
.association-section__title
  margin-bottom: 1.5rem
.association-section__associations
  display: flex
  flex-wrap: wrap
  overflow-x: scroll
.association-section__association
  display: flex
  align-items: center
  margin-right: 1rem
  margin-bottom: 1rem
  padding: 0.75rem 1rem
  border: 1px solid $midGray
  border-radius: 0.5rem
  transition: 300ms
  &:hover
    border-color: $darkGray
    color: $darkGray
.association-section__image
  height: 2rem
  object-fit: cover
  margin-right: 1rem
.association-section__company
  font-size: 0.9rem
  margin-right: 0.5rem
</style>
