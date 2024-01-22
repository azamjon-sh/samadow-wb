<template>
    <section class="mentor pt-[72px] xl:pt-[40px]" id="speaker">
        <div class="content">
            <div class="mentor__grid flex items-center gap-[80px] py-[46px] px-[54px] bg-gray rounded-[20px] xl:gap-[36px] xl:px-4 xl:py-6 md:flex-wrap">
                <div class="grow max-w-[300px] bg-white p-4 rounded-[20px]">
                    <img src="~/assets/images/mentor.png" alt="">
                </div>
                <div class="grow">
                    <span class="bg-white rounded-[20px] px-5 py-2">Курс</span>
                    <h2 class="mt-6 text-[32px] font-[700] leading-tight lg:text-2xl lg:mt-4">Наставничество</h2>
                    <p class="mt-6 text-lg mb-[48px] lg:text-sm lg:mt-4">
                        – в любое время на связи с наставником, можете задавать вопросы и разбирать повторно интересующие вас темы
                    </p>
                    <a href="javascript:jivo_api.open()" class="bg-purple text-white hover:bg-black text-md border-0 rounded-xl px-8 py-3">
                        Записаться на курс
                    </a>
                </div>
            </div>

            <div class="mentor__info pt-[80px] xl:pt-[40px]">
                <p class="text-2xl leading-normal max-w-[980px] lg:text-lg">
                    Wildberries занимает первое место среди российских торговых площадок и работает ещё в 6 странах
                    мира. У площадки огромный оборот: за первый квартал 2023 года он составил более 577 миллиардов
                    рублей. Каждая четвёртая покупка в интернете была сделана на Wildberries.
                </p>
                <p class="text-2xl leading-normal max-w-[980px] mt-9 lg:text-lg lg:mt-5">
                    Зарабатывать на маркетплейсе можно удалённо — вам понадобится только компьютер с доступом в интернет
                    и несколько часов свободного времени в день.
                </p>
                <div class="flex items-start justify-between mt-10 gap-4 flex-wrap">
                    <div class="flex-col flex justify-center grow gap-3 items-center text-center">
                        <h3 class="font-[700] text-2xl max-w-[315px]"> 1,67 трлн рублей</h3>
                        <p class="text-lg max-w-[315px]">выручка Wildberries к концу 2022 года. Это в 20 раз больше, чем
                            к концу 2021-го</p>
                    </div>
                    <div class="flex-col flex justify-center grow gap-3 items-center text-center">
                        <h3 class="font-[700] text-2xl max-w-[315px]">120 млн постоянных покупателей —</h3>
                        <p class="text-lg max-w-[315px]">активная аудитория маркетплейса, по данным Wildberries</p>
                    </div>
                    <div class="flex-col flex justify-center grow gap-3 items-center text-center">
                        <h3 class="font-[700] text-2xl max-w-[315px]">Более 780 000 заказов</h3>
                        <p class="text-lg max-w-[315px]">делают на Wildberries каждый день, по данным самой площадки</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "MentorComponent"
}
</script>

<style scoped>

</style>