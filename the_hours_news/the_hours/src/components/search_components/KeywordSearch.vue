<template>
  <form class="search-form">
    <i class="fa-solid fa-magnifying-glass search-icon"></i>
    <input type="text" v-model="query" class="search">
    <select v-model="category" class="category-list">
      <option disabled value="">category</option>
      <option value="">all</option>
      <option>business</option>
      <option>entertainment</option>
      <option>sport</option>
      <option>general</option>
      <option>health</option>
      <option>science</option>
      <option>technology</option>
    </select>
    <select v-model="country" class="country-list">
      <option disabled value="">country</option>
      <option value="">all</option>
      <option value="us">United States</option>
      <option value="gb">United Kingdom</option>
      <option value="au">Australia</option>
    </select>
    <input class="button" type="button" value="Search" v-on:click="articlesSearch">
  </form>
  <div class="full__bg">
    <div class="full__conteiner">
      <vue-awesome-paginate v-if="(query || category) && articles.length > 1"
      :total-items="totalResults"
      :items-per-page="20"
      :max-pages-shown="2"
      v-model="currentPage"
      :on-click="onClickHandler"
      />
      <div class="full__news">
        <div v-if="query || category" class="full__items">
          <div class="full__news-item" v-for="article in articles" :key="article.articles">
            <img v-bind:src="article.urlToImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felitebba.com%2Fhome%2Fdefault-image%2F&psig=AOvVaw07IWnEzbAn51SC4N44YTLE&ust=1667944236825000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjphNCGnfsCFQAAAAAdAAAAABAE'" alt="news-image">
            <div class="full__news-content">
              <h2 class="content-title">{{article.title}}</h2>
              <p class="content-description">{{article.description}}</p>
              <p class="content-content">{{article.content}}</p>
              <div class="content-link">
                <p>Read more:</p>
                <a :href="article.url" target="_blank">{{article.url}}</a>
              </div>
              <router-link v-bind:to="'/source/' + article.source.id">
                <p class="content-source">{{article.source.name}}</p>
              </router-link>
              <p class="content-data">{{article.publishedAt}}</p>
            </div>
          </div>
        </div>
        <div v-else class="not-found please-enter">
          <p>Please, enter something</p>
        </div>
        <div v-if="articles.length < 0" class="not-found no-results">
          <p>No search results</p>
        </div>
      </div>
      <vue-awesome-paginate v-if="(query || category || country) && articles.length > 1"
      :total-items="totalResults"
      :items-per-page="20"
      :max-pages-shown="3"
      v-model="currentPage"
      :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<script>

import axios from 'axios';

  export default {
  name: 'KeywordSearch',
  data () {
    return {
      articles: [],
      apiUrl: 'https://newsapi.org/v2/top-headlines?',
      apiKey: 'apiKey=bb2ddab65a0947ab961c943ca927373c',
      language: '&language=en&',
      pageSize: 'pageSize=20',
      currentPage: 1,
      page: 1,
      totalResults: 0,
      query: '',
      category: '',
      country: '',
      params: {
        apiKey: 'bb2ddab65a0947ab961c943ca927373c'
      },
    }
  },
  methods: {
    articlesSearch() {
      this.params.query = this.query;
      axios.get(this.apiUrl + 'q=' + this.query + '&category=' + this.category + '&country=' + this.country + this.language + this.pageSize 
               + '&sortBy=' + this.sort, {params: this.params})
          .then(response => {
            this.articles = response.data.articles;
            this.totalResults = response.data.totalResults;
            this.page = response.data.page;
          })
          .catch(e => {
            this.error = e;
          })
    },
    onClickHandler(page)  {
      this.page = page;
      this.params.page = page;
      this.articlesSearch();
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style>
  @import "vue-awesome-paginate/dist/style.css";
  @import '../../../public/src/css/common/pagination.min.css';
  @import '../../../public/src/css/common/full_news.min.css';
  @import '../../../public/src/css/search_items/keyword_search.min.css';
</style>