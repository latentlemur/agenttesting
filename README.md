# CRM Partner Portal

This is a frontend mockup for a CRM partner management portal using React. The portal provides tools for managing partner accounts, tracking metrics, and customizing the experience.

## Features

- Dashboard with summary statistics and recent partners
- Partner listing with filtering and search capabilities
- Detailed partner information view
- Settings page for user preferences
- Responsive design that works on desktop and mobile devices

## Screenshots

### Dashboard
![Dashboard](./public/images/dashboard.jpg)

The dashboard provides a clear overview of key metrics and recent partner activity.

### Partner List
![Partner List](./public/images/partner-list.jpg)

The partner list allows filtering and searching through all partners in the system.

### Partner Detail
![Partner Detail](./public/images/partner-detail.jpg)

Detailed view of a partner with all their important information and contact details.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/latentlemur/agenttesting.git
   cd agenttesting
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components
- `/src/data` - Sample data for the application
- `/src/styles` - Global CSS styles
- `/public/images` - Screenshots and image assets

## Sample Data

The application uses sample data located in `/src/data/partners.json`. This can be replaced with real API integration in a production environment.

## Development

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder that can be deployed to any static hosting service.