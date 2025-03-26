# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
