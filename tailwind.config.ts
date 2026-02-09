import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Glassmorphic glass colors
                glass: {
                    light: 'rgba(255, 255, 255, 0.1)',
                    medium: 'rgba(255, 255, 255, 0.15)',
                    heavy: 'rgba(255, 255, 255, 0.2)',
                    dark: 'rgba(255, 255, 255, 0.05)',
                },
                // Text colors for glass
                'text-glass': {
                    primary: '#FFFFFF',
                    secondary: 'rgba(255, 255, 255, 0.9)',
                    muted: 'rgba(255, 255, 255, 0.7)',
                    hint: 'rgba(255, 255, 255, 0.5)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'sans-serif'],
            },
            backdropBlur: {
                'glass': '20px',
                'glass-heavy': '40px',
            },
            backgroundImage: {
                // Vibrant iOS-style gradients
                'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'gradient-pink': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'gradient-blue': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'gradient-sunset': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'gradient-ocean': 'linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)',
                'gradient-fire': 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
            },
            boxShadow: {
                'glass': '0 8px 32px rgba(31, 38, 135, 0.15)',
                'glass-hover': '0 12px 40px rgba(31, 38, 135, 0.25)',
                'glass-sm': '0 4px 16px rgba(31, 38, 135, 0.1)',
            },
            animation: {
                'gradient': 'gradientShift 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
            },
            keyframes: {
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
