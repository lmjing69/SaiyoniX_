import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                card: "var(--card)",
                "card-foreground": "var(--card-foreground)",
                popover: "var(--popover)",
                "popover-foreground": "var(--popover-foreground)",
                primary: "var(--primary)",
                "primary-foreground": "var(--primary-foreground)",
                secondary: "var(--secondary)",
                "secondary-foreground": "var(--secondary-foreground)",
                muted: "var(--muted)",
                "muted-foreground": "var(--muted-foreground)",
                accent: "var(--accent)",
                "accent-foreground": "var(--accent-foreground)",
                destructive: "var(--destructive)",
                "destructive-foreground": "var(--destructive-foreground)",
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                // Glassmorphic glass colors - Updated for Light Theme
                glass: {
                    light: 'rgba(255, 255, 255, 0.7)',
                    medium: 'rgba(255, 255, 255, 0.5)',
                    heavy: 'rgba(255, 255, 255, 0.9)',
                    dark: 'rgba(0, 0, 0, 0.05)', // Subtle dark tint for contrast
                },
                // Text colors for glass - Darker for readability on light
                'text-glass': {
                    primary: '#1e293b', // Slate 800
                    secondary: '#475569', // Slate 600
                    muted: '#94a3b8', // Slate 400
                    hint: '#cbd5e1', // Slate 300
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
