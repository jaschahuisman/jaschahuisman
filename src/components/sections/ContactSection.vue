<template>
  <Container class="contact-container">
    <Section class="contact-section" id="contact" title="Feel free to reach out" titleOffset="3rem">
      <div class="contact">
        <div class="contact__card" role="group">
          <img src="@/assets/img/avatar.webp" alt="Avatar" class="contact__card__image" />
          <Decoration class="contact__card__decoration" />
          <div class="contact__card__info-wrapper">
            <h3 class="contact__card__title">Jascha Huisman</h3>
            <h3 class="contact__card__subtitle">Creative developer</h3>
            <ul class="contact__card__list" role="list">
              <li class="contact__card__list__item" role="listitem">
                <a href="mailto:info@jaschahuisman.nl">
                  <icon class="icon" icon="at" />
                  info@jaschahuisman.nl
                </a>
              </li>
              <li class="contact__card__list__item" role="listitem">
                <a href="tel:+31-06-11808827">
                  <icon class="icon" icon="phone-alt" />
                  +31 6 11808827
                </a>
              </li>
              <li class="contact__card__list__item" role="listitem">
                <icon class="icon" icon="city" />
                Dordrecht, the Netherlands
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Decoration from '@/components/atoms/Decoration.vue';

export default defineComponent({
  components: { Decoration },
});
</script>

<style lang="sass" scoped>
@import '@/styles/_media.scss'
.contact__card
  position: relative
  display: flex
  padding: 2em
  max-width: 500px
  margin: 0 auto
  &__image
    object-fit: cover
    height: 100px
    width: 100px
    border-radius: 100%
    margin-right: 2rem
    margin-bottom: 2rem
  &__title
    font-family: "Ubuntu",sans-serif
    font-size: 1.75rem
    margin-bottom: 0.5rem
  &__subtitle
    font-family: "Ubuntu",sans-serif
    font-size: 1.25rem
    font-weight: 400
    margin-bottom: 1rem
    color: #878787
  &__list
    padding: 0
    &__item
      line-height: 1.5rem
      vertical-align: middle
      display: flex
      align-items: center
      margin-bottom: 0.5rem
      .icon
        margin-right: 1rem
        color: #d7d7d7
  &__decoration
    top: 0
    width: 100%
    height: 100%
    left: 50%
  @include media("<=tablet")
    flex-direction: column
    align-items: center
    justify-content: center
</style>
