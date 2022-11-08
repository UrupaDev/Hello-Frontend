<template>
  <li class="nav-item"> 
    <router-link to="/">{{ menu.menuItem1 }}</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/about">{{ menu.menuItem2 }}</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/allnews">{{ menu.menuItem3 }}</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/contacts">{{ menu.menuItem4 }}</router-link>
  </li>
</template>

<script>
  export default {
    name: 'MainMenu',
    data () {
      return {
        menu: {
          menuItem1: 'Home',
          menuItem2: 'About',
          menuItem3: 'All News',
          menuItem4: 'Contacts'
        }
      }
    }
  }
</script>

<style>
  @import '../../../public/src/css/common/menu.min.css';
</style>