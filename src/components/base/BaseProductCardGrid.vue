<template>
  <a class="group flex flex-col items-center w-[270px] bg-pantone-purple/20 hover:bg-[#EBF4F3] duration-150" href="#">
    <div class="relative flex items-center justify-center h-[280px] w-full">
      <img class="w-[200px] h-[200px]" src="" alt="" />
      <ul class="group-hover:flex hidden absolute z-10 bottom-[20px] left-[10px] flex-col items-center gap-y-[10px]">
        <li>
            <a class="flex items-center justify-center bg-white rounded-[50%] w-[30px] h-[30px]" href="#">
                <img src="../../../public/images/cart-dark-icon.svg" alt="Cart">
            </a>
        </li>
        <li>
            <button class="w-[16px] h-[16px]" type="button">
                <img src="../../../public/images/heart-dark-icon.svg" alt="Favorite">
            </button>
        </li>
      </ul>
    </div>
    <span class="block mb-[15px] text-[18px] font-bold text-navy-blue">
        Vel elit euismod
    </span>
    <div class="flex items-center gap-x-[10px] pb-[20px]">
      <span class="text-[14px] text-navy-blue">$26.00</span>
      <span class="text-[14px] text-pink line-through">$42.00</span>
    </div>
  </a>
</template>

<script setup></script>
