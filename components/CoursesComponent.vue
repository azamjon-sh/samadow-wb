<template>
    <section class="course py-[72px] xl:pt-[40px] bg-gray" id="plan">
        <div class="content">
            <h2 class="text-[52px] xl:text-4xl font-bold mb-10">Выберите свой карьерный путь</h2>
            <div class="course__grid grid grid-cols-2 xl:grid-cols-2 md:grid-cols-1 gap-6 justify-around">
                <div class="course__item bg-white px-6 py-8 rounded-[20px] flex flex-col justify-between relative w-full max-w-[450px] mx-auto"
                     v-for="item in courses" :key="item.id">

                    <div v-if="item.popular" class="course__popular bg-black flex items-center justify-center gap-2 absolute top-0 left-0 py-3 rounded-t-[20px] w-full">
                        <svg width="20" height="20" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 426.667 426.667" xml:space="preserve">
                            <polygon style="fill:#fff;"
                                     points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                        </svg>
                        <span class="text-[16px] text-white font-[600]">Самый популярный</span>
                    </div>

                    <h3 class="course__title font-[600] text-2xl mb-5 mt-8">
                        {{ item.title }}
                    </h3>
                    <div class="course__advantages">
                        <div v-for="el in item.advantages" class="flex gap-2 mb-3">
                            <svg width="24px" height="24px" viewBox="0 0 48 48" class="min-w-[24px]">
                                <g id="Shopicon">
                                    <polygon
                                            points="31.048,12 31.048,8 8,8 8,40 40,40 40,20.655 36,20.655 36,36 12,36 12,12 	"/>
                                    <polygon
                                            points="24,24.172 17,17.172 14.171,20 21.172,27 21.171,27 24,29.828 26.828,27 43.828,10 41,7.172 	"/>
                                </g>
                            </svg>
                            <span class="text-sm">{{ el }}</span>
                        </div>
                    </div>
                    <div class="course__price grow basis-0 flex items-end mt-10">
                        <div class="flex items-start">
                            <span class="new text-3xl font-[600]">от {{ item.priceNew }} <span class="new text-sm line-through mt-0.5 mr-2">₽/мес.</span></span>

                            <span class="old  text-[#a3a3a3] text-sm line-through mt-0.5" v-if="item.priceOld">{{
                                item.priceOld
                                }} ₽/мес</span>
                        </div>
                    </div>
                    <div class="course__get mt-6">
                        <a href="javascript:jivo_api.open()" class="flex justify-center bg-purple text-white hover:bg-purple-hover text-sm border-0 rounded-xl px-5 py-3 w-full">
                            Записаться
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const courses = [
     {
        id: 2,
        title: 'Базовый курс',
        advantages: [
            '3 месяца (1 месяц при ускоренном темпе)',
            '7 практических работ с обратной связью',
            '1 проект в портфолио',
            '5 личных встреч с экспертом в Казани или в Москве'
        ],
        priceNew: 69000,
        popular: false,
    }, {
        id: 3,
        title: 'Эксперт',
        advantages: [
            '3 месяца (1 месяц при ускоренном темпе)',
            '7 практических работ с обратной связью',
            '1 проект в портфолио',
            '9 личных встреч с экспертом в Казани или в Москве'
        ],
        priceOld: 119000,
        popular: true,
        priceNew: 99000,
    },
]
</script>

<style scoped>

</style>