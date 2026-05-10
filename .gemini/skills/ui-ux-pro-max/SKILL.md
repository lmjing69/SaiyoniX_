---
name: ui-ux-pro-max
description: UI/UX design intelligence with 67 styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types. Use when needing design systems, color palettes, typography recommendations, or UX best practices for web and mobile apps.
---

# UI/UX Pro Max

AI-powered design intelligence with 67 UI styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 15+ tech stacks.

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

---

## How to Use This Skill

Use this skill when the user requests any of the following:

| Scenario | Trigger Examples | Start From |
|----------|-----------------|------------|
| **New project / page** | "做一个 landing page"、"Build a dashboard" | Step 1 → Step 2 (design system) |
| **New component** | "Create a pricing card"、"Add a modal" | Step 3 (domain search: style, ux) |
| **Choose style / color / font** | "What style fits a fintech app?"、"推荐配色" | Step 2 (design system) |
| **Review existing UI** | "Review this page for UX issues" | Step 3 (domain search: ux) |
| **Fix a UI bug** | "Button hover is broken" | Step 3 (domain search: ux) |
| **Improve / optimize** | "Make this faster" | Step 3 (domain search: ux) |
| **Implement dark mode** | "Add dark mode support" | Step 3 (domain: style "dark mode") |
| **Add charts / data viz** | "Add an analytics dashboard chart" | Step 3 (domain: chart) |
| **Stack best practices** | "React performance tips" | Step 4 (stack search) |

### Step 1: Analyze Requirements

Extract product type, audience, style keywords, and tech stack.

### Step 2: Generate Design System

**Always start with `--design-system`**:

```bash
python3 scripts/search.py "<product_type> <industry> <keywords>" --design-system -p "Project Name"
```

### Step 3: Supplement with Detailed Searches

```bash
python3 scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

| Need | Domain |
|------|--------|
| Product type patterns | `product` |
| More style options | `style` |
| Color palettes | `color` |
| Font pairings | `typography` |
| Chart recommendations | `chart` |
| UX best practices | `ux` |
| Landing structure | `landing` |
| React/Next.js perf | `react` |
| AI prompt / CSS keywords | `prompt` |

### Step 4: Stack Guidelines

```bash
python3 scripts/search.py "<keyword>" --stack <stack_name>
```
Available stacks: `react`, `nextjs`, `vue`, `svelte`, `astro`, `swiftui`, `react-native`, `flutter`, `nuxtjs`, `nuxt-ui`, `html-tailwind`, `shadcn`, `jetpack-compose`, `threejs`, `angular`, `laravel`.

---

## Example Workflow

**User request:** "Make an AI search homepage."

1. **Generate Design System**:
   ```bash
   python3 scripts/search.py "AI search tool modern minimal" --design-system -p "AI Search"
   ```

2. **Detail Search**:
   ```bash
   python3 scripts/search.py "search loading animation" --domain ux
   ```

3. **Stack Guidelines**:
   ```bash
   python3 scripts/search.py "list performance" --stack nextjs
   ```

---

## Common Rules for Professional UI

- **Icons**: Use Phosphor Icons. Avoid Emojis as structural icons.
- **Touch Targets**: Minimum 44x44pt.
- **Contrast**: WCAG 4.5:1 for body text.
- **Spacing**: 8dp rhythm.
