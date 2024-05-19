<template>
    <div class="flex items-center justify-between">
        <div class="flex flex-col">
            <span class="block mb-[8px] text-[22px] font-bold text-navy-blue">Ecommerce Acceories & Fashion item</span>
            <span class="text-[12px] font-lato text-[#8A8FB9]">About 9,620 results (0.62 seconds)</span>
        </div>
        <form class="flex items-center gap-x-[25px]">
            <div class="flex items-center gap-x-[6px]">
                <span class="text-off-navy-blue font-lato text-[16px]">Sort By:</span>
                <div class="flex items-center py-[5px] px-[11px] w-[100px] h-[30px] border-[1px] border-[#E7E6EF]">
                    <span class="text-[#8A8FB9] text-[12px] font-lato leading-[18px]">Best Match</span>
                    <img class="w-[12px] h-[12px]" src="../../../public/images/angle-down-icon.svg" alt="Angle Down">
                </div>
            </div>
            <div class="flex items-center gap-x-[6px]">
                <span class="text-off-navy-blue font-lato text-[16px]">View:</span>
                <ul class="flex items-center gap-x-[5px]">
                    <li class="flex items-center justify-center w-[12px] h-[12px]">
                        <button type="button">
                            <img src="../../../public/images/grid-view-icon.svg" alt="Grid View">
                        </button>
                    </li>
                    <li class="flex items-center justify-center w-[12px] h-[12px]">
                        <button type="button">
                            <img src="../../../public/images/list-view-icon.svg" alt="List View">
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <input type="text" class="outline-none pl-[10px] pt-[8px] pb-[8px] pr-[10px] max-w-[160px] w-full h-[30px] border-[1px] border-[#E7E6EF]">
            </div>
        </form>
    </div>
</template>

<script setup>

</script>