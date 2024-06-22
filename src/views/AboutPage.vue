<template>
  <div>
    <base-heading>About Us</base-heading>
    <div class="max-w-[1170px] w-full mx-auto my-[120px]">
      <section class="flex gap-x-[30px] mb-[140px]">
        <div class="max-w-[570px] w-full relative before:content-[''] before:w-[555px] before:h-[410px] before:bg-[#2B3CAB] before:rounded-[6px] before:absolute">
          <img class="relative left-[15px] w-[555px] h-[390px] rounded-[6px] object-cover z-10" src="/images/article-img.jpg" alt="Woman" />
        </div>
        <div class="mt-[40px] w-full">
          <h2 class="font-bold text-[36px] leading-[48px] text-navy-blue mb-[15px]">Know About Our Ecomerce Business, History</h2>
          <p class="font-lato text-[16px] leading-[26px] text-[#8A8FB9] mb-[70px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <a class="h-[45px] inline-flex items-center px-[30px] py-[10px] bg-pink rounded-[3px] font-lato text-[18px] leading-[26px] text-white" href="#">Contact us</a>
        </div>
      </section>
      <section class="mb-[140px]">
        <h2 class="flex items-center justify-center font-bold text-black text-[42px] leading-[26px] mb-[65px]">Our Features</h2>
        <ul class="grid grid-cols-4 gap-x-[30px] place-content-between">
            <li class="h-[320px] w-[270px] flex flex-col gap-y-[20px] items-center pt-[60px] pb-[45px] px-[25px] hover:border-b-[2px] hover:border-b-[#FF9100] duration-150 cursor-pointer">
                <img class="w-[65px] h-[65px]" src="/images/delivery-feature.png" alt="Delivery">
                <span class="font-semibold text-[22px] text-navy-blue text-center">Free Delivery</span>
                <p class="text-center font-lato font-bold text-[16px] leading-[26px] text-[#1A0B5B]/30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </li>
            <li class="h-[320px] w-[270px] flex flex-col gap-y-[20px] items-center pt-[60px] pb-[45px] px-[25px] hover:border-b-[2px] hover:border-b-[#FF9100] duration-150 cursor-pointer">
                <img class="w-[65px] h-[65px]" src="/images/delivery-feature.png" alt="Delivery">
                <span class="font-semibold text-[22px] text-navy-blue text-center">100% Cash Back</span>
                <p class="text-center font-lato font-bold text-[16px] leading-[26px] text-[#1A0B5B]/30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </li>
            <li class="h-[320px] w-[270px] flex flex-col gap-y-[20px] items-center pt-[60px] pb-[45px] px-[25px] hover:border-b-[2px] hover:border-b-[#FF9100] duration-150 cursor-pointer">
                <img class="w-[65px] h-[65px]" src="/images/delivery-feature.png" alt="Delivery">
                <span class="font-semibold text-[22px] text-navy-blue text-center">Quality Product</span>
                <p class="text-center font-lato font-bold text-[16px] leading-[26px] text-[#1A0B5B]/30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </li>
            <li class="h-[320px] w-[270px] flex flex-col gap-y-[20px] items-center pt-[60px] pb-[45px] px-[25px] hover:border-b-[2px] hover:border-b-[#FF9100] duration-150 cursor-pointer">
                <img class="w-[65px] h-[65px]" src="/images/delivery-feature.png" alt="Delivery">
                <span class="font-semibold text-[22px] text-navy-blue text-center">24/7 Support</span>
                <p class="text-center font-lato font-bold text-[16px] leading-[26px] text-[#1A0B5B]/30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup></script>
