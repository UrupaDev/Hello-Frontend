<template>
  <div class="burger-menu">
    <button class="burger-menu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
			<span class="top"></span>
			<span class="mid"></span>
			<span class="bottom"></span>
		</button>
    <transition name="translateX">
      <nav v-show="navOpen">
        <div class="burger-menu__wrapper">
          <ul class="header__nav-items" v-on:click="navOpen=!navOpen"><MainMenu /></ul>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';

  export default {
    name: 'BurgerMenu',
    components: {
    MainMenu
  },
    data () {
      return {
        navOpen: false,
      }
    },
  }
</script>

<style>
  @import '../../../public/src/css/header/burger_menu.min.css';
</style>