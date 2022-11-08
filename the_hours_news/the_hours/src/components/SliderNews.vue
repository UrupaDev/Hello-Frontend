<template>
  <swiper class="swiper"
    :slidesPerView=1
    :modules="modules"
    :loop="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }">
    <swiper-slide v-for="article in articles" :key="article.articles">
      <h3>{{article.title}}</h3>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay} from 'swiper'
import 'swiper/css'
import axios from 'axios'

export default {
  name: 'SwiperComponent',
  components: {
    Swiper, 
    SwiperSlide
  },
  data () {
    return {
      title: 'News',
      articles: [],
      apiUrl: 'https://newsapi.org/v2/top-headlines?',
      apiKey: 'apiKey=f02ffdb77a9448b6980cad1459855569',
      source: 'source=bbc-news&',
      language: 'language=en&',
      pageSize: 'pageSize=10&',
      modules:[Autoplay]
    }
  },
  methods: {
    getData() {
      axios.get(this.apiUrl + this.source + this.language + this.pageSize + this.apiKey)
      .then(response => {
        this.articles = response.data.articles;
        console.log(response.data.articles)
      })
    },
  },
  mounted () {
    this.getData()
  }
}
</script>

<style>
  @import '../../public/src/css/home_section/slider_titles.min.css';
</style>