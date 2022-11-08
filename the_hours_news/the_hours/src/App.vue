<template>
  <header><HeaderPart /></header>
  <section><RouterPage /></section>
  <footer><FooterPart /></footer>
</template>

<script>
import HeaderPart from '@/components/HeaderPart.vue';
import RouterPage from '@/components/RouterPage.vue';
import FooterPart from '@/components/FooterPart.vue';

export default {
  name: 'App',
  components: {
    HeaderPart,
    RouterPage,
    FooterPart
  },
  data () {
    return {
      
    }
  },
}
</script>

<style>
  @import '/node_modules/reset-css/reset.css';
  @import './../public/src/css/common/general.min.css';
  @import './../public/src/css/common/fonts.min.css';
</style>
