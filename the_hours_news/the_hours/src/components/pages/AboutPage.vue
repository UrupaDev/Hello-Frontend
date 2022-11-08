<template>
  <div class="home">
    <div class="home__title">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <div class="about__image">
      <img src="../../../public/src/img/about.webp" alt="man"/>
    </div>
    <div class="home__slider">
      <div class="home__slider-wrapper">
        <p class="home__slider-lable">{{ sliderLable }}</p>
      </div>
    </div>
  </div>
  <div class="about__conteiner">
    <div class="about__items">
      <h3 class="about__title">{{ about_title }}</h3>
      <p class="about__content">{{ about_text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'AboutPage',
  components: {

  },
  data () {
    return {
      title: 'TheHours',
      subtitle: 'News & Opinion Blog',
      sliderLable: 'About Us',
      backLink: '#back_home',
      about_title: 'Quality news, where you want it, when you want it.',
      about_text: 'The Hours was founded in July 1889. Ever since, the Journal has led the way in chronicling the rise of industries in America and around the world. In no other period of human history has the planet witnessed changes so dramatic or swift. The Journal has covered the births and deaths of tens of thousands of companies; the creation of new industries such as autos, aerospace, oil and entertainment; two world wars and numerous other conflicts; profound advances in science and technology; revolutionary social movements; the rise of consumer economies in the U.S. and abroad; and the fitful march of globalization.'
    }
  },
}
</script>

<style>
  @import '../../../public/src/css/sections/about.min.css';
</style>