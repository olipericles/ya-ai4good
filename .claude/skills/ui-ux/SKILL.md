---
name: ui-ux
description: Apply UI/UX best practices and premium aesthetics to frontend components and layouts. Use this when creating new UI, refactoring components, or auditing design consistency.
---

# UI/UX Best Practices & Premium Aesthetics

When this skill is invoked, Claude should follow these guidelines to ensure the highest quality user interface and experience.

## 1. Visual Hierarchy & Typography
- **Contrast**: Maintain clear distinction between headings and body text. Use `font-weight` and `text-color` (slate/gray scales) to establish hierarchy.
- **Readability**: Body text should be at least `16px` (`text-base`) with a line height of `1.5` to `1.6`.
- **Fonts**: Use modern sans-serif fonts (Inter, Roboto, or system defaults). Avoid decorative fonts for body text.

## 2. Consistency & Design Tokens
- **Colors**: Use colors defined in `tailwind.config.ts`. Do not use hardcoded hex values.
- **Spacing**: Follow the 4px/8px grid system. Use Tailwind's spacing utilities (`p-2`, `m-4`, etc.).
- **Rounding**: Maintain consistent `border-radius`. Prefer `rounded-lg` or `rounded-xl` for a modern look.

## 3. Accessibility (WCAG 2.1)
- **Aria Labels**: Add `aria-label` to buttons or links that don't have visible text.
- **Focus States**: Ensure all interactive elements have visible `:focus-visible` states (e.g., `focus:ring-2 focus:ring-primary`).
- **Semantic HTML**: Use `<main>`, `<section>`, `<nav>`, and proper heading levels (`h1`-`h6`).

## 4. Responsiveness & Mobile-First
- **Breakpoints**: Always design for mobile first. Use `sm:`, `md:`, `lg:`, `xl:` prefixes.
- **Touch Targets**: Buttons and interactive elements must be at least `44x44px` on mobile.

## 5. Interaction & Feedback
- **States**: Every button must have `hover`, `active`, and `disabled` states.
- **Transitions**: Use `transition-all duration-200` or `framer-motion` for smooth interactions.
- **Loading States**: Provide skeleton screens or spinners for asynchronous operations using shadcn components.

## 6. Premium Aesthetics (Aesthetics "WOW" Factor)
- **Glassmorphism**: Use `bg-white/10 backdrop-blur-md` for overlays where appropriate.
- **Gradients**: Use subtle gradients for primary actions instead of flat colors.
- **Micro-animations**: Use `framer-motion` for subtle transitions on hover/entry to make the UI feel alive.
- **Shadows**: Use layered, soft shadows instead of harsh, single-layer ones.

## 7. Component Reuse
- Always check `src/components/ui` for existing shadcn components before creating new ones.
- Follow the patterns established in the project for component structure and props.
