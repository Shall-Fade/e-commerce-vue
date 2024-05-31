<template>
  <aside class="max-w-[270px] w-full">
    <!-- Search Block -->
    <div class="mb-[50px]">
      <span class="block mb-[15px] font-semibold text-[22px] text-navy-blue">Search</span>
      <div class="relative flex items-center w-full h-[40px] border-[#BDBDD8] border-[1px] rounded-[2px]">
        <input class="w-full h-full py-[10px] pl-[10px] pr-[25px] outline-none font-lato text-[14px]" type="text" placeholder="Search For Posts" />
        <span class="pr-[25px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="#CBCBE0"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9996 14L11.0996 11.1"
                stroke="#CBCBE0"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
        </span>
      </div>
    </div>
    <!-- Categories Block -->
    <div class="mb-[35px]">
        <span class="block mb-[25px] font-semibold text-[22px] text-navy-blue">Categories</span>
        <ul class="grid grid-cols-2 gap-[10px]">
            <a class="text-[14px] rounded-[3px] flex items-center p-[8px] hover:bg-pink hover:text-white duration-150 bg-pink text-white" href="#">Hobbies (14)</a>
            <a class="text-[14px] text-[#3F509E] rounded-[3px] flex items-center p-[8px] hover:bg-pink hover:text-white duration-150" href="#">Women (21)</a>
            <a class="text-[14px] text-[#3F509E] rounded-[3px] flex items-center p-[8px] hover:bg-pink hover:text-white duration-150" href="#">Women (21)</a>
            <a class="text-[14px] text-[#3F509E] rounded-[3px] flex items-center p-[8px] hover:bg-pink hover:text-white duration-150" href="#">Women (21)</a>
            <a class="text-[14px] text-[#3F509E] rounded-[3px] flex items-center p-[8px] hover:bg-pink hover:text-white duration-150" href="#">Women (21)</a>
            <a class="text-[14px] text-[#3F509E] rounded-[3px] flex items-center p-[8px] hover:bg-pink hover:text-white duration-150" href="#">Women (21)</a>
        </ul>
    </div>
    <!-- Recent Post Block -->
    <div class="mb-[35px]">
        <span class="block mb-[35px] font-semibold text-[22px] text-navy-blue">Recent Post</span>
        <ul class="flex flex-col gap-y-[20px]">
            <li class="w-full">
                <a class="flex max-w-[250px] w-full h-[50px]" href="#">
                    <img class="w-[70px] h-[50px] mr-[5px]" src="" alt="">
                    <div class="flex flex-col gap-x-[5px] overflow-hidden">
                        <span class="text-[14px] text-[#3F509E] truncate">It is a long established fact</span>
                        <span class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</span>
                    </div>
                </a>
            </li>
            <li class="w-full">
                <a class="flex max-w-[250px] w-full h-[50px]" href="#">
                    <img class="w-[70px] h-[50px] mr-[5px]" src="" alt="">
                    <div class="flex flex-col gap-x-[5px] overflow-hidden">
                        <span class="text-[14px] text-[#3F509E] truncate">It is a long established fact</span>
                        <span class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</span>
                    </div>
                </a>
            </li>
            <li class="w-full">
                <a class="flex max-w-[250px] w-full h-[50px]" href="#">
                    <img class="w-[70px] h-[50px] mr-[5px]" src="" alt="">
                    <div class="flex flex-col gap-x-[5px] overflow-hidden">
                        <span class="text-[14px] text-[#3F509E] truncate">It is a long established fact</span>
                        <span class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</span>
                    </div>
                </a>
            </li>
            <li class="w-full">
                <a class="flex max-w-[250px] w-full h-[50px]" href="#">
                    <img class="w-[70px] h-[50px] mr-[5px]" src="" alt="">
                    <div class="flex flex-col gap-x-[5px] overflow-hidden">
                        <span class="text-[14px] text-[#3F509E] truncate">It is a long established fact</span>
                        <span class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <!-- Sale Product Block -->
    <div class="mb-[35px]">
        <span class="block mb-[35px] font-semibold text-[22px] text-navy-blue">Sale product</span>
        <ul class="flex flex-col gap-y-[20px]">
            <li class="w-full">
                <a class="flex max-w-[250px] w-full h-[50px]" href="#">
                    <img class="w-[70px] h-[50px] mr-[5px]" src="" alt="">
                    <div class="flex flex-col gap-x-[5px] overflow-hidden">
                        <span class="text-[14px] text-[#3F509E] truncate">It is a long established fact</span>
                        <span class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</span>
                    </div>
                </a>
            </li>
            <li class="w-full">
                <a class="flex max-w-[250px] w-full h-[50px]" href="#">
                    <img class="w-[70px] h-[50px] mr-[5px]" src="" alt="">
                    <div class="flex flex-col gap-x-[5px] overflow-hidden">
                        <span class="text-[14px] text-[#3F509E] truncate">It is a long established fact</span>
                        <span class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</span>
                    </div>
                </a>
            </li>
            <li class="w-full">
                <a class="flex max-w-[250px] w-full h-[50px]" href="#">
                    <img class="w-[70px] h-[50px] mr-[5px]" src="" alt="">
                    <div class="flex flex-col gap-x-[5px] overflow-hidden">
                        <span class="text-[14px] text-[#3F509E] truncate">It is a long established fact</span>
                        <span class="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <!-- Follow Block -->
    <div class="mb-[35px]">
        <span class="block mb-[15px] font-semibold text-[22px] text-navy-blue">Follow</span>
        <ul class="flex items-center gap-x-[10px] p-[10px]">
            <li>
                <a href="#" target="_blank" class="flex items-center justify-center bg-navy-blue hover:bg-pink duration-150 w-[20px] h-[20px] rounded-[50%]"></a>
            </li>
            <li>
                <a href="#" target="_blank" class="flex items-center justify-center bg-navy-blue hover:bg-pink duration-150 w-[20px] h-[20px] rounded-[50%]"></a>
            </li>
            <li>
                <a href="#" target="_blank" class="flex items-center justify-center bg-navy-blue hover:bg-pink duration-150 w-[20px] h-[20px] rounded-[50%]"></a>
            </li>
        </ul>
    </div>
    <!-- Tags Block -->
    <div class="mb-[35px]">
        <span class="block mb-[15px] font-semibold text-[22px] text-navy-blue">Tags</span>
        <ul class="grid grid-cols-3 gap-x-[40px] gap-y-[12px]">
            <li>
                <a class="font-lato text-[16px] leading-[26px] underline hover:text-pink duration-150" href="#">General</a>
            </li>
            <li>
                <a class="font-lato text-[16px] leading-[26px] underline hover:text-pink duration-150" href="#">Atsanil</a>
            </li>
            <li>
                <a class="font-lato text-[16px] leading-[26px] underline hover:text-pink duration-150" href="#">Insas.</a>
            </li>
            <li>
                <a class="font-lato text-[16px] leading-[26px] underline hover:text-pink duration-150" href="#">Bibsaas</a>
            </li>
            <li>
                <a class="font-lato text-[16px] leading-[26px] underline hover:text-pink duration-150" href="#">Nulla.</a>
            </li>
        </ul>
    </div>
  </aside>
</template>

<script setup></script>
