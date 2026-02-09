import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Neon accent colors for PROJECT TWELVE style
                neon: {
                    purple: '#A855F7',
                    'purple-dark': '#9333EA',
                    pink: '#EC4899',
                    'pink-dark': '#DB2777',
                    cyan: '#06B6D4',
                    'cyan-dark': '#0EA5E9',
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
                display: ['Space Grotesk', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
                'gradient-neon': 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #06B6D4 100%)',
            },
            animation: {
                'fade-slide-up': 'fadeSlideUp 1s ease-out',
                'gentle-float': 'gentleFloat 8s ease-in-out infinite',
                'slow-rotate': 'slowRotate 60s linear infinite',
                'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};

export default config;

