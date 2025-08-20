# Mamba Blog

A simple blog application built with React and React Router.

## Getting Started

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/mamba-blog.git
   ```
2. Install dependencies:
   ```
   npm install
   ```

### Running the App

Start the development server:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Features

- View all blogs and filter by author
- Add new blogs
- Delete blogs
- Favorites section
- Routing with React Router

### Project Structure

- `src/` — Main source code
  - `App.js` — Main app component with routing
  - `Home.js` — Home page and blog list
  - `SecondaryHome.js` — Favorites/filtered blogs
  - `Blogs.js` — Blog list component
  - `Age.js` — Age display component
  - `useFetch.js` — Custom hook for fetching data
  - `Navbar.js` — Navigation bar

### Development Notes

- Uses [react-router-dom](https://reactrouter.com/) for routing.
- JSON server can be used for mock API:
  ```
  npx json-server --watch data/ds.json --port 8010
  ```
- ESLint warnings can be configured in `.eslintrc.json` or `package.json`.

## Learn More

- [React documentation](https://react.dev/)
