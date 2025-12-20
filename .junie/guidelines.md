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
- **Testing**: vitest, React Testing Library
- **Deployment**: GitHub Pages

## Project Structure

The project follows a standard React application structure:

- `src/`: Source code
  - `assets/`: Static assets like images
  - `components/`: Reusable UI components
  - `hooks/`: Custom React hooks (e.g., useFetchSpeakers, useFetchTalks)
  - `views/`: Page components
  - `2024/`: Components specific to the 2024 conference

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

## Contribution Guidelines

When contributing to this project, please:

1. Follow the existing code style and patterns
2. Write tests for new features
3. Ensure all tests pass before submitting pull requests
4. Keep the UI consistent with the existing design
5. Document any new components or significant changes

## Contact

For questions or issues related to the DevBcn website, please open an issue in
this repository.

Visit the live site at [https://www.devbcn.com](https://www.devbcn.com)
