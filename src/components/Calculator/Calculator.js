import "./Calculator.css";
import logo from "../../assets/logo_transparent.png";

function Calculator() {
  return (
    <div id="calc">
      <div id="title-section">
        <img id="title-logo" src={logo} alt="Only If" />
        <h1 id="title">NLY IF</h1>
      </div>
      <form id="input-section">
        <div className="line">
          <h3 className="wish">I wish I invested</h3>
          <label>
            <input id="amount-input" type="text" placeholder="________" />
          </label>
          <h3 className="wish">$</h3>
        </div>
        <div className="line">
          <h3 className="wish">in</h3>
          <label>
            <select className="dropdown-input">
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
              <option value="bnb">BNB</option>
            </select>
          </label>
        </div>
        <div className="line">
          <h3 className="wish">optimally during the last</h3>
        </div>
        <div className="line">
          <label>
            <select className="dropdown-input">
              <option value="hour">hour</option>
              <option value="day">day</option>
              <option value="week">week</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
