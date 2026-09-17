# Doggy Daycare — Skogsgläntan

A React + Vite web app for **Skogsgläntan**, a fictional dog daycare. It presents the daycare's services and daily schedule, and lets visitors browse a catalog of the dogs currently enrolled, with a detail page for each dog and its owner's contact info.

## Features

- **Welcome page** — hero section, daily schedule timeline, services offered, and contact/footer info.
- **Dog catalog** — searchable grid of dogs, fetched live from a remote JSON API.
- **Dog detail page** — breed, age, sex, presence status, and owner contact details for a selected dog.
- Client-side navigation between screens (no routing library state, just React state in [App.jsx](src/App.jsx)).

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) for dev server and build
- [react-router-dom](https://reactrouter.com/) (dependency)
- ESLint for linting
- [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment to GitHub Pages

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the dev server with hot module reloading:

```bash
npm run dev
```

### Build

Create a production build in `dist/`:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Deploy

Build and publish the `dist/` folder to GitHub Pages:

```bash
npm run deploy
```

## Project structure

```
src/
├── App.jsx                  # Screen state and navigation
├── components/
│   ├── WelcomePage.jsx      # Landing page: hero, schedule, services, footer
│   ├── CatalogPage.jsx      # Searchable list of dogs
│   ├── DogDetailPage.jsx    # Single dog's details and owner info
│   ├── DogData.jsx          # Fetches dog data from the remote API
│   ├── DogImage.jsx         # Dog image component
│   └── SiteHeader.jsx       # Shared site header/navigation
└── assets/                  # Images and icons
```

## Data source

Dog data is fetched from a [jsonbin.io](https://jsonbin.io/) bin (see [DogData.jsx](src/components/DogData.jsx)) and includes each dog's name, breed, age, sex, presence status, image, and owner contact info.
