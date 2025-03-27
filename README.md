# Software Portfolio

This repository serves as a showcase of my software development practices and technical capabilities. It demonstrates my expertise in modern web development, including:

- Clean code architecture and best practices
- Modern development workflows and CI/CD implementation
- Comprehensive testing strategies
- Performance optimisation techniques
- Accessibility considerations
- SEO best practices

A modern, responsive portfolio website built with Next.js, React, and TailwindCSS. This project showcases professional work, skills, and experiences in an elegant and user-friendly interface.

**Live Demo:** [maddierosecodes.com](https://maddierosecodes.com)

## Features

- 🎨 Modern and responsive design
- ⚡ Built with Next.js for optimal performance
- 🎯 SEO-friendly
- 📱 Mobile-first approach
- 🧪 Comprehensive test coverage
- 🎭 Dark/Light mode support
- 📝 Blog section
- 🔍 Search functionality
- 👤 About Me section

## Tech Stack

- **Framework:** Next.js 15.2.1
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Testing:** Jest, React Testing Library
- **Code Quality:** ESLint, Prettier
- **Version Control:** Git with Husky pre-commit hooks
- **Deployment:** Cloudways
- **Development:** Trunk-based development with CI/CD pipeline
- **Security:** Snyk integration and automated vulnerability scanning

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/software_portfolio.git
   cd software_portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run test` - Run tests
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
software_portfolio/
├── __tests__/               # Test files
├── app/                    # Next.js app directory
├── components/            # Atomic reusable React components
├── config/               # Configuration Files
├── resources/               # Static Assets
└── types/               # TypeScript type definitions
```

## Folder Structure Guide

### Component Organisation (Atomic Design)

```
components/
├── atoms/               # Smallest behavioural components
│   ├── atoms.md        # Documentation
│   └── [ComponentName].tsx
├── molecules/          # Combinations of atoms and bosons
│   ├── molecules.md    # Documentation
│   └── [ComponentName].tsx
├── organisms/          # Contextual components
│   ├── organisms.md    # Documentation
│   └── [ComponentName].tsx
└── layouts/           # Page and section layouts
    ├── layouts.md     # Documentation
    └── [LayoutName].tsx
```

### Layout Components

The project uses a set of reusable layout components to maintain consistent structure across pages:

1. **PageSectionLayout**

   - Used for consistent section layouts in Projects and Blog pages
   - Provides standardised spacing and container widths
   - Ensures visual consistency across different content sections

2. **TwoColumnLayout**

   - Implements responsive two-column layouts
   - Used in Hero sections and content-heavy pages
   - Automatically stacks on mobile devices

3. **HeaderLayout**

   - Standardises header structure across pages
   - Manages navigation and branding placement
   - Handles responsive menu behaviours

4. **FooterLayout**
   - Provides consistent footer structure
   - Manages social links and copyright information
   - Ensures proper spacing and alignment

### Testing Structure

```
__tests__/
├── unit_tests/         # Helper functions and utilities
│   └── [category]/     # Sub-category for specific types of utilities
│       └── [testName].test.ts
├── page_tests/        # Page-level integration tests
│   └── [pageName].test.tsx
└── layout_tests/      # Layout and structural tests
    └── [layoutName].test.tsx
```

### Type Definitions

```
types/
└── [category].types.ts # Global type definitions
```

### Styling Structure

```
sapp/
├── globals.css       # Global styles and bosons in tailwind
└── bosons.md         # Boson documentation
```

### Key Principles

1. **Atomic Design**

   - Bosons: Pure styling elements (colours, typography, spacing)
   - Atoms: Smallest behavioural components (buttons, inputs)
   - Molecules: Combinations of atoms (forms, cards)
   - Organisms: Contextual components (headers, footers)

2. **Testing Organisation**

   - Unit tests: Grouped by functionality
   - Page tests: One file per page
   - Layout tests: One file per layout

3. **Type Definitions**

   - Global types: Shared across components
   - Local types: Specific to individual components, written locally
   - As low as possible, as high as necessary abstraction system.

4. **Styling Approach**
   - Bosons in globals.css
   - TailwindCSS config in globals.css
   - TailwindCSS only, no vanilla CSS permitted for consistency
   - ClassName Rules: Bosons First, Tailwind Classes Second, Group by function where possible

## Testing Strategy

The project implements a comprehensive testing strategy focusing on two main areas:

### 1. Unit Testing

- Helper functions and utility modules
- Data transformation and formatting
- Type validation and data structures

### 2. User Journey Testing

Key user flows are tested to ensure a seamless experience:

- Navigation and routing
- Form submissions and validation
- Interactive component behaviours
- Responsive design breakpoints
- Accessibility compliance

### Running Tests

Run the test suite with:

```bash
npm run test
```

## Deployment

This project is deployed using a CI/CD pipeline that automates the build, test, and deployment process. The deployment workflow includes:

### Automated Pipeline

The deployment process is split into three main stages:

1. **Security Checks**

   - Dependency vulnerability scanning with `npm audit`
   - Comprehensive security scanning with Snyk
   - Automatic GitHub issue creation for vulnerabilities
   - Detailed security reports generated as artifacts
   - Configurable severity thresholds

2. **Quality Checks**

   - Code linting and formatting verification
   - TypeScript type checking
   - Unit and integration tests
   - Build verification
   - Performance checks

3. **Deployment**
   - Automated deployment to Cloudways via SSH
   - PM2 process management
   - Varnish cache purging
   - Server updates and optimisations

Each stage must pass before proceeding to the next, ensuring:

- No security vulnerabilities are deployed
- Code quality standards are maintained
- Production environment remains stable

### Deployment Environment

The application is hosted on Cloudways, which provides:

- Optimised PHP and Node.js hosting
- Built-in SSL certificate management
- CDN integration for improved performance
- Automated backups and security updates
- PM2 process management for Node.js applications

### Manual Deployment

For local development or testing, the application can be built and run locally:

```bash
npm run build
npm run start
```

### Cache Management

The deployment process includes:

- Varnish cache purging
- Static asset optimisation
- Next.js Image component optimisation
- Browser caching configuration

### Performance Optimisations

The deployment includes several performance enhancements:

- Next.js Image component with automatic:
  - WebP and AVIF format conversion
  - Responsive image sizing
  - Lazy loading
  - Blur placeholder generation
- Font optimisation through Next.js Font API
- Static page generation where applicable
- Asset compression and minification

## Development Workflow

This project follows trunk-based development practices:

1. All development work is done directly on the main branch
2. Changes are committed frequently with meaningful messages
3. CI/CD pipeline runs on every push to main
4. Automated tests must pass before deployment
5. Code quality checks are enforced through pre-commit hooks

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of all changes and version history.

## Licence

This project is licensed under the MIT Licence - see the [LICENCE](LICENCE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework for production
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing utilities for React
