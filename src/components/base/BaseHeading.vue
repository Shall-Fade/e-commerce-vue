<template>
  <div class="bg-[#F6F5FF]">
    <div class="max-w-[1170px] w-full mx-auto my-0 pt-[100px] pb-[130px]">
      <h2 class="mb-[10px] text-[36px] font-bold text-navy-blue">
        <slot></slot>
      </h2>
      <ul class="flex items-center gap-x-[5px]">
        <li>
          <a
            href="#"
            class="text-[16px] font-lato text-black hover:text-pink duration-150"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#"
            class="text-[16px] font-lato text-black hover:text-pink duration-150"
            >Page</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
