/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        screens: {
            '2xl': {'max': '1439px'},

            'xl': {'max': '1279px'},

            'lg': {'max': '1023px'},

            'md': {'max': '767px'},

            'sm': {'max': '639px'},
        },
        colors: {
            'purple': '#3d3bff',
            'purple-hover': 'rgba(61,59,255,.7)',
            'white': '#fff',
            'gray': '#f5f5f5',
            'black': '#000'
        },
        fontFamily: {
            open: ['Open Sans', 'sans-serif'],
        },

    },
    plugins: [],
}