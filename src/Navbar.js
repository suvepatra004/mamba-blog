import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Rative Blog</h1>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/secondary" className="link">
          Favorites
        </Link>
        <Link to="/create" className="link">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
