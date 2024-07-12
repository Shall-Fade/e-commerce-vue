<template>
  <div>
    <base-heading>
      <template v-slot:title>Cart</template>
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
              to="/cart"
              class="text-[16px] font-lato text-black hover:text-pink duration-150"
            >
              Cart
            </RouterLink>
          </li>
        </ul>
      </template>
    </base-heading>
    <div
      class="flex gap-x-[80px] max-w-[1170px] w-full mx-auto mt-[140px] mb-[145px]"
    >
      <CartList />
      <div class="flex flex-col gap-y-[35px] max-w-[370px] w-full">
        <CartTotals />
        <CartCalculator />
      </div>
    </div>
  </div>
</template>

<script setup>
import CartCalculator from "../components/CartCalculator.vue";
import CartList from "../components/CartList.vue";
import CartTotals from "../components/CartTotals.vue";
</script>
