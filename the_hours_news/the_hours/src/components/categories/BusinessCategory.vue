<template>
  <div class="news__conteiner">
    <router-link to="/business_news"><h2>{{ title }}</h2></router-link>
    <div class="news__news">
      <div class="news__items">
        <div class="news__news-item" v-for="article in articles" :key="article.articles">
          <img v-bind:src="article.urlToImage">
          <h3>{{article.title}}</h3>
          <p class="item-description">{{article.description}}</p>
          <p class="item-data">{{article.publishedAt}}</p>
        </div>
      </div>
    </div>
    <div class="news__button">
      <router-link to="/business_news">
        <button>Show more</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
  name: 'BusinessCategory',
  data () {
    return {
      title: 'Business',
      articles: [],
      // apiUrl: 'https://newsapi.org/v2/top-headlines?',
      // apiKey: 'apiKey=f02ffdb77a9448b6980cad1459855569',
      language: 'language=en&',
      pageSize: 'pageSize=3&',
      category: 'category=business&'
    }
  },
  methods: {
    getData() {
      axios.get(this.apiUrl + this.category + this.language + this.pageSize + this.apiKey)
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
  @import '../../../public/src/css/sections/main.min.css';
</style>