<template>
  <div>
    <!-- Main Slider -->
    <section class="bg-[#F2F0FF] h-[660px] mb-[130px]">
      <swiper
        class="swiper-wrapper-main h-full"
        :slides-per-view="1"
        :space-between="30"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="[Autoplay, Pagination, A11y]"
      >
        <swiper-slide v-for="item in 5" :key="item">
          <div class="flex justify-between items-center max-w-[1170px] w-full mx-auto my-0 h-full">
            <div>
              <span class="block text-[16px] leading-[28px] text-pink font-lato mb-[12px]">Best Furniture For Your Castle....</span>
              <h2 class="max-w-[650px] w-full text-black text-[53px] font-bold tracking-[1.5%] mb-[12px]">New Furniture Collection Trends in 2020</h2>
              <p class="max-w-[560px] w-full font-lato text-[16px] text-[#8A8FB9] mb-[25px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
                adipiscing in phasellus non in justo.
              </p>
              <RouterLink to="/products" class="max-w-[160px] w-full h-[50px] flex items-center justify-center bg-pink text-white rounded-[2px] text-[17px]" href="#">Shop Now</RouterLink>
            </div>
            <img class="w-[500px]" src="/images/product-img.png" alt="Product1">
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <!-- Featured Products Section -->
    <section class="max-w-[1170px] w-full mx-auto my-0 h-full mb-[130px]">
      <h2
        class="flex items-center justify-center font-bold text-navy-blue text-[42px] leading-[26px] mb-[50px]"
      >
        Featured Products
      </h2>
      <swiper
        class="swiper-wrapper-products"
        :slides-per-view="4"
        :space-between="30"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="[Autoplay, Pagination, A11y]"
      >
        <swiper-slide v-for="product in products">
          <base-product-card-grid v-bind:product />
        </swiper-slide>
      </swiper>
    </section>
    <!-- Features Section -->
    <section class="max-w-[1170px] w-full mx-auto my-0 h-full mb-[140px]">
      <h2
        class="flex items-center justify-center font-bold text-navy-blue text-[42px] leading-[26px] mb-[50px]"
      >
        Our Features
      </h2>
      <ul class="grid grid-cols-4 gap-x-[30px] place-content-between">
        <li
          class="h-[320px] w-[270px] flex flex-col gap-y-[20px] items-center pt-[60px] pb-[45px] px-[25px] hover:border-b-[2px] hover:border-b-[#FF9100] duration-150 cursor-pointer"
        >
          <img
            class="w-[65px] h-[65px]"
            src="/images/delivery-feature.png"
            alt="Delivery"
          />
          <span class="font-semibold text-[22px] text-navy-blue text-center"
            >Free Delivery</span
          >
          <p
            class="text-center font-lato font-bold text-[16px] leading-[26px] text-[#1A0B5B]/30"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </li>
        <li
          class="h-[320px] w-[270px] flex flex-col gap-y-[20px] items-center pt-[60px] pb-[45px] px-[25px] hover:border-b-[2px] hover:border-b-[#FF9100] duration-150 cursor-pointer"
        >
          <img
            class="w-[65px] h-[65px]"
            src="/images/delivery-feature.png"
            alt="Delivery"
          />
          <span class="font-semibold text-[22px] text-navy-blue text-center"
            >100% Cash Back</span
          >
          <p
            class="text-center font-lato font-bold text-[16px] leading-[26px] text-[#1A0B5B]/30"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </li>
        <li
          class="h-[320px] w-[270px] flex flex-col gap-y-[20px] items-center pt-[60px] pb-[45px] px-[25px] hover:border-b-[2px] hover:border-b-[#FF9100] duration-150 cursor-pointer"
        >
          <img
            class="w-[65px] h-[65px]"
            src="/images/delivery-feature.png"
            alt="Delivery"
          />
          <span class="font-semibold text-[22px] text-navy-blue text-center"
            >Quality Product</span
          >
          <p
            class="text-center font-lato font-bold text-[16px] leading-[26px] text-[#1A0B5B]/30"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </li>
        <li
          class="h-[320px] w-[270px] flex flex-col gap-y-[20px] items-center pt-[60px] pb-[45px] px-[25px] hover:border-b-[2px] hover:border-b-[#FF9100] duration-150 cursor-pointer"
        >
          <img
            class="w-[65px] h-[65px]"
            src="/images/delivery-feature.png"
            alt="Delivery"
          />
          <span class="font-semibold text-[22px] text-navy-blue text-center"
            >24/7 Support</span
          >
          <p
            class="text-center font-lato font-bold text-[16px] leading-[26px] text-[#1A0B5B]/30"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </li>
      </ul>
    </section>
    <section class="bg-[#F1F0FF] mb-[130px]">
      <div
        class="flex items-center gap-x-[50px] max-w-[1170px] w-full mx-auto my-0 h-full py-[50px]"
      >
        <img class="w-[450px]" src="/images/product-img.png" alt="Product1" />
        <div class="max-w-[550px]">
          <h2 class="text-navy-blue font-bold text-[35px] mb-[30px]">
            Unique Features Of leatest & Trending Poducts
          </h2>
          <ul class="flex flex-col gap-y-[10px] mb-[45px]">
            <li
              class="flex items-center gap-x-[12px] font-lato font-medium text-[#ACABC3] before:w-full before:max-w-[11px] before:h-[11px] before:bg-[#F52B70] before:rounded-full"
            >
              All frames constructed with hardwood solids and laminates
            </li>
            <li
              class="flex items-center gap-x-[12px] font-lato font-medium text-[#ACABC3] before:w-full before:max-w-[11px] before:h-[11px] before:bg-[#2B2BF5] before:rounded-full"
            >
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li
              class="flex items-center gap-x-[12px] font-lato font-medium text-[#ACABC3] before:w-full before:max-w-[11px] before:h-[11px] before:bg-[#2BF5CC] before:rounded-full"
            >
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>
          <RouterLink
            class="rounded-[2px] bg-pink px-[24px] py-[14px] font-semibold text-[17px] text-white"
            to="/products"
            >Go To Products</RouterLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useStore } from "vuex";
import { computed } from "vue";

// Variables
const store = useStore();
const products = computed(() => store.state.products);
</script>