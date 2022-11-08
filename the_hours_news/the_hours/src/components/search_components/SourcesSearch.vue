<template>
  <div class="full__bg">
    <div v-if="articles.length > 0" class="full__conteiner">
      <h2>{{ title }}</h2>
      <p class="sources-name">/{{sourceName}}</p>
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
              <p class="content-source">{{article.source.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="not-found no-source" v-else>
      <p>Source not found. Please, try another one.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';

  export default {
  name: 'SourcesSearch',
  data () {
    return {
      title: 'Search by Source',
      sourceName: useRoute().params.id,
      articles: '',
      apiUrl: 'https://newsapi.org/v2/top-headlines?',
      apiKey: 'apiKey=6da275b906bc450dbcbbabebb743c28c',
      source: 'sources=' + useRoute().params.id + '&',
      language: 'language=en&',
      pageSize: 'pageSize=20',
      currentPage: 1,
      page: 1,
      totalResults: 0,
      params: {
        apiKey: '6da275b906bc450dbcbbabebb743c28c'
      },
    }
  },
  methods: {
    getData() {
      axios.get(this.apiUrl + this.source + this.language + this.pageSize, {params: this.params})
      .then(response => {
        this.articles = response.data.articles;
      })
    },
  },
  mounted () {
    this.getData()
  }
}
</script>

<style>
  @import '../../../public/src/css/common/full_news.min.css';
  @import '../../../public/src/css/common/messages.min.css';
</style>