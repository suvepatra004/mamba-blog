# Mamba Blog

A modern blog application built with React and React Router.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mamba-blog.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Mock API Setup

To enable dynamic blog data, start the JSON server:

```bash
npx json-server --watch data/ds.json --port 8010
```

This will serve your blog data from `data/ds.json`.

## Features

- View all blogs and filter by author
- Add new blogs (dynamic, updates both Home and Favorites)
- Delete blogs
- Favorites section
- Blog details page
- 404 Not Found page with styled card
- Routing with React Router v6+
- Custom hook for fetching data

## Project Structure

- `src/` — Main source code
  - `App.js` — Main app component with routing
  - `Home.js` — Home page and blog list (now uses dynamic data)
  - `SecondaryHome.js` — Favorites/filtered blogs (uses dynamic data)
  - `Blogs.js` — Blog list component
  - `BlogDetails.js` — Blog details page
  - `Create.js` — Add new blog page
  - `Age.js` — Age display component (reference/demo)
  - `useFetch.js` — Custom hook for fetching data
  - `Navbar.js` — Navigation bar
  - `NotFound.js` — 404 error page

## Styling

- All components are styled in `src/index.css`
- Includes outlined and hover effects for buttons
- 404 page uses a card with a visible shadow

## Development Notes

- Uses [react-router-dom](https://reactrouter.com/) v6+ for routing.
- Blog data is fetched dynamically from the JSON server.
- ESLint warnings can be configured in `.eslintrc.json`.

## Learn More

- [React documentation](https://react.dev/)
- [React Router documentation](https://reactrouter.com/)

<br />

<p align="center"><b>Developed by Suvendu</b></p>
