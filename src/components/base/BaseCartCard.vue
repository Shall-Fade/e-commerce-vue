<template>
  <div
    class="grid grid-cols-5 justify-items-center items-center py-[15px] border-b-[#E1E1E4] border-b-[1px]"
  >
    <div class="col-span-2 flex items-start first:justify-self-start">
      <div class="relative mr-[15px]">
        <img
          class="w-[90px] h-[90px] rounded-[3px]"
          :src="product.img"
          :alt="product.title"
        />
        <button
          @click="removeFromCart()"
          class="absolute right-[-5px] top-[-5px] flex items-center justify-center w-[12px] h-[12px] rounded-[50%] bg-black hover:bg-pink duration-150"
          type="button"
        >
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8002 1.19995L1.2002 4.79995"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.2002 1.19995L4.8002 4.79995"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <ul class="flex flex-col gap-y-[6px]">
        <li>
          <span class="text-[14px] text-black">{{ product.title }}</span>
        </li>
        <li v-if="product.color" class="flex items-center">
          <span class="text-[12px] text-[#A1A8C1]">Color:</span>
          <span class="text-[14px] text-[#A1A8C1]">{{ product.color }}</span>
        </li>
        <li v-if="product.size" class="flex items-center">
          <span class="text-[12px] text-[#A1A8C1]">Size:</span>
          <span class="text-[14px] text-[#A1A8C1]">{{ product.size }}</span>
        </li>
      </ul>
    </div>
    <span class="text-[14px] text-navy-blue"
      >$<span>{{ product.newPrice }}</span></span
    >
    <div class="flex items-center h-[15px]">
      <button
        @click="reduceQuantity()"
        class="flex items-center justify-center bg-[#E7E7EF] w-[12px] h-full"
        type="button"
      >
        <svg
          width="7"
          height="2"
          viewBox="0 0 7 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H5.66667"
            stroke="#BEBFC2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <span
        class="flex items-center justify-center w-[25px] h-full bg-[#F0EFF2] text-[#BEBFC2] text-[12px]"
        >{{ product.quantity }}</span
      >
      <button
        @click="increaseQuantity()"
        class="flex items-center justify-center bg-[#E7E7EF] w-[12px] h-full"
        type="button"
      >
        <svg
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.625 1V6.25"
            stroke="#BEBFC2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 3.625H6.25"
            stroke="#BEBFC2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <span class="text-[14px] text-navy-blue last:justify-self-end"
      >$<span>{{ product.newPrice * product.quantity }}</span></span
    >
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps, computed } from "vue";

// Variables
const props = defineProps(["product"]);
const store = useStore();
const cart = computed(() => store.state.cart);

// Remove an item from cart
function removeFromCart() {
  cart.value.splice(cart.value.findIndex(item => item === props.product), 1)
}

// Reduce the quantity
function reduceQuantity() {
  if(props.product.quantity > 1) {
    props.product.quantity--;
  }
}

// Increase the quantity
function increaseQuantity() {
  props.product.quantity++;
}
</script>
