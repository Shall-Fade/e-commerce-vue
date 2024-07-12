<template>
    <form class="flex flex-col max-w-[540px] mx-auto my-0 w-full p-[50px] bg-white text-center">
        <span class="block mb-[7px] font-bold text-black text-[32px]">Create Account</span>
        <p class="font-lato text-[17px] text-[#9096B2] mb-[35px]">Please create account using email detail.</p>
        <input class="h-[52px] w-full bg-white border-[#C2C5E1] border-[1px] mb-[23px] pl-[13px] pr-[25px] py-[15px] outline-none font-lato text-[16px] text-[#9096B2] rounded-[2px]" type="text" placeholder="Name">
        <input class="h-[52px] w-full bg-white border-[#C2C5E1] border-[1px] mb-[23px] pl-[13px] pr-[25px] py-[15px] outline-none font-lato text-[16px] text-[#9096B2] rounded-[2px]" type="email" placeholder="Email Address">
        <input class="h-[52px] w-full bg-white border-[#C2C5E1] border-[1px] mb-[23px] pl-[13px] pr-[25px] py-[15px] outline-none font-lato text-[16px] text-[#9096B2] rounded-[2px]" type="password" placeholder="Password">
        <input class="h-[52px] w-full bg-white border-[#C2C5E1] border-[1px] mb-[13px] pl-[13px] pr-[25px] py-[15px] outline-none font-lato text-[16px] text-[#9096B2] rounded-[2px]" type="password" placeholder="Repeat Password">
        <button class="flex items-center justify-center rounded-[3px] text-white bg-pink font-lato font-bold text-[17px] h-[47px] w-full mb-[28px]" type="submit">Sign Up</button>
        <span class="font-lato text-[17px] text-[#9096B2]">Do you have an Account? <RouterLink to="/login" class="hover:text-pink duration-150" href="#">Sign in</RouterLink></span>
    </form>
</template>

<script setup>

</script>