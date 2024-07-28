<template>
  <div>
    <base-heading>
      <template v-slot:title>Wishlist</template>
      <template v-slot:breadcrumbs>
        <ul class="flex items-center gap-x-[10px]">
          <li
            class="flex items-center gap-x-[10px] after:w-[5px] after:h-[5px] after:rounded-full after:bg-pink last:after:hidden"
          >
            <RouterLink
              to="/"
              class="text-[16px] font-lato text-black hover:text-pink duration-150"
            >
              Home
            </RouterLink>
          </li>
          <li
            class="flex items-center gap-x-[10px] after:w-[5px] after:h-[5px] after:rounded-full after:bg-pink last:after:hidden"
          >
            <RouterLink
              to="/wishlist"
              class="text-[16px] font-lato text-black hover:text-pink duration-150"
            >
              Wishlist
            </RouterLink>
          </li>
        </ul>
      </template>
    </base-heading>
    <div
      class="flex gap-x-[80px] max-w-[1170px] w-full mx-auto mt-[140px] mb-[145px]"
    >
      <ul v-if="wishlist.length > 0" class="flex flex-col gap-y-[30px]">
        <li v-for="product in wishlist">
          <base-product-card-list v-bind:product="product"></base-product-card-list>
        </li>
      </ul>
      <div v-else class="flex flex-col items-center justify-center gap-y-[10px] w-full">
        <span class="text-[32px] font-bold">You have not added products to your favorites.</span>
        <span class="text-[20px]">Go to the store's page and select the product you like</span>
        <RouterLink to="/products" class="rounded-[2px] bg-pink px-[24px] py-[14px] font-semibold text-[17px] text-white mt-[50px]">Shop Now</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

// Variables
const store = useStore();
const wishlist = computed(() => store.state.wishlist);
</script>
