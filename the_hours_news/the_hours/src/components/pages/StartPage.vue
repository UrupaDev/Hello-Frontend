<template>
  <section><HomeSection/></section>
  <section><AllCategory /></section>
  <section class="section__bg"><BusinessCategory /></section>
  <section><EntertainmentCategory /></section>
  <section class="section__bg"><SportCategory /></section>
</template>

<script>
import HomeSection from '../HomeSection.vue';
import AllCategory from '../categories/AllCategory.vue';
import BusinessCategory from '../categories/BusinessCategory.vue';
import EntertainmentCategory from '../categories/EntertainmentCategory.vue';
import SportCategory from '../categories/SportCategory.vue';

  export default {
  name: 'StartPage',
  components: {
    HomeSection,
    AllCategory,
    BusinessCategory,
    EntertainmentCategory,
    SportCategory
  },

}
</script>

<style>
  @import '../../../public/src/css/sections/main.min.css';
</style>