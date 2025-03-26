# Molecules

## Atomic Design System

### What are molecules?

Molecules are combinations of atoms and bosons that form more complex, self-contained components. They are unopinionated components that can be used in various contexts without being tied to specific business logic or data.

### Implementation

Molecules are implemented as React components that compose atoms and apply boson styling. They maintain a clear separation of concerns and avoid business logic, making them highly reusable across different contexts.

### Example Molecules

```tsx
// Hero.tsx
interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <section className="hero section-container">
      <div className="hero-content content-width">
        <ThreeLayerTitleText text={title} />
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
      {image && <ProfileImage src={image} alt={title} />}
    </section>
  );
};

// NavBar.tsx
interface NavBarProps {
  links: Array<{
    text: string;
    href: string;
  }>;
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="nav-link">
          {link.text}
        </a>
      ))}
    </nav>
  );
};
```

### Current Molecules

1. **Hero**

   - Purpose: Main hero section with title and optional image
   - Props: title, subtitle, image
   - Components: ThreeLayerTitleText, ProfileImage
   - Styling: Uses section-container and content-width bosons

2. **NavBar**
   - Purpose: Navigation menu with links
   - Props: links array
   - Styling: Uses flex-between and section-spacing bosons

### Usage

Molecules are used to create consistent layouts and patterns throughout the application:

```tsx
// Page usage
<Page>
  <NavBar links={navigationLinks} />
  <Hero title="Welcome" subtitle="Software Developer" image="/profile.jpg" />
</Page>
```

### Benefits of Our Approach

1. **Flexibility**

   - Context-independent components
   - Reusable across different pages
   - Easy to adapt to new requirements

2. **Maintainability**

   - Clear component boundaries
   - Consistent composition patterns
   - Easy to test and modify

3. **Consistency**

   - Standardised layout patterns
   - Consistent spacing and alignment
   - Unified styling approach

4. **Performance**

   - Optimised component composition
   - Efficient rendering
   - Minimal prop drilling

5. **Accessibility**
   - Semantic HTML structure
   - ARIA landmarks
   - Keyboard navigation support
