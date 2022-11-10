<template>
  <div class="home">
    <div class="home__title">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <div class="home__video">
      <video src="../../public/src/video/people-walking.mp4" loop autoplay></video>
    </div>
    <div class="home__slider">
      <div class="home__slider-wrapper">
        <p class="home__slider-lable">{{ sliderLable }}</p>
        <div><SliderNews /></div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderNews from './SliderNews.vue';

  export default {
    name: 'HomeSection',
    components: {
      SliderNews
  },
    data () {
    return {
      title: 'TheHours',
      subtitle: 'News & Opinion Blog',
      sliderLable: 'Breaking News:'
    }
  }
}
</script>

<style>
  @import '../../public/src/css/home_section/home.min.css';
</style>