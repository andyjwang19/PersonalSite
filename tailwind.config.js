/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Helvetica Neue'],
        },
        extend: {
            colors: {
                'header-orange': '#FFBE86',
                'background-lavender': '#E3D7FF',
            },
            dropShadow: {
                heavy: '6px 6px 4px rgba(0, 0, 0, 0.25)',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
