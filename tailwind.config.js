/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Include files in the src directory
        "!./node_modules/**/*"        // Explicitly exclude node_modules
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Marcellus', 'serif', 'Cormorant Infant', 'Cormorant Garamond', 'Barlow Semi Condensed'], // Fix capitalization for consistency
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
