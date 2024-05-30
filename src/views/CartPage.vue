<template>
  <div>
    <base-heading>Shopping Cart</base-heading>
    <div class="flex gap-x-[80px] max-w-[1170px] w-full mx-auto mt-[140px] mb-[145px]">
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
