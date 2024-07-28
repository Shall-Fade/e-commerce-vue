<template>
  <section
    class="max-w-[1170px] w-full mx-auto my-0 mt-[120px]"
    v-if="openedProduct"
  >
    <div class="flex gap-x-[40px] mb-[140px]">
      <ul
        class="grid grid-cols-[155px_375px] grid-rows-3 gap-x-[20px] gap-y-[10px]"
      >
        <li
          class="w-full h-full row-span-1 col-start-1 last:row-start-1 last:row-end-4 last:col-start-2"
        >
          <img
            class="w-full h-full rounded-[3px]"
            :src="openedProduct.img"
            :alt="openedProduct.title"
          />
        </li>
        <li
          class="w-full h-full row-span-1 col-start-1 last:row-start-1 last:row-end-4 last:col-start-2"
        >
          <img
            class="w-full h-full rounded-[3px]"
            :src="openedProduct.img"
            :alt="openedProduct.title"
          />
        </li>
        <li
          class="w-full h-full row-span-1 col-start-1 last:row-start-1 last:row-end-4 last:col-start-2"
        >
          <img
            class="w-full h-full rounded-[3px]"
            :src="openedProduct.img"
            :alt="openedProduct.title"
          />
        </li>
        <li
          class="w-full h-full row-span-1 col-start-1 last:row-start-1 last:row-end-4 last:col-start-2"
        >
          <img
            class="w-full h-full rounded-[3px]"
            :src="openedProduct.img"
            :alt="openedProduct.title"
          />
        </li>
      </ul>
      <div class="mt-[60px]">
        <span class="font-semibold text-[36px] text-navy-blue pb-[10px]">
          {{ openedProduct.title }}
        </span>
        <div class="flex items-center gap-x-[5px] mb-[15px]">
          <ul class="flex items-center gap-x-[3px]">
            <!-- Yellow Stars -->
            <li
              v-for="score in openedProduct.score"
              :key="score"
              class="w-[12px] h-[12px]"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9006 4.60447L7.61472 4.12692L6.14585 1.14907C6.10573 1.06753 6.03973 1.00153 5.95819 0.961413C5.75372 0.860469 5.50524 0.944589 5.403 1.14907L3.93413 4.12692L0.648265 4.60447C0.557674 4.61741 0.474848 4.66012 0.411435 4.72482C0.334771 4.80362 0.292526 4.90963 0.293982 5.01956C0.295438 5.12949 0.340476 5.23434 0.4192 5.31108L2.79657 7.62891L2.2349 10.9018C2.22173 10.978 2.23016 11.0563 2.25922 11.1279C2.28829 11.1995 2.33683 11.2615 2.39935 11.3069C2.46187 11.3523 2.53586 11.3793 2.61293 11.3848C2.69 11.3903 2.76706 11.374 2.83539 11.338L5.77442 9.79274L8.71346 11.338C8.79369 11.3807 8.88687 11.3949 8.97617 11.3794C9.20135 11.3406 9.35277 11.127 9.31394 10.9018L8.75228 7.62891L11.1296 5.31108C11.1944 5.24766 11.2371 5.16484 11.25 5.07425C11.2849 4.84777 11.1271 4.63811 10.9006 4.60447V4.60447Z"
                  fill="#FFC416"
                />
              </svg>
            </li>
            <!-- Grey Stars -->
            <li
              v-for="score in 5 - openedProduct.score"
              :key="score"
              class="w-[12px] h-[12px]"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.822 4.60447L7.5361 4.12692L6.06723 1.14907C6.02711 1.06753 5.96111 1.00153 5.87958 0.961413C5.6751 0.860469 5.42663 0.944589 5.32439 1.14907L3.85552 4.12692L0.569652 4.60447C0.479061 4.61741 0.396235 4.66012 0.332821 4.72482C0.256158 4.80362 0.213912 4.90963 0.215368 5.01956C0.216824 5.12949 0.261862 5.23434 0.340586 5.31108L2.71795 7.62891L2.15629 10.9018C2.14312 10.978 2.15154 11.0563 2.18061 11.1279C2.20968 11.1995 2.25822 11.2615 2.32074 11.3069C2.38325 11.3523 2.45724 11.3793 2.53431 11.3848C2.61138 11.3903 2.68845 11.374 2.75678 11.338L5.69581 9.79274L8.63484 11.338C8.71508 11.3807 8.80826 11.3949 8.89756 11.3794C9.12274 11.3406 9.27416 11.127 9.23533 10.9018L8.67367 7.62891L11.051 5.31108C11.1157 5.24766 11.1584 5.16484 11.1714 5.07425C11.2063 4.84777 11.0484 4.63811 10.822 4.60447V4.60447Z"
                  fill="#B2B2B2"
                />
              </svg>
            </li>
          </ul>
          <span class="text-[14px] text-navy-blue leading-[29px]">(22)</span>
        </div>
        <div class="flex items-center gap-x-[20px] mb-[10px]">
          <span class="text-[16px] leading-[29px] text-navy-blue"
            >${{ openedProduct.newPrice }}</span
          >
          <span class="text-[16px] leading-[29px] text-pink line-through"
            >${{ openedProduct.oldPrice }}</span
          >
        </div>
        <span class="block font-semibold text-navy-blue text-[16px] mb-[12px]"
          >Color: <span>{{ openedProduct.color }}</span></span
        >
        <p
          class="max-w-[550px] font-semibold text-[16px] leading-[29px] text-[#A9ACC6] mb-[30px]"
        >
          {{ openedProduct.desc }}
        </p>
        <div class="flex items-center gap-x-[20px] mb-[17px]">
          <button
            @click="addCart()"
            class="text-[16px] leading-[29px] text-navy-blue"
            type="button"
          >
            Add To Cart
          </button>
          <button
            @click="addFavorite()"
            :class="[
              openedProduct.isFavorite
                ? 'bg-[red] hover:bg-[red] rounded-full'
                : '',
            ]"
            class="flex items-center justify-center w-[31px] h-[31px]"
            type="button"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1202 3.45748C14.3239 2.66099 13.2682 2.17673 12.1451 2.09277C11.022 2.00881 9.90605 2.33073 9.00021 2.99998C8.04595 2.29021 6.8582 1.96837 5.67615 2.09926C4.49409 2.23016 3.40554 2.80407 2.62969 3.70542C1.85384 4.60678 1.44832 5.76862 1.49481 6.95699C1.54129 8.14536 2.03632 9.27198 2.88021 10.11L8.46771 15.6975C8.53743 15.7678 8.62038 15.8236 8.71177 15.8617C8.80317 15.8997 8.9012 15.9193 9.00021 15.9193C9.09922 15.9193 9.19725 15.8997 9.28864 15.8617C9.38003 15.8236 9.46299 15.7678 9.53271 15.6975L15.1202 10.11C15.5572 9.67327 15.9039 9.15474 16.1404 8.58401C16.3769 8.01327 16.4986 7.40153 16.4986 6.78373C16.4986 6.16593 16.3769 5.55419 16.1404 4.98346C15.9039 4.41272 15.5572 3.89419 15.1202 3.45748ZM14.0627 9.05248L9.00021 14.1075L3.93771 9.05248C3.49159 8.60451 3.18769 8.03477 3.06413 7.41474C2.94057 6.79471 3.00285 6.152 3.24317 5.56723C3.48349 4.98246 3.89113 4.48168 4.41497 4.1277C4.9388 3.77372 5.5555 3.58231 6.18771 3.57748C7.03229 3.57955 7.84153 3.91673 8.43771 4.51498C8.50743 4.58528 8.59038 4.64107 8.68177 4.67915C8.77317 4.71723 8.8712 4.73683 8.97021 4.73683C9.06922 4.73683 9.16725 4.71723 9.25864 4.67915C9.35003 4.64107 9.43299 4.58528 9.50271 4.51498C10.1165 3.98314 10.9093 3.70434 11.7209 3.735C12.5324 3.76566 13.302 4.10349 13.8738 4.68012C14.4457 5.25675 14.7771 6.02911 14.8011 6.84087C14.825 7.65264 14.5396 8.44317 14.0027 9.05248H14.0627Z"
                fill="#535399"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center gap-x-[10px] mb-[10px]">
          <span class="font-semibold text-[16px] leading-[29px] text-navy-blue"
            >Categories:</span
          >
          <ul class="flex items-center gap-x-[15px]">
            <li
              class="font-semibold text-[16px] leading-[29px] text-[#A9ACC6]"
              v-for="category in openedProduct.categories"
            >
              {{ category }}
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-x-[10px] mb-[10px]">
          <span class="font-semibold text-[16px] leading-[29px] text-navy-blue"
            >Tags:</span
          >
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="flex items-center gap-x-[10px] mb-[10px]">
          <span class="font-semibold text-[16px] leading-[29px] text-navy-blue"
            >Share:</span
          >
          <ul class="flex items-center gap-x-[10px]">
            <li>
              <a
                href="#"
                target="_blank"
                class="flex items-center justify-center bg-navy-blue hover:bg-pink duration-150 w-[12px] h-[12px] rounded-[50%]"
              ></a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                class="flex items-center justify-center bg-navy-blue hover:bg-pink duration-150 w-[12px] h-[12px] rounded-[50%]"
              ></a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                class="flex items-center justify-center bg-navy-blue hover:bg-pink duration-150 w-[12px] h-[12px] rounded-[50%]"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

// Variables
const store = useStore();
const cart = computed(() => store.state.cart);
const wishlist = computed(() => store.state.wishlist);
const openedProduct = computed(() => store.state.openedProduct);

// Add product to cart
function addCart() {
  if (!cart.value.some((item) => item.code === openedProduct.value.code)) {
    openedProduct.value.quantity = 1;
    cart.value.push(openedProduct.value);
  }

  store.commit("TOGGLE_MODAL", true);
}

// Add product to favorites
function addFavorite() {
  if (!wishlist.value.some((item) => item.code === openedProduct.value.code)) {
    openedProduct.value.isFavorite = true;
    wishlist.value.push(openedProduct.value);
  } else if (openedProduct.value.isFavorite === true) {
    openedProduct.value.isFavorite = false;
    wishlist.value.splice(
      wishlist.value.findIndex((item) => item === openedProduct.value),
      1
    );
  } else {
    openedProduct.value.isFavorite = true;
  }
}
</script>
