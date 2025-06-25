
# AltPath.ai Style Guide

## Brand Identity

**Brand Voice:** Practical, warm, lightly playful  
**Design Principle:** Elegant Pragmatism — everything must score on BOTH "works" AND "delights"

## Color Palette

### Primary Neutrals
- **Lightest**: #F7F7F5 (neutral-50) - Page backgrounds
- **Light**: #EEEEEC (neutral-100) - Card backgrounds  
- **Medium**: #DDDDD9 (neutral-200) - Borders, subtle dividers
- **Dark**: #666666 (neutral-600) - Secondary text
- **Darkest**: #2E2E2E (neutral-800) - Primary text

### Accent Color
- **Primary Accent**: #56C2A5 (accent-500) - Interactive elements, highlights
- **Hover State**: #4AB396 (accent-600) - Button hover, active states
- **Background Tint**: #F0FAF7 (accent-50) - Subtle backgrounds, hover states

## Typography

### Font Families
- **Display/Headings**: 'Cormorant', Georgia, serif
- **Body Text**: 'Inter', system-ui, -apple-system, sans-serif

### Type Scale
- **H1**: `clamp(2.2rem, 4vw + 1rem, 4rem)` - Hero headings
- **H2**: `clamp(1.8rem, 3vw + 1rem, 3rem)` - Section headings
- **Body**: 16px base, line-height 1.6
- **Small**: 14px for captions, meta text

### Content Width
- **Optimal Reading**: 68 characters max-width for text blocks
- **Container**: 1200px max-width for layouts

## Spacing System

### Section Spacing
- **Vertical**: `min(15vh, 10rem)` between major sections
- **Component**: 1rem, 1.5rem, 2rem, 3rem, 4rem increments

### Content Spacing
- **Paragraph**: 1.5rem margin-bottom
- **Headings**: 0.5rem margin-bottom
- **Lists**: 0.75rem between items

## Component Specifications

### Buttons
- **Border Radius**: 8px
- **Padding**: 12px 24px (default), 16px 32px (large)
- **Transition**: 150ms ease-out
- **Hover Effect**: Subtle shadow `0 4px 12px rgba(0, 0, 0, 0.15)`

### Cards
- **Background**: White with 1px neutral-200 border
- **Border Radius**: 8px
- **Padding**: 2rem (32px)
- **Hover**: Scale 1.02, shadow, accent border

### Form Elements
- **Input Height**: 44px minimum (touch-friendly)
- **Border**: 1px solid neutral-200
- **Focus**: 2px dotted accent-600 outline

## Accessibility Standards

### Focus Management
- **Focus Ring**: 2px dotted accent-600, 2px offset
- **Tab Order**: Visual order matches tab order
- **Skip Links**: Hidden until focused

### Motion Preferences
- **Reduced Motion**: All animations disabled via `@media (prefers-reduced-motion: reduce)`
- **Animation Duration**: 150-300ms for UI interactions, 3s for decorative

### Color Contrast
- **AA Standard**: 4.5:1 minimum for normal text
- **AAA Standard**: 7:1 for important interface elements

## Layout Patterns

### Grid System
- **Mobile**: Single column, 1rem gutters
- **Tablet**: 2-3 columns, 1.5rem gutters  
- **Desktop**: 3-4 columns, 2rem gutters

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Icon Guidelines

### Icon Library
- **Primary**: Lucide React icons
- **Size**: 16px, 20px, 24px standard sizes
- **Color**: Inherit from parent text color
- **Accessibility**: Decorative icons hidden from screen readers

### Usage Rules
- **Functional Icons**: Must have accessible labels
- **Decorative Icons**: aria-hidden="true"
- **Interactive Icons**: Minimum 44px touch target

## Animation Principles

### Micro-Interactions
- **Hover States**: 150ms ease-out
- **Button Press**: 100ms ease-in
- **Page Transitions**: 300ms ease-out

### Decorative Animation
- **Duration**: 3s cycles for ambient animation
- **Easing**: ease-in-out for smooth loops
- **Performance**: CSS transforms only, avoid layout changes

## Performance Guidelines

### Page Weight
- **Target**: < 1MB total page weight
- **Images**: WebP format preferred, SVG for icons
- **Fonts**: System font fallbacks, preload critical fonts

### Loading Strategy
- **Critical CSS**: Inline above-the-fold styles
- **Progressive Enhancement**: Core content works without JavaScript
- **Lazy Loading**: Images and non-critical content

## Code Standards

### CSS Organization
```css
/* 1. Custom properties (variables) */
/* 2. Base styles (elements) */
/* 3. Component styles (classes) */
/* 4. Utility classes */
/* 5. Media queries */
```

### Class Naming
- **BEM Methodology**: `.block__element--modifier`
- **Utility Classes**: Single-purpose, composable
- **State Classes**: `.is-active`, `.is-loading`

### JavaScript Integration
- **Alpine.js**: For simple interactions (accordions, toggles)
- **Vanilla JS**: For complex behaviors
- **Progressive Enhancement**: Core functionality works without JS
