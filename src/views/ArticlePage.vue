<template>
    <div>
        <base-heading>Article Page</base-heading>
        <div class="flex gap-x-[50px] max-w-[1170px] w-full mx-auto my-[120px]">
            <div class="max-w-[870px] w-full">
                <article-block></article-block>
            </div>
            <BlogAside />
        </div>
    </div>
</template>

<script setup>
import ArticleBlock from '../components/ArticleBlock.vue';
import BlogAside from '../components/BlogAside.vue';


</script>