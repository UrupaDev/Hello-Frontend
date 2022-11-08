import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/router";
import VueAwesomePaginate from "vue-awesome-paginate";

createApp(App)
    .use(router)
    .use(VueAwesomePaginate)
    .mount('#app')

// // default image 
// function DefaultImage() {
// let images = document.querySelectorAll('img');
// images.forEach(img => {
//   img.addEventListener('error', function handleError() {
//     let defaultImage = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f9203f43012225.57e05eb56b036.png';
//     img.src = defaultImage;
//     img.alt = 'default';
//   });
// })
// }
