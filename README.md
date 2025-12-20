# DevBcn - Barcelona Developers Conference Website

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dev-bcn_dev-bcn.github.io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dev-bcn_dev-bcn.github.io)

![DevBcn](/public/images/1500x500.webp)

## Project Overview

This repository contains the official website for the Barcelona Developers
Conference (DevBcn), a tech conference held in Barcelona, Spain. The website
serves as the primary platform for conference information, including schedules,
speaker profiles, talk details, venue information, and registration.

## Technology Stack

### Core

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7
- **Routing**: React Router DOM v7
- **Package Manager**: npm

### Styling & UI

- **CSS**: SASS, Styled Components, Tailwind CSS, Bootstrap 5
- **UI Components**: PrimeReact, React Bootstrap
- **Icons**: Lucide React, React Icons, PrimeIcons, Font Awesome 7.1.0
- **Animation**: Framer Motion, GSAP, Lenis (smooth scrolling)
- **Carousels**: Swiper, @egjs/react-flicking

### Data & Services

- **Data Fetching**: React Query (TanStack Query) and Axios
- **Date Handling**: date-fns, moment
- **Maps Integration**: Google Map React
- **Calendar**: add-to-calendar-button-react
- **QR Codes**: react-qr-code

### Development & Quality

- **Testing**: Vitest, React Testing Library, @testing-library/jest-dom
- **Linting**: ESLint with TypeScript support
- **Code Formatting**: Prettier
- **Error Tracking**: Sentry
- **Mocking**: @faker-js/faker

### Deployment

- **Hosting**: GitHub Pages
- **PWA Support**: vite-plugin-pwa
- **Analytics**: Google Analytics (react-ga)

## Project Structure

The project follows a standard React application structure with multi-year edition support:

- `src/`: Source code
  - `assets/`: Static assets like images
  - `components/`: Reusable UI components (Header, Footer, Navigation, etc.)
  - `config/`: Configuration files (routes, etc.)
  - `constants/`: Application constants
  - `data/`: Static data files
  - `hooks/`: Custom React hooks (e.g., useFetchSpeakers, useFetchTalks)
  - `services/`: API services and external integrations
  - `styles/`: Global styles and theme configuration
  - `types/`: TypeScript type definitions
  - `utils/`: Utility functions
  - `views/`: Page components
  - `2023/`: Components specific to the 2023 conference edition
  - `2024/`: Components specific to the 2024 conference edition
  - `2025/`: Components specific to the 2025 conference edition
- `public/`: Public assets and static files
- `scripts/`: Build and utility scripts
- `.github/`: GitHub Actions workflows and configurations

## Conference Editions

The website serves multiple conference editions:

- **2026**: Current edition (available at `/2026/*` routes)
- **2025**: Previous edition (available at `/2025/*` routes)
- **2024**: Previous edition (available at `/2024/*` routes)
- **2023**: Previous edition (available at `/2023/*` routes)

Each edition has its own dedicated directory in `src/` containing edition-specific components, data, and styles.

## Path Aliases

This project uses path aliases to simplify imports. Instead of using relative
paths like `../../components/Button`, you can use aliases like
`@components/Button`.

Available aliases:

- `@components/*` - Components from `src/components/`
- `@constants/*` - Constants from `src/constants/`
- `@services/*` - Services from `src/services/`
- `@hooks/*` - Hooks from `src/hooks/`
- `@/assets/*` - Assets from `src/assets/`
- `@styles/*` - Styles from `src/styles/`
- `@views/*` - Views from `src/views/`
- `@utils/*` - Utilities from `src/utils/`
- `@data/*` - Data from `src/data/`
- `@types/*` - Types from `src/types/`

For more details, see the [Path Aliases Documentation](docs/path-aliases.md).

## Development Workflow

### Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`
4. View the site at <http://localhost:3000>

### Available Scripts

- `npm start`: Run the Vite development server (default port: 3000)
- `npm run build`: Build for production (outputs to `build/` directory)
- `npm run preview`: Preview the production build locally
- `npm test`: Run tests with Vitest
- `npm run test-coverage`: Run tests with coverage reporting
- `npm run type-check`: Type-check TypeScript without emitting files
- `npm run lint`: Run ESLint to check for code quality issues
- `npm run lint:fix`: Run ESLint and automatically fix fixable issues
- `npm run deploy`: Deploy to GitHub Pages (runs predeploy build automatically)

## Contribution Guidelines

When contributing to this project, please adhere to these standards:

### Code Quality Principles

1. **SOLID Principles**: Follow SOLID design principles for maintainable code
2. **DRY (Don't Repeat Yourself)**: Avoid code duplication
3. **KISS (Keep It Simple, Stupid)**: Favor simplicity over complexity
4. **YAGNI (You Aren't Gonna Need It)**: Only implement what's needed
5. **Law of Demeter**: Minimize coupling between components
6. **Tell, Don't Ask**: Design objects to tell what to do, not ask for data

### Development Standards

1. **Testing**: Ensure **80% test coverage** for all code
2. **TDD**: Follow Test-Driven Development practices when possible
3. **Type Safety**: Eradicate `any` types in TypeScript - use proper typing
4. **Code Style**: Run `npm run lint` and `npm run lint:fix` before committing
5. **Formatting**: Use Prettier for consistent code formatting
6. **Build & Tests**: Ensure all tests pass and the build succeeds
7. **Boy Scout Rule**: Leave the code better than you found it

### Workflow

1. Follow the existing code style and patterns
2. Write tests for new features (maintain 80% coverage)
3. Check business logic in available markdown files or create new ones
4. Run type checking: `npm run type-check`
5. Run linting: `npm run lint:fix`
6. Run tests: `npm run test-coverage`
7. Ensure build passes: `npm run build`
8. Keep the UI consistent with the existing design
9. Document any new components or significant changes

## Contact

For questions or issues related to the DevBcn website, please open an issue in
this repository.

Visit the live site at [https://www.devbcn.com](https://www.devbcn.com)
