import "./Calculator.css";
import logo from "../../assets/logo_transparent.png";
import InputSection from "../InputSection/InputSection";

function Calculator() {
  return (
    <div id="calc">
      <div id="title-section">
        <img id="title-logo" src={logo} alt="Only If" />
        <h1 id="title">NLY IF</h1>
      </div>
      <InputSection />
    </div>
  );
}

export default Calculator;
