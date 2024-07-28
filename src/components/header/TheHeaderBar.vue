<template>
  <div class="bg-purple py-[14px]">
    <div
      class="max-w-[1170px] w-full my-0 mx-auto flex items-center justify-between"
    >
      <ul class="flex items-center gap-x-[50px]">
        <li>
          <a
            class="flex items-center gap-x-[10px] text-[16px] font-semibold text-white hover:text-pantone-purple duration-150"
            href="mailto:mhhasanul@gmail.com"
          >
            <span class="w-[16px] h-[16px]">
              <img src="../../../public/images/email-icon.svg" alt="E-mail" />
            </span>
            <span>mhhasanul@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-x-[10px] text-[16px] font-semibold text-white hover:text-pantone-purple duration-150"
            href="tel:1234567890"
          >
            <span class="w-[16px] h-[16px]">
              <img src="../../../public/images/phone-icon.svg" alt="Phone" />
            </span>
            <span>(12345)67890</span>
          </a>
        </li>
      </ul>
      <ul class="flex items-center gap-x-[15px]">
        <li class="relative flex items-center">
          <button @click="openLanguageBlock()" class="flex items-center gap-x-[5px] text-white hover:text-pantone-purple duration-150" type="button">
            <span class="text-[16px] font-semibold">{{ currentLanguage }}</span>
            <span :class="[isOpenLanguage ? 'rotate-180' : 'rotate-0']" class="w-[16px] h-[16px] duration-150">
                <img src="../../../public/images/angle-down-icon.svg" alt="Angle Down">
            </span>
          </button>
          <ul :class="[isOpenLanguage ? 'flex' : 'hidden']" class="absolute top-[30px] left-0 flex-col gap-[3px] bg-white py-[10px] rounded-[5px] min-w-[150px] border-[1px] border-blue">
            <li v-for="language in languages">
              <button @click="chooseLanguage(language)" class="w-full text-left text-[16px] font-semibold text-navy-blue hover:bg-pink duration-150 px-[20px]" type="button">{{ language }}</button>
            </li>
          </ul>
        </li>
        <li class="relative flex items-center">
          <button @click="openCurrencyBlock()" class="flex items-center gap-x-[5px] text-white hover:text-pantone-purple duration-150" type="button">
            <span class="text-[16px] font-semibold">{{ currentCurrency }}</span>
            <span :class="[isOpenCurrency ? 'rotate-180' : 'rotate-0']" class="w-[16px] h-[16px] duration-150">
                <img src="../../../public/images/angle-down-icon.svg" alt="Angle Down">
            </span>
          </button>
          <ul :class="[isOpenCurrency ? 'flex' : 'hidden']" class="absolute top-[30px] left-0 flex-col gap-[3px] bg-white py-[10px] rounded-[5px] min-w-[150px] border-[1px] border-blue">
            <li v-for="currency in currencies">
              <button @click="chooseCurrency(currency)" class="w-full text-left text-[16px] font-semibold text-navy-blue hover:bg-pink duration-150 px-[20px]" type="button">{{ currency }}</button>
            </li>
          </ul>
        </li>
        <li class="flex items-center">
          <RouterLink to="/login" class="flex items-center gap-x-[5px] text-white hover:text-pantone-purple duration-150">
            <span class="text-[16px] font-semibold">Login</span>
            <span class="w-[16px] h-[16px]">
                <img src="../../../public/images/user-icon.svg" alt="User Icon">
            </span>
          </RouterLink>
        </li>
        <li class="flex items-center">
          <RouterLink to="/wishlist" class="flex items-center gap-x-[5px] text-white hover:text-pantone-purple duration-150">
            <span class="text-[16px] font-semibold">Wishlist</span>
            <span class="w-[16px] h-[16px]">
                <img src="../../../public/images/heart-icon.svg" alt="Heart Icon">
            </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/cart" class="relative">
            <span class="w-[24px] h-[24px]">
                <img src="../../../public/images/cart-icon.svg" alt="Cart">
            </span>
            <span v-if="cart.length < 100" class="absolute top-[-5px] right-[-6px] flex items-center justify-center w-[17px] h-[17px] rounded-full text-[12px] bg-white font-bold text-blue">{{ cart.length }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

// Variables
const store = useStore();
const cart = computed(() => store.state.cart);
const languages = ref(['English', 'Russian', 'Japanese', 'Italian']);
const currencies = ref(['USD', 'RUB', 'JPY', 'ITL']);
const currentLanguage = ref("English");
const currentCurrency = ref("USD");
const isOpenLanguage = ref(false);
const isOpenCurrency = ref(false);

// Open language block
function openLanguageBlock() {
  isOpenLanguage.value = !isOpenLanguage.value;
}

// Choose current language
function chooseLanguage(language) {
  currentLanguage.value = language;
  isOpenLanguage.value = false;
}

// Open currency block
function openCurrencyBlock() {
  isOpenCurrency.value = !isOpenCurrency.value;
}

// Choose current currency
function chooseCurrency(currency) {
  currentCurrency.value = currency;
  isOpenCurrency.value = false;
}
</script>
