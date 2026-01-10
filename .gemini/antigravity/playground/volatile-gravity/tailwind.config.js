/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#3B82F6', // Using blue-500 as base or a specific slate blue
                    green: '#10B981', // Emerald-500
                    dark: '#1E293B', // Slate-800
                    light: '#F8FAFC', // Slate-50
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
