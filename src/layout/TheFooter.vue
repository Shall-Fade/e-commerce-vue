<template>
  <footer class="bg-[#EEEFFB]">
    <div class="max-w-[1170px] w-full mx-auto my-0 py-[100px]">
      <div class="grid grid-cols-10 gap-x-[70px]">
        <ul class="col-span-4 max-w-[400px] w-full">
          <li class="mb-[30px]">
            <span class="block text-navy-blue text-[38px] font-bold">
              Hekto
            </span>
          </li>
          <li class="mb-[25px]">
            <form
              class="flex max-w-[380px] w-full h-[40px] border-white border-[2px] rounded-[3px] bg-white"
            >
              <input
                class="pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-[16px] font-lato placeholder:text-[#8A8FB9] w-full outline-none"
                type="email"
                placeholder="Enter Email Address"
              />
              <button
                class="flex items-center justify-center max-w-[135px] w-full rounded-[3px] bg-pink cursor-pointer text-[16px] font-medium text-white h-full"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </li>
          <li>
            <span class="block mb-[10px] font-lato text-[16px] text-[#8A8FB9]"
              >Contact Info</span
            >
            <span class="font-lato text-[16px] text-[#8A8FB9]"
              >17 Princess Road, London, Greater London NW1 8JR, UK</span
            >
          </li>
        </ul>
        <div class="col-span-2">
          <span class="block mb-[40px] text-[22px] font-semibold text-black"
            >Categories</span
          >
          <ul class="flex flex-col gap-y-[20px]">
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Laptops & Computers</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Cameras & Photography</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Smart Phones & Tablets</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Video Games & Consoles</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Waterproof Headphones</a
              >
            </li>
          </ul>
        </div>
        <div class="col-span-2">
          <span class="block mb-[40px] text-[22px] font-semibold text-black"
            >Customer Care</span
          >
          <ul class="flex flex-col gap-y-[20px]">
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >My Account</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Discount</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Returns</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Orders History</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Order Tracking</a
              >
            </li>
          </ul>
        </div>
        <div class="col-span-2">
          <span class="block mb-[40px] text-[22px] font-semibold text-black"
            >Pages</span
          >
          <ul class="flex flex-col gap-y-[20px]">
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150">Blog</a>
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Browse the Shop</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Category</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Pre-Built Pages</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >Visual Composer Elements</a
              >
            </li>
            <li>
              <a href="#" class="font-lato text-[16px] text-[#8A8FB9] hover:text-pink duration-150"
                >WooCommerce Pages</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <TheFooterBar />
  </footer>
</template>

<script setup>
import TheFooterBar from "../components/footer/TheFooterBar.vue";
</script>
