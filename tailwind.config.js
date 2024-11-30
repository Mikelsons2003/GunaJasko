/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Marcellus', 'serif', 'cormorant infant', 'Cormorant Garamond', 'Barlow Semi Condensed'],// Add your Google Fonts
            },
            colors: {
                gold: "#C9A96B",
            },
        },
    },
    plugins: [],
};