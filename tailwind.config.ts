import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Sophisticated dark palette - replacing pure black
                navy: {
                    950: '#0a0e1a',  // Deep background
                    900: '#101525',  // Card/elevated surfaces
                    800: '#1a2332',  // Hover states
                    700: '#2a3444',  // Borders
                    600: '#3a4556',  // Muted elements
                },
                // Refined accent colors - replacing aggressive cyan
                accent: {
                    600: '#2563eb',  // Darker blue
                    500: '#3b82f6',  // Primary action
                    400: '#60a5fa',  // Hover state
                    300: '#93c5fd',  // Subtle highlights
                },
                // Warm neutrals for better readability
                slate: {
                    400: '#94a3b8',
                    300: '#cbd5e1',
                    200: '#e2e8f0',
                    100: '#f1f5f9',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-professional': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
                'gradient-subtle': 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%)',
            },
        },
    },
    plugins: [],
};

export default config;
