<template>
  <div>
    <!-- <base-heading>
      <template v-slot:title>About Us</template>
      <template v-slot:breadcrumbs>
        <ul class="flex items-center gap-x-[10px]">
          <li
            class="flex items-center gap-x-[10px] after:w-[5px] after:h-[5px] after:rounded-full after:bg-pink last:after:hidden"
          >
            <RouterLink
              to="/"
              class="text-[16px] font-lato text-black hover:text-pink duration-150"
            >
              Home
            </RouterLink>
          </li>
          <li
            class="flex items-center gap-x-[10px] after:w-[5px] after:h-[5px] after:rounded-full after:bg-pink last:after:hidden"
          >
            <RouterLink
              to="/blog"
              class="text-[16px] font-lato text-black hover:text-pink duration-150"
            >
              Blog
            </RouterLink>
          </li>
        </ul>
      </template>
    </base-heading> -->
    <div class="flex gap-x-[50px] max-w-[1170px] w-full mx-auto my-[120px]">
      <div class="max-w-[870px] w-full">
        <article-block></article-block>
      </div>
      <BlogAside />
    </div>
  </div>
</template>

<script setup>
import ArticleBlock from "../components/ArticleBlock.vue";
import BlogAside from "../components/BlogAside.vue";
</script>
