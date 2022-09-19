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
          <input id="amount-input" type="text" placeholder="_________" />
        </label>
        <h3 className="wish">$ in</h3>
        <label>
          <select id="currency-input">
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="bnb">BNB</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default Calculator;
