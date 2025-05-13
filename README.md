[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dev-bcn_dev-bcn.github.io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dev-bcn_dev-bcn.github.io)

![](src/assets/images/1500x500.jpeg)

# DevBcn - Barcelona Developers Conference Website

## Project Overview

This repository contains the official website for the Barcelona Developers
Conference (DevBcn), a tech conference held in Barcelona, Spain. The website
serves as the primary platform for conference information, including schedules,
speaker profiles, talk details, venue information, and registration.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router
- **Data Fetching**: React Query and Axios
- **Styling**: Styled Components and SASS
- **UI Components**: PrimeReact, Swiper, Framer Motion
- **Maps Integration**: Google Map React
- **Testing**: Jest, React Testing Library
- **Deployment**: GitHub Pages

## Project Structure

The project follows a standard React application structure:

- `src/`: Source code
    - `assets/`: Static assets like images
    - `components/`: Reusable UI components
    - `hooks/`: Custom React hooks (e.g., useFetchSpeakers, useFetchTalks)
    - `views/`: Page components
    - `2024/`: Components specific to the 2024 conference edition
    - `2023/`: Components specific to the 2023 conference edition

## Path Aliases

This project uses path aliases to simplify imports. Instead of using relative
paths like `../../components/Button`, you can use aliases like
`@components/Button`.

Available aliases:

- `@components/*` - Components from `src/components/`
- `@constants/*` - Constants from `src/constants/`
- `@services/*` - Services from `src/services/`
- `@hooks/*` - Hooks from `src/hooks/`
- `@assets/*` - Assets from `src/assets/`
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
4. View the site at http://localhost:3000

### Available Scripts

- `npm start`: Run the development server
- `npm test`: Run tests
- `npm run test-coverage`: Run tests with coverage reporting
- `npm run build`: Build for production
- `npm run deploy`: Deploy to GitHub Pages
- `npm run lint`: Run ESLint to check for code quality issues
- `npm run lint:fix`: Run ESLint and automatically fix fixable issues

## Contribution Guidelines

When contributing to this project, please:

1. Follow the existing code style and patterns
2. Run ESLint (`npm run lint`) to ensure code quality and fix any issues
3. Write tests for new features
4. Ensure all tests pass before submitting pull requests
5. Keep the UI consistent with the existing design
6. Document any new components or significant changes

## Contact

For questions or issues related to the DevBcn website, please open an issue in
this repository.

Visit the live site at [https://www.devbcn.com](https://www.devbcn.com)
