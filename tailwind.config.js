/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Marcellus', 'serif', 'cormorant infant', 'Cormorant Garamond', 'Barlow Semi Condensed'],// Add your Google Fonts
            },
            screens: {
                xs: '500px', // Add a custom breakpoint at 500px
            },
            colors: {
                gold: "#C9A96B",
            },
        },
    },
    plugins: [],
};