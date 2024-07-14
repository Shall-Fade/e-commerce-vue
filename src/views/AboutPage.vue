<template>
  <div>
    <base-heading>
      <template v-slot:title>About Us</template>
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
              to="/about"
              class="text-[16px] font-lato text-black hover:text-pink duration-150"
            >
              About Us
            </RouterLink>
          </li>
        </ul>
      </template>
    </base-heading>
    <div class="max-w-[1170px] w-full mx-auto my-[120px]">
      <section class="flex gap-x-[30px] mb-[140px]">
        <div
          class="max-w-[570px] w-full relative before:content-[''] before:w-[555px] before:h-[410px] before:bg-[#2B3CAB] before:rounded-[6px] before:absolute"
        >
          <img
            class="relative left-[15px] w-[555px] h-[390px] rounded-[6px] object-cover z-10"
            src="/images/article-img.jpg"
            alt="Woman"
          />
        </div>
        <div class="mt-[40px] w-full">
          <h2
            class="font-bold text-[36px] leading-[48px] text-navy-blue mb-[15px]"
          >
            Know About Our Ecomerce Business, History
          </h2>
          <p
            class="font-lato text-[16px] leading-[26px] text-[#8A8FB9] mb-[70px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <button
            type="button"
            class="h-[45px] inline-flex items-center px-[30px] py-[10px] bg-pink rounded-[3px] font-lato text-[18px] leading-[26px] text-white cursor-pointer"
            @click="isContactModalOpen = true"
          >
            Contact us
          </button>
        </div>
      </section>
      <section class="mb-[140px]">
        <h2
          class="flex items-center justify-center font-bold text-black text-[42px] leading-[26px] mb-[65px]"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </li>
        </ul>
      </section>
    </div>
    <!-- Modal -->
    <div
      v-if="isContactModalOpen"
      class="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center"
    >
      <div class="relative max-w-[750px] w-full bg-off-navy-blue p-[50px]">
        <h2 class="mb-[15px] text-white text-[36px] font-bold leading-[48px]">
          Get In Touch
        </h2>
        <p class="font-lato font-semibold text-[16px] text-white mb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
          bibendum quam.
        </p>
        <form>
          <div class="grid grid-cols-2 gap-x-[25px] gap-y-[25px] mb-[35px]">
            <input
              class="w-full h-[45px] border-[1px] border-[#A4B6C8/70] rounded-[3px] pl-[10px] pr-[20px] font-lato text-[16px] text-[#8A8FB9] outline-pink"
              placeholder="Your Name*"
              required
              type="text"
            />
            <input
              class="w-full h-[45px] border-[1px] border-[#A4B6C8/70] rounded-[3px] pl-[10px] pr-[20px] font-lato text-[16px] text-[#8A8FB9] outline-pink"
              placeholder="Your E-mail"
              type="email"
            />
            <input
              class="col-span-2 w-full h-[45px] border-[1px] border-[#A4B6C8/70] rounded-[3px] pl-[10px] pr-[20px] font-lato text-[16px] text-[#8A8FB9] outline-pink"
              placeholder="Subject*"
              type="text"
            />
            <textarea
              class="col-span-2 w-full h-[170px] border-[1px] border-[#A4B6C8/70] rounded-[3px] pl-[10px] pr-[20px] pt-[17px] font-lato text-[16px] text-[#8A8FB9] outline-pink resize-none"
              placeholder="Type Your Message*"
              required
            ></textarea>
          </div>
          <button
            class="flex items-center justify-center px-[40px] h-[45px] bg-pink rounded-[3px] text-white text-[16px]"
            type="submit"
          >
            Send Mail
          </button>
        </form>
        <button
          @click="isContactModalOpen = false"
          class="absolute top-[30px] right-[30px] w-[30px] h-[30px]"
          type="button"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                fill="#fff"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                fill="#fff"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Variables
const isContactModalOpen = ref(false);
</script>
