<template>
  <div class="header">
    <div class="header__conteiner">
      <div class="header__items">
        <router-link to="/search" class="header__search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </router-link>
        <div class="header__nav">
          <ul class="header__nav-items"><MainMenu /></ul>
        </div>
        <div class="header__social"><SocialNetworks /></div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from './menu/MainMenu.vue';
import SocialNetworks from './common/SocialNetworks.vue';

export default {
  name: 'HeaderPart',
  components: {
    MainMenu,
    SocialNetworks
  },
  data () {
    return {
      langLink: '/'
    }
  }
}
</script>

<style>
  @import '../../public/src/css/header/header.min.css';
</style>