<template>
  <div class="font-josefin text-[16px] font-normal text-navy-blue bg-white">
    <TheHeader />
    <main>
      <RouterView />
      <!-- <MainPage /> -->
      <!-- <ProductDetailPage /> -->
      <!-- <CartPage /> -->
      <!-- <OrderCompletedPage /> -->
      <!-- <LoginPage /> -->
      <!-- <BlogPage /> -->
      <!-- <ArticlePage /> -->
      <!-- <AboutPage /> -->
      <!-- Modal -->
      <base-modal>
        <template v-slot:title>
          The product has been added to the cart
        </template>
        <template v-slot:link>
          <RouterLink
            class="mr-auto text-[15px] font-bold duration-150 hover:text-pink"
            to="/cart"
          >
            Go To Cart
          </RouterLink>
        </template>
      </base-modal>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "./layout/TheHeader.vue";
import TheFooter from "./layout/TheFooter.vue";
import MainPage from "./views/MainPage.vue";
import ProductDetailPage from "./views/ProductDetailPage.vue";
import CartPage from "./views/CartPage.vue";
import OrderCompletedPage from "./views/OrderCompletedPage.vue";
import LoginPage from "./views/LoginPage.vue";
import BlogPage from "./views/BlogPage.vue";
import ArticlePage from "./views/ArticlePage.vue";
import AboutPage from "./views/AboutPage.vue";
</script>
