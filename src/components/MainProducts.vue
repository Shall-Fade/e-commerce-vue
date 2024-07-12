<template>
  <div class="max-w-[1170px] w-full mx-auto mb-[80px]">
    <ul class="grid grid-cols-4 gap-y-[80px] justify-items-start">
      <li v-for="product in products">
        <base-product-card-grid v-bind:product />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

// Variables
const store = useStore();
const products = computed(() => store.state.products);
</script>
