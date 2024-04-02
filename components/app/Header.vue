<template>
  <div class="sticky bg-[#FFF705] left-0 top-0 w-full z-10 h-16 shadow">
    <div class="content h-full flex items-center justify-between">
        <span class="font-semibold text-md">
Получите персональную скидку до <span class="text-xl font-bold">-50%</span>
        </span>
      <a href="https://t.me/alexshado" target="_blank" class="flex gap-2 bg-purple text-white hover:bg-black text-md border-0 rounded-xl px-6 py-2">
        <span>Написать</span>
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24" height="24" viewBox="0 0 24 24">
          <path fill="#fff" d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"/>
        </svg>
      </a>
    </div>
  </div>
  <header class="header py-[24px]">
    <div class="content">
      <div class="header__grid flex items-center justify-between gap-4">
        <div class="header__logo lg:grow">
          <NuxtLink to="#top" class="text-black md:text-lg text-2xl font-extrabold uppercase">wildberriesprosto
          </NuxtLink>
        </div>
        <div class="header__menu flex gap-4 lg:hidden">
          <NuxtLink to="#you-get" class="text-black hover:text-purple block text-sm">Чему вы научитесь
          </NuxtLink>
          <NuxtLink to="#reviews" class="text-black hover:text-purple block text-sm">Отзывы участников
          </NuxtLink>
          <NuxtLink to="#plan" class="text-black hover:text-purple block text-sm">Программа</NuxtLink>
          <NuxtLink to="#speaker" class="text-black hover:text-purple block text-sm">Спикеры</NuxtLink>
        </div>
        <button class="bg-gray border-0 rounded-xl px-5 py-3 hidden lg:block" @click="burger = true">
          <img src="~/assets/images/burger.svg" alt=""/>
        </button>
      </div>
    </div>
    <div v-show="burger"
         class="header__mobile fixed right-0 top-0 h-screen overflow-y-auto w-full max-w-[350px] bg-white p-5 z-1 shadow-2xl flex flex-col gap-4"
         @click="burger = false">
      <div class="w-10 h-10 rounded-full p-2 bg-gray">
        <img src="~assets/images/close.svg" alt="" class="w-full">
      </div>
      <NuxtLink to="#you-get" class="text-black hover:text-purple block text-md font-[600]">Чему вы научитесь
      </NuxtLink>
      <NuxtLink to="#reviews" class="text-black hover:text-purple block text-md font-[600]">Отзывы участников
      </NuxtLink>
      <NuxtLink to="#plan" class="text-black hover:text-purple block text-md font-[600]">Программа</NuxtLink>
      <NuxtLink to="#speaker" class="text-black hover:text-purple block text-md font-[600]">Спикеры</NuxtLink>
      <div class="footer__messengers flex justify-between gap-2 w-[140px] mt-10">
        <a href="https://vk.com/samadov_alisher" target="_blank"
           class="vk rounded-[5px] bg-gray w-8 h-8 flex items-center justify-center p-1">
          <img src="~assets/images/vk.svg" alt="" class="w-full">
        </a>
        <a href="https://t.me/alexshado" target="_blank"
           class="vk rounded-[5px] bg-gray w-8 h-8 flex items-center justify-center p-1">
          <img src="~assets/images/telegram.svg" alt="" class="w-full">
        </a>
        <a href="https://wa.me/79370425604" target="_blank"
           class="vk rounded-[5px] bg-gray w-8 h-8 flex items-center justify-center p-1">
          <img src="~assets/images/whatsapp.svg" alt="" class="w-full">
        </a>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      burger: false,
    }
  },
}
</script>

<style scoped>

</style>