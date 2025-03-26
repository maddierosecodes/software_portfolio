# Bosons

## Atomic Design System

### What are bosons?

Bosons are the _smallest_ elements in our design system. They are pure styling elements that don't affect behaviour. In our project, bosons are implemented using TailwindCSS, which provides a utility-first approach to styling. This approach offers several benefits:

- **Consistency**: Predefined utility classes ensure consistent styling across components
- **Maintainability**: Changes to design tokens are centralized and automatically propagate
- **Performance**: Only used styles are included in the final bundle
- **Responsiveness**: Built-in responsive design utilities
- **Dark Mode**: Native support for dark/light mode switching

### Implementation

Bosons are implemented in our global styles (`globals.css`) using Tailwind's `@layer components` directive. This allows us to create custom utility classes that extend Tailwind's functionality while maintaining the same performance benefits.

### Example Bosons

```css
/* Theme Bosons (Design Tokens) */
@theme {
  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Merriweather', serif;
  --font-display: 'Playfair Display', serif;
  --font-handwriting: 'Kalam', cursive;
  --font-futuristic: 'Orbitron', sans-serif;
  --font-bold: 'Oswald', sans-serif;

  /* Colour System */
  --color-white-50: #fdfcfb;
  --color-white-100: #faf9f6;
  /* ... other colour variations */
}

/* Component Bosons */
@layer components {
  /* Typography Bosons */
  .title {
    @apply text-4xl font-bold text-white-200 text-[clamp(3rem,6vw,6rem)];
  }

  .subtitle {
    @apply text-3xl font-handwriting text-gold-200 text-[clamp(2rem,4vw,4rem)];
  }

  .body-text {
    @apply font-primary text-peach-300 text-[clamp(1rem,2vw,2rem)];
  }

  /* Layout Bosons */
  .flex-center {
    @apply flex justify-center items-center;
  }

  .flex-between {
    @apply flex justify-between items-center;
  }

  .section-container {
    @apply mx-[10%] px-10 pt-10 h-fit pb-20;
  }

  /* Responsive Bosons */
  .content-width {
    @apply sm:w-1/2 w-full;
  }

  /* Spacing Bosons */
  .section-spacing {
    @apply space-y-4;
  }

  .content-padding {
    @apply lg:pl-10 sm:px-20;
  }

  /* Interactive Bosons */
  .text-gradient-gold {
    @apply text-gold-200 hover:text-gold-300 transition-colors duration-200;
  }

  .border-gradient-pink {
    @apply border-pink-200 hover:border-pink-300 transition-colors duration-200;
  }
}
```

### Usage

Bosons are used throughout the application in two ways:

1. **Direct Utility Classes**

   ```jsx
   <div className="flex-center section-spacing">
     <h1 className="title">Hello World</h1>
     <p className="body-text">Some content</p>
   </div>
   ```

2. **Component-Specific Styles**
   ```jsx
   <button className="text-gradient-gold border-gradient-pink">Click me</button>
   ```

### Benefits of Our Approach

1. **Design System Integration**

   - Bosons serve as the foundation of our design system
   - They ensure consistency across all components
   - They make it easy to maintain and update the design system

2. **Performance**

   - Tailwind's utility-first approach means only used styles are included
   - No unused CSS in production
   - Smaller bundle sizes

3. **Maintainability**

   - Centralized design tokens
   - Easy to update across the entire application
   - Clear naming conventions

4. **Responsiveness**

   - Built-in responsive utilities
   - Consistent breakpoints
   - Mobile-first approach

5. **Accessibility**
   - Consistent spacing and typography
   - Built-in focus states
   - Colour contrast utilities

## Layout Components

Layout components are specialized components that handle the positioning and structure of content. They are distinct from regular components as they focus solely on layout concerns and are highly reusable across different pages.

### TwoColumnLayout

A reusable two-column layout component that provides consistent spacing and responsive behavior.

```tsx
<TwoColumnLayout>
  <div>Left Column Content</div>
  <div>Right Column Content</div>
</TwoColumnLayout>
```

### HeaderLayout

A three-section header layout component that provides consistent header structure and spacing.

```tsx
<HeaderLayout>
  <div>Left Section</div>
  <div>Center Section</div>
  <div>Right Section</div>
</HeaderLayout>
```

### FooterLayout

A footer layout component that provides consistent footer structure and spacing.

```tsx
<FooterLayout>
  <div>Footer Content</div>
</FooterLayout>
```

### Usage Guidelines

- Use layout components to maintain consistent spacing and structure across pages
- Layout components should not contain business logic or complex UI elements
- Combine layout components to create more complex page structures
- Always provide className props for custom styling when needed
- Layout components use the existing boson classes for consistent styling

## Layout Patterns

Our application uses a combination of Next.js 13+ layout conventions and Tailwind CSS utilities for consistent layout management.

### Page Layout Structure

1. **Root Layout** (`app/layout.tsx`)

   - Provides the global layout structure
   - Includes header, main content area, and footer
   - Manages global styles and metadata

2. **Route Layouts** (`app/[route]/layout.tsx`)

   - Optional route-specific layouts
   - Inherits from root layout
   - Used for route-specific layout requirements

3. **Page Components** (`app/[route]/page.tsx`)
   - Implements the actual page content
   - Uses consistent layout patterns through Tailwind classes

### Common Layout Patterns

```tsx
// Section Container Pattern
<section className="flex justify-center items-center mx-[10%] px-10 pt-10 h-fit pb-20 custom-flex-col">
  {/* Content */}
</section>

// Flex Column Pattern
<div className="custom-flex-col">
  {/* Content */}
</div>

// Responsive Container Pattern
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

### Usage Guidelines

- Use Next.js layout files for structural layouts
- Leverage Tailwind classes for consistent spacing and positioning
- Follow the established section container pattern for main content areas
- Use semantic HTML elements with appropriate ARIA labels
- Maintain consistent spacing through predefined Tailwind utilities
