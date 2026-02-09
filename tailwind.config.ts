import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Water-themed palette
                water: {
                    blue: '#00B4D8',        // Bright cyan
                    deep: '#0077B6',        // Deep ocean
                    light: '#90E0EF',       // Light aqua
                    glass: '#CAF0F8',       // Clear water
                    foam: '#FFFFFF',        // White foam
                    shadow: '#03045E',      // Deep dark blue
                },
                // Dark backgrounds
                dark: {
                    pure: '#000000',
                    card: '#0A0A0A',
                    elevated: '#151515',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Poppins', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-water': 'linear-gradient(180deg, #E0F7FA 0%, #B2EBF2 100%)',
                'gradient-deep': 'linear-gradient(180deg, #0077B6 0%, #03045E 100%)',
            },
            animation: {
                'float': 'float 4s ease-in-out infinite',
                'rise': 'rise 6s ease-in infinite',
                'wave': 'wave 10s linear infinite',
                'ripple': 'ripple 0.8s ease-out',
                'shimmer': 'shimmer 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                rise: {
                    '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(-100px) scale(1)', opacity: '0' },
                },
                wave: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                ripple: {
                    '0%': { transform: 'scale(0)', opacity: '1' },
                    '100%': { transform: 'scale(4)', opacity: '0' },
                },
                shimmer: {
                    '0%, 100%': { backgroundPosition: '-1000px 0' },
                    '50%': { backgroundPosition: '1000px 0' },
                },
            },
        },
    },
    plugins: [],
};

export default config;

