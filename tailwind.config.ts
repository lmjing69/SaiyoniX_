import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Light, clean backgrounds
                light: {
                    50: '#FFFFFF',   // Pure white
                    100: '#F8FAFC',  // Soft gray - subtle backgrounds
                    200: '#F1F5F9',  // Card backgrounds
                    300: '#E2E8F0',  // Borders
                    400: '#CBD5E1',  // Muted borders
                },
                // Engaging teal accent colors
                accent: {
                    700: '#0F766E',  // Darker teal
                    600: '#0D9488',  // Primary CTAs
                    500: '#14B8A6',  // Hover states
                    400: '#2DD4BF',  // Light accents
                    300: '#5EEAD4',  // Highlights
                    200: '#99F6E4',  // Very light
                },
                // Professional text colors
                text: {
                    primary: '#0F172A',    // Headings - slate-900
                    secondary: '#475569',  // Body text - slate-600
                    muted: '#64748B',      // Hints - slate-500
                    light: '#94A3B8',      // Very muted - slate-400
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-teal': 'linear-gradient(135deg, #0D9488 0%, #14B8A6 50%, #2DD4BF 100%)',
                'gradient-subtle': 'linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, rgba(94, 234, 212, 0.05) 100%)',
            },
            boxShadow: {
                'soft': '0 2px 8px rgba(15, 23, 42, 0.04)',
                'card': '0 4px 12px rgba(15, 23, 42, 0.06)',
                'card-hover': '0 8px 24px rgba(15, 23, 42, 0.08)',
            },
        },
    },
    plugins: [],
};

export default config;
