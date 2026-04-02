/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                brand: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                },
            },
            animation: {
                'gradient-x': 'gradient-x 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
            },
        },
    },
    plugins: [],
};
