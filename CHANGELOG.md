# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.3] - 2024-07-25

### Added

- New services for Mobile App Development, including Flutter and Java.
- Updated tech stack to reflect new skills and focus.

### Changed

- Refactored project data into a centralised configuration for easier management.
- Updated project components to consume data from the new centralised source.
- Reorganised the display of technology icons to prioritise core skills.

### Removed

- Removed CMS and E-Commerce development from the list of services.

## [0.6.2] - 2024-04-11

### Added

- Privacy Policy page implementation
- Back page navigation on privacy policy page

### Changed

- Updated contact page form to include link to privacy policy
- Updated footer to include link to privacy policy

## [0.6.1] - 2024-04-11

### Added

- Enhanced Contact page with comprehensive contact information section:
  - Professional contact details including email and CV
  - Social media links (Facebook, LinkedIn, Etsy, Instagram, Upwork, Fiverr)
  - Review submission link
  - Improved accessibility with ARIA attributes
  - Enhanced SEO metadata
  - Responsive two-column layout
  - External link handling with security attributes

### Changed

- Updated contact page layout for better content organisation
- Enhanced form components with structured data attributes
- Improved error message handling in contact form

## [0.6.0] - 2024-04-09

### Added

- New Contact page implementation:
  - Contact form with form validation
  - API endpoint for form submission
  - Success and error handling
  - Responsive design implementation
  - Accessibility features
  - Form validation feedback
  - Loading states for form submission
  - Integration with email service
  - Contact information section with professional details

### Changed

- Updated documentation to include contact page implementation details
- Enhanced form handling and validation across the application

### Fixed

- Form submission handling
- Input validation feedback
- Loading state management

## [0.5.2] - 2024-04-03

### Added

- New Projects page implementation:
  - Interactive project cards with video support
  - Structured data implementation for SEO
  - Comprehensive test coverage for projects page
  - Responsive grid layout for project display
  - Project highlighting on homepage
  - Accessibility improvements for project cards
  - Integration with GitHub repositories
  - Video demonstration support using YouTube embeds

### Changed

- Updated atomic design documentation to include new components:
  - InteractiveCard atom for project display
  - InteractiveContainer molecule for project lists
  - ProjectsList organism for project management
  - CardGridLayout for responsive project grids
- Enhanced homepage with project highlight section
- Improved navigation with projects page integration

### Fixed

- Accessibility issues in project cards
- Responsive layout issues in project grid
- SEO metadata for projects page
- Structured data implementation for project listings

## [0.5.1] - 2024-03-30

### Added

- Enhanced About Me page with additional content sections:
  - Personal introduction and professional background
  - Services section showcasing development expertise
  - Technical skills and technologies section
  - Additional skills and capabilities section
  - Structured data implementation for SEO

## [0.5.0] - 2024-03-29

### Added

- New About Me page with personal information and background
- Enhanced workflow improvements for better development experience

### Changed

- Updated documentation to reflect recent changes
- Improved security measures and checks

## [0.4.0] - 2024-03-28

### Added

- New layout components for consistent page structure:
  - PageSectionLayout for Projects and Blog sections
  - TwoColumnLayout for Hero and content-heavy pages
  - HeaderLayout for standardised header structure
  - FooterLayout for consistent footer implementation
- Enhanced documentation for layout components
- Updated README with layout component usage guidelines

### Changed

- Refactored existing components to use new layout components:
  - Hero component now uses TwoColumnLayout
  - Header component now uses HeaderLayout
  - Footer component now uses FooterLayout
  - Projects and Blog pages now use PageSectionLayout
- Improved component organisation with dedicated layouts directory
- Updated atomic design documentation to include layout components

### Fixed

- Inconsistent spacing and container widths across sections
- Responsive layout issues in content-heavy pages
- Header and footer structure inconsistencies

## [0.3.0] - 2024-03-27

### Added

- Enhanced CI/CD pipeline with:
  - Security checks (npm audit and Snyk)
  - Quality checks (linting, formatting, testing)
  - Shared workflow setup for reduced code duplication
  - Improved deployment process with proper job dependencies

### Changed

- Refactored GitHub Actions workflows into modular components:
  - Separated security, quality, and deployment concerns
  - Implemented reusable setup workflow
  - Improved workflow maintainability and readability
  - Enhanced dependency management between jobs

### Fixed

- Removed duplicate setup steps across workflows
- Improved workflow execution efficiency
- Enhanced security scanning with Snyk integration

## [0.2.0] - 2024-03-26

### Added

- Comprehensive SEO improvements including:
  - Structured data implementation
  - Robots.txt and sitemap.xml
  - Meta tags optimisation
  - Error and not-found pages
- Accessibility (A11Y) improvements across all pages
- Jest and React Testing Library setup
- Atomic design structure implementation:
  - Atoms: CallToActionButton, ProfileImage, ThreeLayerTitleText
  - Molecules: Hero, NavBar
  - Organisms: Header, Footer
- TypeScript type definitions and improvements
- Pre-commit hooks with Husky
- ESLint and Prettier configuration

### Changed

- Refactored components into atomic design structure
- Improved component organisation and reusability
- Enhanced type safety across the application
- Updated routing configuration
- Improved CSS organisation

### Removed

- Unused package dependencies
- Legacy component structure

### Fixed

- Component structure and organisation
- Type definitions and interfaces
- Accessibility issues
- SEO-related issues

## [0.1.0] - 2024-03-XX

### Added

- Initial release
- Basic portfolio structure
- Responsive design implementation
- Mobile-first approach
- Cloudways deployment configuration
- Production environment setup
- SSL certificate configuration
- CDN integration

### Deployment

- Cloudways deployment configuration
- Production environment setup
- SSL certificate configuration
- CDN integration

## [0.0.1] - 2024-03-XX

### Added

- Project initialisation
- Development environment setup
- Basic documentation
- Git repository setup
