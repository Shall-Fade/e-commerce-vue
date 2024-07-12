<template>
  <RouterLink
    @click="openProduct()"
    :to="{ path: `/products/${product.title}` }"
    class="group flex flex-col items-center w-[270px] bg-pantone-purple/20 hover:bg-[#EBF4F3] duration-150"
  >
    <div class="relative flex items-center justify-center h-[280px] w-full">
      <img class="w-[200px] h-[200px]" :src="product.img" alt="Product" />
      <ul
        class="group-hover:flex hidden absolute z-10 bottom-[20px] left-[10px] flex-col items-center gap-y-[10px]"
      >
        <li>
          <button
            @click.prevent="addCart()"
            class="flex items-center justify-center hover:bg-white rounded-[50%] w-[30px] h-[30px] cursor-pointer"
          >
            <img src="../../../public/images/cart-dark-icon.svg" alt="Cart" />
          </button>
        </li>
        <li>
          <button
            @click.prevent="addFavorite()"
            :class="[isActive ? 'bg-[red] hover:bg-[red]' : '']"
            class="flex items-center justify-center w-[30px] h-[30px] hover:bg-white rounded-[50%]"
            type="button"
          >
            <img
              src="../../../public/images/heart-dark-icon.svg"
              alt="Favorite"
            />
          </button>
        </li>
      </ul>
    </div>
    <span class="block mb-[15px] text-[18px] font-bold text-navy-blue">
      {{ product.title }}
    </span>
    <div class="flex items-center gap-x-[10px] pb-[20px]">
      <span class="text-[14px] text-navy-blue">${{ product.newPrice }}</span>
      <span class="text-[14px] text-pink line-through"
        >${{ product.oldPrice }}</span
      >
    </div>
  </RouterLink>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps, computed, ref } from "vue";

// Variables
const props = defineProps(["product"]);
const store = useStore();
const cart = computed(() => store.state.cart);
const isActive = ref(false);

// Open Product Detail
function openProduct() {
  store.commit("OPEN_PRODUCT", props.product);
}

// Add product to cart
function addCart() {
  if(!cart.value.some((item) => item.code === props.product.code)) {
    props.product.quantity = 1;
    cart.value.push(props.product);
  }
}

// Add to favorites
function addFavorite() {
  isActive.value = !isActive.value;
}
</script>
