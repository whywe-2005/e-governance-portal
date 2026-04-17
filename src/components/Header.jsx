import { useState } from "react";
import { Link } from "react-router-dom";
import emblem from "../assets/emblem.jpg";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo">
        <img src={emblem} alt="Emblem" />
        <h2>E-Gov Portal</h2>
      </div>
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
export default Header;
const token = localStorage.getItem("token");
