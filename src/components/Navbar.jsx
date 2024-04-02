import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Multi page App</h1>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
