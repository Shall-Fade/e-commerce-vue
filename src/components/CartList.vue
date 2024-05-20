<template>
    <section class="w-full">
        <ul class="grid grid-cols-5 justify-items-center mb-[35px]">
            <li class="font-bold text-[20px] text-navy-blue col-span-2 first:justify-self-start">Product</li>
            <li class="font-bold text-[20px] text-navy-blue">Price</li>
            <li class="font-bold text-[20px] text-navy-blue">Quantity</li>
            <li class="font-bold text-[20px] text-navy-blue last:justify-self-end">Total</li>
        </ul>
        <ul class="flex flex-col mb-[35px]">
            <li>
                <base-cart-card></base-cart-card>
            </li>
            <li>
                <base-cart-card></base-cart-card>
            </li>
            <li>
                <base-cart-card></base-cart-card>
            </li>
            <li>
                <base-cart-card></base-cart-card>
            </li>
            <li>
                <base-cart-card></base-cart-card>
            </li>
        </ul>
        <div class="flex items-center justify-between">
            <button class="flex items-center justify-center h-[40px] bg-pink text-white rounded-[2px] font-semibold text-[16px] px-[25px]" type="button">Update Cart</button>
            <button class="flex items-center justify-center h-[40px] bg-pink text-white rounded-[2px] font-semibold text-[16px] px-[25px]" type="button">Clear Cart</button>
        </div>
    </section>
</template>

<script setup>

</script>