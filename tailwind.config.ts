import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Color System: Restrained premium palette
            colors: {
                // Backgrounds
                background: "hsl(var(--background))",
                "background-surface": "hsl(var(--background-surface))", // Subtle elevated surfaces
                "background-card": "hsl(var(--background-card))",

                // Typography
                foreground: "hsl(var(--foreground))", // Soft white typography
                "foreground-secondary": "hsl(var(--foreground-secondary))", // Muted secondary text
                "foreground-muted": "hsl(var(--foreground-muted))", // Even more muted text

                // Accent color
                accent: "hsl(var(--accent))",
                "accent-foreground": "hsl(var(--accent-foreground))",

                // Amber accent system
                amber: "hsl(var(--amber))",
                "amber-light": "hsl(var(--amber-light))",
                "amber-dark": "hsl(var(--amber-dark))",

                // Borders
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },
            // Typography System: Inter Tight
            fontFamily: {
                sans: ["var(--font-inter-tight)", "sans-serif"],
            },
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1.25rem", letterSpacing: "-0.01em" }], // Adjusted line-height
                sm: ["0.875rem", { lineHeight: "1.4rem", letterSpacing: "-0.01em" }], // Adjusted line-height
                base: ["1rem", { lineHeight: "1.625rem", letterSpacing: "-0.01em" }], // Adjusted line-height
                lg: ["1.125rem", { lineHeight: "1.875rem", letterSpacing: "-0.015em" }],
                xl: ["1.25rem", { lineHeight: "2rem", letterSpacing: "-0.02em" }],
                "2xl": ["1.5rem", { lineHeight: "2.25rem", letterSpacing: "-0.02em" }],
                "3xl": ["1.875rem", { lineHeight: "2.375rem", letterSpacing: "-0.025em" }],
                "4xl": ["2.25rem", { lineHeight: "2.625rem", letterSpacing: "-0.025em" }],
                "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
                "6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
                "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.035em" }],
                "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
                "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
            },
            fontWeight: { // Added for more precise control
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            // Spacing System: 8px grid
            spacing: {
                "0": "0px",
                "1": "4px",   // 0.25rem
                "2": "8px",   // 0.5rem
                "3": "12px",  // 0.75rem
                "4": "16px",  // 1rem
                "5": "20px",  // 1.25rem
                "6": "24px",  // 1.5rem
                "7": "28px",  // 1.75rem
                "8": "32px",  // 2rem
                "9": "36px",  // 2.25rem
                "10": "40px", // 2.5rem
                "11": "44px", // 2.75rem
                "12": "48px", // 3rem
                "14": "56px", // 3.5rem
                "16": "64px", // 4rem
                "20": "80px", // 5rem
                "24": "96px", // 6rem
                "28": "112px",// 7rem
                "32": "128px",// 8rem
                "36": "144px",// 9rem
                "40": "160px",// 10rem
                "44": "176px",// 11rem
                "48": "192px",// 12rem
                "52": "208px",// 13rem
                "56": "224px",// 14rem
                "60": "240px",// 15rem
                "64": "256px",// 16rem
                "72": "288px",// 18rem
                "80": "320px",// 20rem
                "96": "384px",// 24rem
                // Custom larger spacing for intentional breathing room
                "100": "400px", // 25rem
                "120": "480px", // 30rem
                "160": "640px", // 40rem
            },
            // Border System: Subtle and refined
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            // Motion Principles: Smooth and restrained
            transitionTimingFunction: {
                "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)", // Custom subtle easing
                "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
                "in-out-expo": "cubic-bezier(0.85, 0, 0.15, 1)",
                "linear-ease": "cubic-bezier(0.25, 0.25, 0.75, 0.75)", // Linear-inspired easing
            },
            transitionDuration: {
                "DEFAULT": "300ms", // Default transition duration
                "100": "100ms",
                "200": "200ms",
                "300": "300ms",
                "400": "400ms",
                "500": "500ms",
                "700": "700ms",
                "1000": "1000ms",
            },
        },
    },
    plugins: [],
};

export default config;
