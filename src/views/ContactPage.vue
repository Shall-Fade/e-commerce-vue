<template>
  <div>
    <base-heading>Contact Us</base-heading>
    <div
      class="grid grid-cols-2 gap-x-[100px] gap-y-[150px] max-w-[1170px] w-full mx-auto my-[120px]"
    >
      <div class="max-w-[550px] w-full">
        <h2
          class="mb-[15px] text-navy-blue text-[36px] font-bold leading-[48px]"
        >
          Information About us
        </h2>
        <p class="font-lato font-semibold text-[16px] text-[#8A8FB9] mb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <ul class="flex items-center gap-x-[15px]">
          <li>
            <a
              class="block w-[25px] h-[25px] rounded-full bg-[#5625DF]"
              href="#"
            ></a>
          </li>
          <li>
            <a
              class="block w-[25px] h-[25px] rounded-full bg-[#FF27B7]"
              href="#"
            ></a>
          </li>
          <li>
            <a
              class="block w-[25px] h-[25px] rounded-full bg-[#37DAF3]"
              href="#"
            ></a>
          </li>
        </ul>
      </div>
      <div class="max-w-[550px] w-full">
        <h2
          class="mb-[15px] text-navy-blue text-[36px] font-bold leading-[48px]"
        >
          Information About us
        </h2>
        <ul class="grid grid-cols-2 gap-x-[30px] gap-y-[50px]">
          <li class="flex items-center gap-x-[15px]">
            <span
              class="block max-w-[45px] w-full h-[45px] rounded-full bg-[#5726DF]"
            ></span>
            <div class="flex flex-col">
              <span class="font-lato font-semibold text-[16px] text-[#8A8FB9]"
                >Tel: <span>877-67-88-99</span></span
              >
              <span class="font-lato font-semibold text-[16px] text-[#8A8FB9]"
                >E-Mail: <span>shop@store.com </span></span
              >
            </div>
          </li>
          <li class="flex items-center gap-x-[15px]">
            <span
              class="block max-w-[45px] w-full h-[45px] rounded-full bg-[#FB2E86]"
            ></span>
            <div class="flex flex-col">
              <span class="font-lato font-semibold text-[16px] text-[#8A8FB9]"
                >Support Forum</span
              >
              <span class="font-lato font-semibold text-[16px] text-[#8A8FB9]"
                >For over 24hr</span
              >
            </div>
          </li>
          <li class="flex items-center gap-x-[15px]">
            <span
              class="block max-w-[45px] w-full h-[45px] rounded-full bg-[#FFB265]"
            ></span>
            <div class="flex flex-col">
              <span class="font-lato font-semibold text-[16px] text-[#8A8FB9]"
                >20 Margaret st, London</span
              >
              <span class="font-lato font-semibold text-[16px] text-[#8A8FB9]"
                >Great britain, 3NM98-LK</span
              >
            </div>
          </li>
          <li class="flex items-center gap-x-[15px]">
            <span
              class="block max-w-[45px] w-full h-[45px] rounded-full bg-[#1BE982]"
            ></span>
            <div>
              <span class="font-lato font-semibold text-[16px] text-[#8A8FB9]"
                >Free standard shipping on all orders.</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="max-w-[550px] w-full">
        <h2
          class="mb-[15px] text-navy-blue text-[36px] font-bold leading-[48px]"
        >
          Get In Touch
        </h2>
        <p class="font-lato font-semibold text-[16px] text-[#8A8FB9] mb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
          bibendum quam.
        </p>
        <form>
            <div class="grid grid-cols-2 gap-x-[35px] gap-y-[35px] mb-[35px]">
                <input class="w-full h-[45px] border-[1px] border-[#A4B6C8/70] rounded-[3px] pl-[10px] pr-[20px] font-lato text-[16px] text-[#8A8FB9] outline-pink" placeholder="Your Name*" required type="text">
                <input class="w-full h-[45px] border-[1px] border-[#A4B6C8/70] rounded-[3px] pl-[10px] pr-[20px] font-lato text-[16px] text-[#8A8FB9] outline-pink" placeholder="Your E-mail" type="email">
                <input class="col-span-2 w-full h-[45px] border-[1px] border-[#A4B6C8/70] rounded-[3px] pl-[10px] pr-[20px] font-lato text-[16px] text-[#8A8FB9] outline-pink" placeholder="Subject*" type="text">
                <textarea class="col-span-2 w-full h-[170px] border-[1px] border-[#A4B6C8/70] rounded-[3px] pl-[10px] pr-[20px] pt-[17px] font-lato text-[16px] text-[#8A8FB9] outline-pink resize-none" placeholder="Type Your Message*" required></textarea>
            </div>
            <button class="flex items-center justify-center px-[40px] h-[45px] bg-pink rounded-[3px] text-white text-[16px]" type="submit">Send Mail</button>
        </form>
      </div>
      <img class="w-full" src="/images/contact-img.png" alt="Contact Image">
    </div>
  </div>
</template>

<script setup></script>
