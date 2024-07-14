<template>
  <div class="max-w-[1170px] w-full mx-auto mb-[80px]">
    <ul
      v-if="productView === 'grid'"
      class="grid grid-cols-4 gap-y-[80px] justify-items-start"
    >
      <li v-for="product in filteredProducts(products)">
        <base-product-card-grid v-bind:product />
      </li>
    </ul>
    <ul
      v-if="productView === 'list'"
      class="grid grid-cols-1 gap-y-[30px] justify-items-start"
    >
      <li v-for="product in filteredProducts(products)">
        <base-product-card-list v-bind:product />
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
const productName = computed(() => store.state.productName);
const productView = computed(() => store.state.productView);

// Filter products
function filteredProducts(products) {
  if (productName.value !== "") {
    return products.filter((product) =>
      product.title.toLowerCase().includes(productName.value.toLowerCase())
    );
  } else {
    return products;
  }
}
</script>
