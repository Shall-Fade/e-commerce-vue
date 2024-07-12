<template>
  <div>
    <section
      class="flex flex-col justify-center max-w-[1170px] w-full mx-auto my-[180px] h-full"
    >
      <div class="max-w-[625px] w-full my-0 mx-auto text-center">
        <h2 class="text-[36px] font-bold text-navy-blue mb-[28px]">
          Your Order Is Completed!
        </h2>
        <p class="mb-[30px] font-lato font-semibold text-[16px] text-[#8D92A7]">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <RouterLink to="/products" class="mx-auto w-[210px] h-[60px] flex items-center justify-center bg-pink rounded-[3px] font-lato font-semibold text-[16px] text-white" type="button">Continue Shopping</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup></script>
