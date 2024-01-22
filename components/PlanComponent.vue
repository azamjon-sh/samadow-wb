<template>
    <section class="plan pt-[72px] xl:pt-[40px]" id="you-get">
        <div class="content">
            <h2 class="text-[52px] font-bold xl:text-4xl">Чему вы научитесь</h2>
            <div class="plan_grid flex flex-wrap grid-cols-3 items-start gap-6 justify-between mt-[50px] lg:justify-center">
                <div class="flex gap-3 basis-[360px] max-w-[360px]" v-for="item in plan">
                    <img class="w-8 h-8 sm:w-6 sm:h-6" src="~/assets/images/check.svg" alt="">
                    <h3 class="font-[600] text-lg inline sm:text-sm">{{ item }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PlanComponent",
    data() {
        return {
            plan: [
                "Оформлять профиль поставщика и заполнять визитку",
                "Определять товары и ниши, которые принесут максимальную прибыль",
                "Просчитывать юнит-экономику и финансовый план запуска товаров",
                "Оформлять карточки товаров и оптимизировать их для продвижения",
                "Готовить товары к поставкам на Wildberries и работать по схемам FBO и FBS",
                "Запускать рекламные кампании и привлекать новых клиентов",
                "Запускать акции и скидки, которые принесут ещё больше прибыли",
                "Анализировать отчёты по продажам и улучшать показатели",
                "Решать проблемные ситуации с онлайн-площадкой",

            ]
        }
    }
}
</script>

<style scoped>

</style>