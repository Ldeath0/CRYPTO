/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0F172A', // Slate 900
                surface: '#1E293B',    // Slate 800
                primary: '#8B5CF6',    // Violet 500
                secondary: '#EC4899',  // Pink 500
                accent: '#F59E0B',     // Amber 500
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    plugins: [],
}
