import "./Navbar.css";
import logo from "../assets/logo_transparent.png";

function Navbar() {
  return (
    <nav id="navbar">
      <img id="logo" src={logo} alt="Only If logo" />
    </nav>
  );
}

export default Navbar;
