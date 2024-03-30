<template>
  <section-wrapper
    id="contact"
    class="contact-section"
    title="Feel free to reach out"
    title-offset="3rem"
  >
    <div class="contact">
      <img src="@/assets/img/avatar.webp" alt="Avatar" class="contact__image" />
      <div class="contact__info">
        <h3 class="contact__title">Jascha Huisman</h3>
        <h3 class="contact__subtitle">Creative developer</h3>
        <ul>
          <li class="contact__list-item" role="listitem">
            <icon-mdi-at class="icon" />
            <a href="mailto:info@jaschahuisman.nl">info@jaschahuisman.nl </a>
            <br/>
            <a href="mailto:jascha.huisman@gmail.com">jascha.huisman@gmail.com </a>
          </li>
          <li class="contact__list-item" role="listitem">
            <icon-mdi-phone class="icon" />
            <a href="tel:+31-06-11808827">+31 6 11808827 </a>
          </li>
          <li class="contact__list-item" role="listitem">
            <icon-mdi-company class="icon" />
            Dordrecht, the Netherlands
          </li>
        </ul>
      </div>
    </div>
  </section-wrapper>
</template>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_media.scss"
@import "@/styles/_mixins.sass"
.contact-section
  position: relative
  @include container(500px)
  &::after
    @include decoration
    top: 0
    width: 100%
    height: 100%
    left: 50%
.contact
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  @include media(">=tablet")
    flex-direction: row
    align-items: flex-start
    text-align: unset
.contact__image
  height: 140px
  width: 140px
  margin-bottom: 2rem
  border-radius: 100%
  @include media(">=tablet")
    margin-bottom: 0
    margin-right: 2rem
.contact__info
  display: flex
  flex-direction: column
.contact__title
  font-size: 1.75rem
  margin-bottom: 0.5rem
  font-family: "Ubuntu",sans-serif
.contact__subtitle
  font-size: 1.25rem
  margin-bottom: 2rem
  font-weight: 400
  color: $color-paragraph
  font-family: "Ubuntu",sans-serif
.contact__list-item
  display: flex
  align-items: center
  margin-bottom: 0.5rem
  line-height: 1.5rem
  vertical-align: middle
  color: $color-dark
  .icon
    color: $color-light
    margin-right: 1rem
</style>
