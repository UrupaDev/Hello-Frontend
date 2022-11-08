<template>
  <a v-bind:href="facebook" target="_blank"><i class="fa-brands fa-facebook-f"></i></a> 
  <a v-bind:href="twetter" target="_blank"><i class="fa-brands fa-twitter"></i></a>
  <a v-bind:href="youtube" target="_blank"><i class="fa-brands fa-youtube"></i></a>
  <a v-bind:href="instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
</template>

<script>

export default {
  name: 'SocialNetworks',
  data () {
    return {
      facebook: 'https://www.facebook.com/',
      twetter: 'https://twitter.com/',
      youtube: 'https://www.youtube.com/',
      instagram: 'https://www.instagram.com/'
    }
  }
}
</script>

<style>
  @import '../../../public/src/css/common/social_networks.min.css';
</style>