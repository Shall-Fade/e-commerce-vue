<template>
  <div>
    <base-heading>
      <template v-slot:title>Products</template>
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
              to="/products"
              class="text-[16px] font-lato text-black hover:text-pink duration-150"
            >
              Products
            </RouterLink>
          </li>
        </ul>
      </template>
    </base-heading>
    <base-filter></base-filter>
    <MainProducts />
  </div>
</template>

<script setup>
import MainProducts from "../components/MainProducts.vue";
</script>
