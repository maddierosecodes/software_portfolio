# Organisms

## Atomic Design System

### What are organisms?

Organisms are complex, contextual components that combine molecules, atoms, and bosons to create fully functional, purpose-specific components. They contain business logic and are designed for specific use cases within the application.

### Implementation

Organisms are implemented as React components that combine multiple molecules and atoms with specific business logic and data handling. They are designed to be used in specific contexts and often handle data fetching, state management, and user interactions.

### Example Organisms

```tsx
// Header.tsx
interface HeaderProps {
  currentPage: string;
  userData: {
    name: string;
    avatar: string;
  };
}

const Header: React.FC<HeaderProps> = ({ currentPage, userData }) => {
  return (
    <header className="header">
      <NavBar links={generateNavLinks(currentPage)} />
      <div className="user-section">
        <ProfileImage src={userData.avatar} alt={userData.name} size="small" />
        <span className="user-name">{userData.name}</span>
      </div>
    </header>
  );
};

// Footer.tsx
interface FooterProps {
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  contactInfo: {
    email: string;
    location: string;
  };
}

const Footer: React.FC<FooterProps> = ({ socialLinks, contactInfo }) => {
  return (
    <footer className="footer">
      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.platform} href={link.url} className="social-link">
            <img src={link.icon} alt={link.platform} />
          </a>
        ))}
      </div>
      <div className="contact-info">
        <p>{contactInfo.email}</p>
        <p>{contactInfo.location}</p>
      </div>
    </footer>
  );
};
```

### Current Organisms

1. **Header**

   - Purpose: Main site header with navigation and user info
   - Props: currentPage, userData
   - Components: NavBar, ProfileImage
   - Features: Dynamic navigation, user context
   - Styling: Uses flex-between and section-spacing bosons

2. **Footer**
   - Purpose: Site footer with social links and contact info
   - Props: socialLinks, contactInfo
   - Features: Social media integration, contact information
   - Styling: Uses section-container and content-padding bosons

### Usage

Organisms are used to create complete, functional sections of the application:

```tsx
// Page layout
<Layout>
  <Header currentPage="home" userData={currentUser} />
  <main>
    <Hero title="Welcome" subtitle="Software Developer" image="/profile.jpg" />
  </main>
  <Footer socialLinks={socialMediaLinks} contactInfo={contactDetails} />
</Layout>
```

### Benefits of Our Approach

1. **Functionality**

   - Complete, purpose-specific components
   - Integrated business logic
   - Data handling capabilities

2. **Maintainability**

   - Clear component responsibilities
   - Centralised business logic
   - Easy to update and extend

3. **Consistency**

   - Standardised component patterns
   - Consistent data handling
   - Unified styling approach

4. **Performance**

   - Optimised data fetching
   - Efficient state management
   - Minimal re-renders

5. **Accessibility**
   - Complete ARIA implementation
   - Comprehensive keyboard support
   - Screen reader optimisation
