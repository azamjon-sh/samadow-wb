<template>
    <header class="header py-[24px]">
        <div class="content">
            <div class="header__grid flex items-center justify-between gap-4">
                <div class="header__logo lg:grow">
                    <NuxtLink to="#top" class="text-black text-[24px]">Samadov-WB</NuxtLink>
                </div>
                <div class="header__menu flex gap-4 lg:hidden">
                    <NuxtLink to="#you-get" class="text-black hover:text-purple block text-sm">Чему вы научитесь
                    </NuxtLink>
                    <NuxtLink to="#reviews" class="text-black hover:text-purple block text-sm">Отзывы участников
                    </NuxtLink>
                    <NuxtLink to="#plan" class="text-black hover:text-purple block text-sm">Программа</NuxtLink>
                    <NuxtLink to="#speaker" class="text-black hover:text-purple block text-sm">Спикеры</NuxtLink>
                </div>
                <a href="javascript:jivo_api.open()" class="bg-purple text-white hover:bg-purple-hover text-sm border-0 rounded-xl px-5 py-3 sm:hidden">
                    Записаться
                    на курс
                </a>
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