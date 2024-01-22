<template>
    <section class="plan py-[72px] xl:pt-[40px]" id="reviews">
        <div class="content">
            <h2 class="text-[52px] xl:text-3xl font-bold">Отзывы участников ★&nbsp;4,7</h2>
            <el-carousel :interval="4000" height="200px" class="max-w-[720px] mx-auto mt-5">
                <el-carousel-item v-for="item in 6" :key="item" class="rounded-[20px] p-5 bg-gray">
                    <div class="flex items-center gap-4">
                        <el-avatar :size="50"/>
                        <div>
                            <h3 class="h-auto text-lg leading-normal font-bold">{{ slides.name }}</h3>
                            <span class="text-md font-[600]">{{ slides.date }}</span>
                        </div>
                    </div>
                    <p class="my-4 text-sm">“ {{ slides.text }} “</p>
                </el-carousel-item>
            </el-carousel>
        </div>

    </section>
</template>

<script>
export default {
    name: "ReviewsComponent",
    data() {
        return {
            slides: {
                id: 1,
                name: "Наргиз Асадова",
                date: "01.01.2001",
                text: "Понравилась подача спикеров, материал в доступном виде, подробные объяснения, как составить хорошее резюме, внимательная проверка практической работы."
            }
        }
    }
}
</script>

<style lang="scss">
.el-carousel__item h3 {
  line-height: normal !important;
}

.el-carousel__indicators {
  display: none;
}
</style>