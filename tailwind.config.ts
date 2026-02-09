import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Crystal Clear Water Palette
                water: {
                    bg: '#FFFFFF',          // Pure White Background
                    surface: '#F0F9FF',     // Sky 50 - Very Pale Water
                    border: '#BAE6FD',      // Sky 200 - Light Water Border
                    text: '#0C4A6E',        // Sky 900 - Deep Ocean Text (High Contrast)
                    primary: '#0EA5E9',     // Sky 500 - Primary Action
                    hover: '#0284C7',       // Sky 600 - Hover State
                },
                // Keep standard colors for utility
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Inter', 'sans-serif'], // Revert to clean Inter for professional look
            },
            backgroundImage: {
                'gradient-water': 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)',
                'gradient-shimmer': 'linear-gradient(45deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 60%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'flow': 'flow 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                flow: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
};

export default config;

