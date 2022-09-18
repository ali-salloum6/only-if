import "./Navbar.css";
import logo from "../assets/logo_transparent.png";

function Navbar(props) {
  return (
    <nav id="navbar" data-testid={props.testID}>
      <img id="logo" src={logo} alt="Only If logo" />
    </nav>
  );
}

export default Navbar;
