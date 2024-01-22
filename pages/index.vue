<template>
    <AppHeader/>
    <main>
        <IntroComponent />
        <MentorComponent/>
        <AdvantagesComponent/>
        <PlanComponent/>
        <ReviewsComponent/>
        <CoursesComponent/>
        <QuestionsComponent/>
    </main>
    <AppFooter/>
</template>

<script setup>
useHead({
    title: 'Эксперт Wildberries - Курс по работе на маркетплейсе',
    meta: [
        { hid: 'description', name: 'description', content: 'Изучите, как стать экспертом по работе на Wildberries с нашим курсом.' },
        { hid: 'og:title', property: 'og:title', content: 'Эксперт Wildberries - Курс по работе на маркетплейсе' },
        { hid: 'og:description', property: 'og:description', content: 'Изучите, как стать экспертом по работе на Wildberries с нашим курсом.' },
        { hid: 'og:image', property: 'og:image', content: 'ссылка на изображение для представления курса' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Эксперт Wildberries - Курс по работе на маркетплейсе' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Изучите, как стать экспертом по работе на Wildberries с нашим курсом.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'ссылка на изображение для представления курса' },
        { name: 'google-site-verification', content: 'NRIlfcShU6_3QQbq3kmbR_f0E2IvNhPdGBY28FEg9lI' },
        { name: 'yandex-verification', content: '209ded339831728d' },
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Course',
                'name': 'Эксперт Wildberries',
                'description': 'Курс по работе на маркетплейсе Wildberries.',
                'provider': {
                    '@type': 'Organization',
                    'name': 'Samadov-WB'
                }
            })
        }
    ]
})
</script>

<style scoped>

</style>