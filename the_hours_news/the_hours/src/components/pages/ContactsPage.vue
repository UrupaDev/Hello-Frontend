<template>
  <div class="home">
    <div class="home__title">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <div class="about__image">
      <img src="../../../public/src/img/contacts.webp" alt="man"/>
    </div>
    <div class="home__slider">
      <div class="home__slider-wrapper">
        <p class="home__slider-lable">{{ sliderLable }}</p>
      </div>
    </div>
  </div>
  <div class="contacts__conteiner">
    <div class="contacts__items">
      <h2>{{ contacts_title }}</h2>
      <div class="contacts__content">
        <div  class="content-items">
          <div class="content-item">
            <p class="item-lable">{{ contactLable1 }}</p>
            <a class="item-data" :href="email">{{ emailData }}</a>
          </div>
          <div class="content-item">
            <p class="item-lable">{{ contactLable2 }}</p>
            <a class="item-data" :href="phone">{{ phoneData }}</a>
          </div>
          <div class="content-item">
            <p class="item-lable">{{ contactLable3 }}</p>
            <div class="contacts__social">
              <SocialNetworks />
            </div>
          </div>
        </div>
        <form class="contacts__form">
          <input class="form-field" type="text" placeholder="Name">
          <div class="form-email" :class="{ error: v$.form.email.$errors.length }">
            <input class="form-field" placeholder="Email" type="email" v-model="v$.form.email.$model">
            <div class="email-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <input class="form-field" type="text" placeholder="Phone">
          <textarea type="text" placeholder="Massage"></textarea>
          <input class="form-field submit" type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SocialNetworks from '../common/SocialNetworks.vue'; 
import useVuelidate from '@vuelidate/core';
import { required,email } from '@vuelidate/validators';

  export default {
  name: 'ContactsPage',
  components: {
    SocialNetworks
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      title: 'TheHours',
      subtitle: 'News & Opinion Blog',
      sliderLable: 'Contacts',
      backLink: '#back_home',
      contacts_title: 'Looking for more information? Get in touchwith us today.',
      contactLable1: 'Email:',
      contactLable2: 'Phone:',
      contactLable3: 'Follow:',
      email: 'mailto:info@mysite.com',
      emailData: 'info@mysite.com',
      phone: 'tel:+351932324581',
      phoneData: '+351932324581',
      form: {
        email: ''
      }
    }
  },
  validations() {
    return {
      form: {
        email: { required, email },
      },
    }
  },
}
</script>

<style>
  @import '../../../public/src/css/sections/contacts.min.css';
</style>