<template>
  <div class="font-josefin text-[16px] font-normal text-navy-blue bg-white">
    <TheHeader />
    <main>
      <!-- <MainPage /> -->
      <!-- <ProductDetailPage /> -->
      <CartPage />
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
</script>
