import { createWebHistory, createRouter } from "vue-router";

import MainPage from "../views/MainPage.vue"
import AboutPage from "../views/AboutPage.vue"
import BlogPage from "../views/BlogPage.vue"
import CartPage from "../views/CartPage.vue"
import ContactPage from "../views/ContactPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
    {
      path: "/blog",
      component: BlogPage,
    },
    {
      path: "/cart",
      component: CartPage,
    },
    {
      path: "/contact",
      component: ContactPage,
    },
  ],
});

export default router;
