import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-content-page">
      <div className="error-404-card">
        <h2>🫢 Oops...!!</h2>
        <p>You Got Me, Red Handedly 😢</p>
        <Link to="/">Go To Homepage →</Link>
      </div>
    </div>
  );
};

export default NotFound;
