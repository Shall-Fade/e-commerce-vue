<template>
  <div class="font-josefin text-[16px] font-normal text-navy-blue bg-white">
    <TheHeader />
    <main>
      <!-- <MainPage /> -->
      <!-- <ProductDetailPage /> -->
      <!-- <CartPage /> -->
      <!-- <OrderCompletedPage /> -->
      <!-- <AuthPage /> -->
      <BlogPage />  
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
import AuthPage from "./views/AuthPage.vue";
import BlogPage from "./views/BlogPage.vue";
</script>
