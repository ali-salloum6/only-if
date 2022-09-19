import "./Calculator.css";
import logo from "../../assets/logo_transparent.png";

function Calculator() {
  return (
    <div id="calc">
      <div id="title-section">
        <img id="title-logo" src={logo} alt="Only If" />
        <h1 id="title">NLY IF</h1>
      </div>
      <form>
        <h3 className="wish">I wish I invested</h3>
        <label>
          <input id="amount-input" type="text" placeholder="Amount" />
        </label>
        <h3 className="wish">in</h3>
      </form>
    </div>
  );
}

export default Calculator;
