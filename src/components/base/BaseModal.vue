<template>
  <Transition name="modal">
    <div
      v-if="isVisibleModal"
      class="fixed z-[9999] bottom-[65px] right-[65px] inline-flex flex-col py-[15px] px-[25px] gap-y-[5px] bg-white border-[3px] border-[green] border-dashed rounded-[30px]"
    >
      <span class="text-[16px]">
        <slot name="title"></slot>
      </span>
      <slot name="link"></slot>
      <button
        @click="closeModal()"
        class="absolute top-[-18px] right-[-10px] w-[20px] h-[20px] cursor-pointer duration-150"
        type="button"
      >
        <svg
          class="hover:stroke-red duration-150"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
              fill="#151875"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
              fill="#151875"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useStore } from "vuex";

// Variables
const store = useStore();
const isVisibleModal = computed(() => store.state.isVisibleModal);
let timer;

watchEffect(() => {
  if (isVisibleModal.value === true) {
    timer = setTimeout(() => store.commit("TOGGLE_MODAL", false), 4000);
  } else if(isVisibleModal.value === false) {
    clearTimeout(timer);
  }
});

// Close Modal
function closeModal() {
  store.commit("TOGGLE_MODAL", false);
}
</script>

<style scoped>
/* Modal Animation */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease-out;
}

.modal-enter-from {
  opacity: 1;
  transform: translateY(100px);
  transition: all 0.25s ease-out;
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.25s ease-out;
}
</style>
