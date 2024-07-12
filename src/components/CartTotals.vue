<template>
  <section class="w-full">
    <span
      class="block mb-[40px] text-[20px] font-bold text-navy-blue text-center"
      >Cart Totals</span
    >
    <form
      @submit.prevent="makeOrder()"
      class="px-[30px] py-[35px] bg-[#F4F4FC] rounded-[3px]"
    >
      <ul class="flex flex-col gap-y-[35px] mb-[25px]">
        <li
          class="flex items-center justify-between pb-[10px] border-b-[#E8E6F1] border-b-[2px]"
        >
          <span class="font-lato font-semibold text-[18px] text-navy-blue"
            >Subtotals:</span
          >
          <span class="font-lato text-[16px] text-navy-blue"
            >$<span>{{ calculateAmount() }}</span></span
          >
        </li>
        <li
          class="flex items-center justify-between pb-[10px] border-b-[#E8E6F1] border-b-[2px]"
        >
          <span class="font-lato font-semibold text-[18px] text-navy-blue"
            >Totals:</span
          >
          <span class="font-lato text-[16px] text-navy-blue"
            >$<span>{{ calculateAmount() }}</span></span
          >
        </li>
      </ul>
      <div class="inline-flex items-center gap-x-[7px] mb-[35px]">
        <input
          id="checkbox"
          class="w-[15px] h-[15px] cursor-pointer"
          type="checkbox"
        />
        <label
          for="checkbox"
          class="font-lato text-[12px] text-[#8A91AB] cursor-pointer"
          >Shipping & taxes calculated at checkout</label
        >
      </div>
      <button
        @click="makeOrder()"
        class="flex items-center justify-center bg-[#19D16F] rounded-[3px] font-lato font-bold text-[14px] text-white w-full h-[40px]"
        type="submit"
      >
        Proceed To Checkout
      </button>
    </form>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import router from "../router/index"

// Variables
const store = useStore();
const cart = computed(() => store.state.cart);

// Calculate the amount
function calculateAmount() {
  let amount = 0;

  for (let i = 0; i < cart.value.length; i++) {
    amount += cart.value[i].newPrice * cart.value[i].quantity;
  }

  return amount;
}

// Make an order
function makeOrder() {
  if (cart.value.length > 0) {
    cart.value.splice(0, cart.value.length);
    router.push('/order-completed');
}
}
</script>
