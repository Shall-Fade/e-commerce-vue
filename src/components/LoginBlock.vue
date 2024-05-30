<template>
    <form class="flex flex-col max-w-[540px] mx-auto my-0 w-full p-[50px] bg-white text-center">
        <span class="block mb-[7px] font-bold text-black text-[32px]">Login</span>
        <p class="font-lato text-[17px] text-[#9096B2] mb-[35px]">Please login using account detail bellow.</p>
        <input class="h-[52px] w-full bg-white border-[#C2C5E1] border-[1px] mb-[23px] pl-[13px] pr-[25px] py-[15px] outline-none font-lato text-[16px] text-[#9096B2] rounded-[2px]" type="email" placeholder="Email Address">
        <input class="h-[52px] w-full bg-white border-[#C2C5E1] border-[1px] mb-[13px] pl-[13px] pr-[25px] py-[15px] outline-none font-lato text-[16px] text-[#9096B2] rounded-[2px]" type="password" placeholder="Password">
        <a class="font-lato text-[17px] text-[#9096B2] mb-[23px] text-left mr-auto hover:text-pink duration-150" href="#">Forgot your password?</a>
        <button class="flex items-center justify-center rounded-[3px] text-white bg-pink font-lato font-bold text-[17px] h-[47px] w-full mb-[28px]" type="submit">Sign In</button>
        <span class="font-lato text-[17px] text-[#9096B2]">Don’t have an Account? <a class="hover:text-pink duration-150" href="#">Create account</a></span>
    </form>
</template>

<script setup lang="ts">

</script>