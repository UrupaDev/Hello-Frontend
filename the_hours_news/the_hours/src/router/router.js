import { createWebHistory, createRouter } from "vue-router";
import StartPage from "@/components/pages/StartPage.vue";
import AboutPage from "@/components/pages/AboutPage.vue";
import ContactsPage from "@/components/pages/ContactsPage.vue";
import AllItems from "@/components/full_content/AllItems.vue";
import BusinessItems from "@/components/full_content/BusinessItems.vue";
import EntertainmentItems from "@/components/full_content/EntertainmentItems.vue";
import SportItems from "@/components/full_content/SportItems.vue";
import SourcesSearch from "@/components/search_components/SourcesSearch.vue";
import KeywordSearch from "@/components/search_components/KeywordSearch.vue";

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/contacts',
    name: 'ContactsPage',
    component: ContactsPage
  },
  {
    path: '/allnews',
    name: 'AllItems',
    component: AllItems
  },
  {
    path: '/business_news',
    name: 'BusinessItems',
    component: BusinessItems
  },
  {
    path: '/entertainment_news',
    name: 'EntertainmentItems',
    component: EntertainmentItems
  },
  {
    path: '/sport_news',
    name: 'SportItems',
    component: SportItems
  },
  {
    path: '/source/:id',
    name: 'SourcesSearch',
    component: SourcesSearch
  },
  {
    path: '/search',
    name: 'KeywordSearch',
    component: KeywordSearch
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;