<template>
  <header>
    <TheHeaderBar />
    <div
      class="flex items-center justify-between max-w-[1170px] w-full mx-auto my-0 py-[20px]"
    >
      <div class="flex items-center gap-x-[80px]">
        <span class="text-navy-blue text-[34px] font-bold">
          <RouterLink to="/" activeClass="text-navy-blue">Hekto</RouterLink>
        </span>
        <nav>
          <ul class="flex items-center gap-x-[35px] font-lato">
            <li>
              <RouterLink
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                to="/"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                to="/about"
              >
                About Us
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                to="/products"
              >
                Products
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                to="/blog"
              >
                Blog
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                to="/cart"
              >
                Cart
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="text-[16px] text-navy-blue leading-[20px] hover:text-pink duration-150"
                to="/contact"
              >
                Contact
              </RouterLink>
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
