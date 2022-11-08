<template>
  <div class="footer">
    <div class="footer__conteiner">
      <div class="footer__items">
        <div class="footer__left-part">
          <div class="footer__title">{{ title }}</div>
            <form class="footer__form ">
              <div class="form-email" :class="{ error: v$.form.email.$errors.length }">
                <input class="form-field" placeholder="Email" type="email" v-model="v$.form.email.$model">
                <div class="email-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
              <input class="email-submit" type="submit" value="Subscribe">
            </form>
            <div class="footer__social"><SocialNetworks /></div>
        </div>
        <div class="footer__nav">
          <ul class="footer__nav-items"><MainMenu /></ul>
        </div>
      </div>
      <div class="footer__bottom"><p>{{ bottom_text }}</p></div>
    </div>
  </div>
</template>

<script>
import MainMenu from './menu/MainMenu.vue';
import SocialNetworks from './common/SocialNetworks.vue';
import useVuelidate from '@vuelidate/core';
import { required,email } from '@vuelidate/validators';

export default {
  name: 'FooterPart',
  components: {
    MainMenu,
    SocialNetworks
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      title: 'Subscribe to Our Newsletter',
      action: '/action_page.php',
      placeholder: 'Enter your email here*',
      bottom_text: '© 2022 by Tetiana Urupa',
      button_lable: 'Subscribe'
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
  @import '../../public/src/css/footer/footer.min.css';
</style>