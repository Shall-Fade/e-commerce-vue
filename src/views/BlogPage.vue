<template>
    <div>
        <base-heading>Blog Page</base-heading>
        <div class="flex gap-x-[50px] max-w-[1170px] w-full mx-auto my-[120px]">
            <div class="max-w-[870px] w-full">
                <ul class="flex flex-col gap-y-[40px] mb-[70px]">
                    <li>
                        <base-article></base-article>
                    </li>
                    <li>
                        <base-article></base-article>
                    </li>
                    <li>
                        <base-article></base-article>
                    </li>
                </ul>
                <base-pagination></base-pagination>
            </div>
            <BlogAside />
        </div>
    </div>
</template>

<script setup>
import BlogAside from '../components/BlogAside.vue';


</script>