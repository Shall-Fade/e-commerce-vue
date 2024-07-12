import { createWebHistory, createRouter } from "vue-router";

import MainPage from "../views/MainPage.vue";
import AboutPage from "../views/AboutPage.vue";
import BlogPage from "../views/BlogPage.vue";
import ArticlePage from "../views/ArticlePage.vue";
import CartPage from "../views/CartPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ProductPage from "../views/ProductPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import OrderCompletedPage from "../views/OrderCompletedPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegistrationPage from "../views/RegistrationPage.vue";

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
      path: "/blog/:id",
      component: ArticlePage,
    },
    {
      path: "/cart",
      component: CartPage,
    },
    {
      path: "/contact",
      component: ContactPage,
    },
    {
      path: "/products",
      component: ProductPage,
    },
    {
      path: "/products/:id",
      component: ProductDetailPage,
    },
    {
      path: "/order-completed",
      component: OrderCompletedPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/registration",
      component: RegistrationPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
