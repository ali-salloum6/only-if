import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <Navbar testID="navbar" />
      <Calculator />
    </div>
  );
}

export default App;
