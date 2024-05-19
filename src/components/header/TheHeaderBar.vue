<template>
  <div class="bg-purple py-[14px]">
    <div
      class="max-w-[1170px] w-full my-0 mx-auto flex items-center justify-between"
    >
      <ul class="flex items-center gap-x-[50px]">
        <li>
          <a
            class="flex items-center gap-x-[10px] text-[16px] font-semibold text-white"
            href="mailto:mhhasanul@gmail.com"
          >
            <span class="w-[16px] h-[16px]">
              <img src="../../../public/images/email-icon.svg" alt="E-mail" />
            </span>
            <span>mhhasanul@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-x-[10px] text-[16px] font-semibold text-white"
            href="tel:1234567890"
          >
            <span class="w-[16px] h-[16px]">
              <img src="../../../public/images/phone-icon.svg" alt="Phone" />
            </span>
            <span>(12345)67890</span>
          </a>
        </li>
      </ul>
      <ul class="flex items-center gap-x-[15px]">
        <li class="flex items-center">
          <button class="flex items-center gap-x-[5px]" type="button">
            <span class="text-[16px] font-semibold text-white">English</span>
            <span class="w-[16px] h-[16px]">
                <img src="../../../public/images/angle-down-icon.svg" alt="Angle Down">
            </span>
          </button>
        </li>
        <li class="flex items-center">
          <button class="flex items-center gap-x-[5px]" type="button">
            <span class="text-[16px] font-semibold text-white">USD</span>
            <span class="w-[16px] h-[16px]">
                <img src="../../../public/images/angle-down-icon.svg" alt="Angle Down">
            </span>
          </button>
        </li>
        <li class="flex items-center">
          <a class="flex items-center gap-x-[5px]" href="#">
            <span class="text-[16px] font-semibold text-white">Login</span>
            <span class="w-[16px] h-[16px]">
                <img src="../../../public/images/user-icon.svg" alt="User Icon">
            </span>
          </a>
        </li>
        <li class="flex items-center">
          <a class="flex items-center gap-x-[5px]" href="#">
            <span class="text-[16px] font-semibold text-white">Wishlist</span>
            <span class="w-[16px] h-[16px]">
                <img src="../../../public/images/heart-icon.svg" alt="Heart Icon">
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="w-[24px] h-[24px]">
                <img src="../../../public/images/cart-icon.svg" alt="Cart">
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
