# Atoms

## Atomic Design System

### What are atoms?

Atoms are the _smallest_ behavioural components in our design system. They are the building blocks that combine with bosons (styling) to create more complex components. Atoms are purposeful, single-responsibility components that affect user interaction.

### Implementation

Atoms are implemented as React components using TypeScript and styled with our boson system. They are designed to be reusable and maintainable, with clear props interfaces and consistent styling.

### Example Atoms

```tsx
// CallToActionButton.tsx
interface CallToActionButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button className={`cta-button ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

// ProfileImage.tsx
interface ProfileImageProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  size = 'medium',
}) => {
  return <img src={src} alt={alt} className={`profile-image ${size}`} />;
};
```

### Current Atoms

1. **CallToActionButton**

   - Purpose: Primary and secondary action buttons
   - Props: text, onClick, variant
   - Styling: Uses text-gradient-gold and border-gradient-pink bosons

2. **ProfileImage**

   - Purpose: Circular profile images with consistent sizing
   - Props: src, alt, size
   - Styling: Uses responsive image bosons

3. **ThreeLayerTitleText**
   - Purpose: Multi-layered text effects for headings
   - Props: text, layers
   - Styling: Uses typography bosons

### Usage

Atoms are used throughout the application as standalone components or as building blocks for molecules:

```tsx
// Standalone usage
<CallToActionButton
  text="Get Started"
  onClick={() => console.log('Clicked')}
/>

// As part of a molecule
<Hero>
  <ProfileImage src="/profile.jpg" alt="Profile" />
  <ThreeLayerTitleText text="Welcome" />
</Hero>
```

### Benefits of Our Approach

1. **Consistency**

   - Standardised component interfaces
   - Consistent styling through bosons
   - Predictable behaviour

2. **Maintainability**

   - Single responsibility principle
   - Clear prop interfaces
   - Easy to test and debug

3. **Reusability**

   - Components can be used anywhere
   - Props allow for flexibility
   - Styling is consistent

4. **Accessibility**

   - Built-in ARIA attributes
   - Keyboard navigation support
   - Screen reader friendly

5. **Performance**
   - Lightweight components
   - Optimised rendering
   - Minimal dependencies
