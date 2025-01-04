/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                marcellus: ['Marcellus', 'serif'],
                barlow400: ['Barlow Semi Condensed', 'sans-serif'], // For weight 400
                barlow500: ['Barlow Semi Condensed', 'sans-serif'], // For weight 500
                garamond500: ['Cormorant Garamond', 'serif'], // For weight 500
                infant600: ['Cormorant Infant', 'serif'], // For weight 600
                poppins500: ['Poppins', 'sans-serif'],
            },
            screens: {
                xs: '500px', // Add a custom breakpoint at 500px
                '3xl': '1700px'
            },
            colors: {
                gold: "#C9A96B",
            },
        },
    },
    plugins: [],
};