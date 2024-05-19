<template>
  <header>
    <TheHeaderBar />
    <div
      class="flex items-center justify-between max-w-[1170px] w-full mx-auto my-0 py-[20px]"
    >
      <div class="flex items-center gap-x-[80px]">
        <span class="text-navy-blue text-[34px] font-bold">
          <a href="#">Hekto</a>
        </span>
        <nav>
          <ul class="flex items-center gap-x-[35px] font-lato">
            <li>
              <a
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                href="#"
                >Home</a
              >
            </li>
            <li>
              <a
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                href="#"
                >Pages</a
              >
            </li>
            <li>
              <a
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                href="#"
                >Products</a
              >
            </li>
            <li>
              <a
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                href="#"
                >Blog</a
              >
            </li>
            <li>
              <a
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                href="#"
                >Shop</a
              >
            </li>
            <li>
              <a
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                href="#"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <TheHeaderSearch />
    </div>
  </header>
</template>

<script setup>
import TheHeaderBar from "../components/header/TheHeaderBar.vue";
import TheHeaderSearch from "../components/header/TheHeaderSearch.vue";
</script>
