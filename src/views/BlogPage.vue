<template>
  <div>
    <base-heading>Blog Page</base-heading>
    <div class="flex gap-x-[50px] max-w-[1170px] w-full mx-auto my-[120px]">
      <div class="max-w-[870px] w-full">
        <ul class="flex flex-col gap-y-[40px] mb-[70px]">
          <li v-for="article in articles">
            <base-article
              v-if="checkCategory(article)"
              v-bind:article="article"
            >
            </base-article>
          </li>
        </ul>
        <base-pagination v-if="articles.length >= 5"></base-pagination>
      </div>
      <BlogAside />
    </div>
  </div>
</template>

<script setup>
import BlogAside from "../components/BlogAside.vue";
import { useStore } from "vuex";
import { computed } from "vue";

// Variables
const store = useStore();
const articles = computed(() => store.state.articles);
const openedCategory = computed(() => store.state.openedCategory);

// Check Opened Article Category
function checkCategory(article) {
  if (openedCategory.value === "") {
    return true;
  } else {
    for (let i = 0; i <= article.categories.length; i++) {
      if (openedCategory.value === article.categories[i]) {
        return true;
      }
    }
  }
}
</script>
