<template>
  <div class="full__bg">
    <div class="full__conteiner">
      <h2>{{ title }}</h2>
      <vue-awesome-paginate
      :total-items="totalResults"
      :items-per-page="20"
      :max-pages-shown="3"
      v-model="currentPage"
      :on-click="onClickHandler"
      />
      <div class="full__news">
        <div class="full__items">
          <div class="full__news-item" v-for="article in articles" :key="article.articles">
            <img v-bind:src="article.urlToImage">
            <div class="full__news-content">
              <h2 class="content-title">{{article.title}}</h2>
              <p class="content-description">{{article.description}}</p>
              <p class="content-content">{{article.content}}</p>
              <div class="content-link">
                <p>Read more:</p>
                <a :href="article.url" target="_blank">{{article.url}}</a>
              </div>
              <p class="content-data">{{article.publishedAt}}</p>
              <div></div>
              <router-link v-bind:to="'/source/' + article.source.id"><p class="content-source">{{article.source.name}}</p></router-link>
            </div>
          </div>
        </div>
      </div>
      <vue-awesome-paginate
      :total-items="totalResults"
      :items-per-page="21"
      :max-pages-shown="3"
      v-model="currentPage"
      :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
  name: 'EntertainmentItems',
  data () {
    return {
      title: 'Business News',
      articles: [],
      // apiUrl: 'https://newsapi.org/v2/top-headlines?',
      // apiKey: '&apiKey=f02ffdb77a9448b6980cad1459855569',
      currentPage: 1,
      page: 1,
      totalResults: 0,
      params: {
        apiKey: 'f02ffdb77a9448b6980cad1459855569'
      }
    }
  },
  methods: {
    getData() {
      axios.get('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&pageSize=21',  {params: this.params})
      .then(response => {
        this.articles = response.data.articles;
        this.totalResults = response.data.totalResults;
        this.page = response.data.page;
      })
    },
    onClickHandler (page) {
      this.page = page;
      this.params.page = page;
      this.getData();
      this.articles.scrollTop = 0;
    },
    // default image 
    DefaultImage() {
    let images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('error', function handleError() {
        let defaultImage = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f9203f43012225.57e05eb56b036.png';
        img.src = defaultImage;
        img.alt = 'default';
      });
    })
    },
  },
  mounted () {
    this.getData()
  },
}
</script>

<style>
  @import '../../../public/src/css/common/full_news.min.css';
  @import 'vue-awesome-paginate/dist/style.css';
  @import '../../../public/src/css/common/pagination.min.css';
</style>