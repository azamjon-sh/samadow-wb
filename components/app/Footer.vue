<template>
    <footer class="footer bg-black py-10">
        <div class="content">
            <div class="footer__grid gap-4 flex justify-between flex-wrap">
                <div class="footer__phone text-white">
                    <a href="tel:+79370425604" class="text-2xl font-[600] mb-4">+7 (937) 042 5604</a>
                    <div class="text-md">Контактный номер</div>
                </div>
                <div class="footer__menu flex gap-4 justify-center lg:flex-col lg:order-2">
                    <NuxtLink to="#you-get" class="text-white hover:text-purple block text-sm">Чему вы научитесь
                    </NuxtLink>
                    <NuxtLink to="#reviews" class="text-white hover:text-purple block text-sm">Отзывы участников
                    </NuxtLink>
                    <NuxtLink to="#plan" class="text-white hover:text-purple block text-sm">Программа</NuxtLink>
                    <NuxtLink to="#speaker" class="text-white hover:text-purple block text-sm">Спикеры</NuxtLink>
                </div>
                <div class="footer__messengers flex justify-between gap-2 w-[140px] lg:order-1">
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
        </div>
    </footer>
</template>

<script setup>
onMounted(()=>{
    var jivoScript = document.createElement('script');

// Устанавливаем атрибуты
    jivoScript.src = "https://code.jivo.ru/widget/1Qlkc36utv";
    jivoScript.async = true;

// Добавляем элемент к существующему элементу в DOM (например, к body)
    document.body.appendChild(jivoScript);
})
</script>

<style scoped>

</style>