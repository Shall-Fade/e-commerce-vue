<template>
  <div class="bg-[#F6F5FF]">
    <div class="max-w-[1170px] w-full mx-auto my-0 pt-[100px] pb-[130px]">
      <h2 class="mb-[10px] text-[36px] font-bold text-navy-blue">
        <slot name="title"></slot>
      </h2>
      <slot name="breadcrumbs"></slot>
    </div>
  </div>
</template>

<script setup></script>
