import "./InputSection.css";

function InputSection(props) {
  return (
    <form id="input-section">
      <div className="line">
        <h3 className="wish">I wish I invested</h3>
        <label>
          <input
            name="amount"
            id="amount-input"
            type="text"
            placeholder="________"
            value={props.input.amount}
            onChange={props.handleInputChange}
          />
        </label>
        <h3 className="wish">$</h3>
      </div>
      <div className="line">
        <h3 className="wish">in</h3>
        <label>
          <select
            name="currency"
            className="dropdown-input"
            value={props.input.currency}
            onChange={props.handleInputChange}
          >
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ethereum</option>
            <option value="BNB">BNB</option>
          </select>
        </label>
      </div>
      <div className="line">
        <h3 className="wish">optimally during the last</h3>
      </div>
      <div className="line">
        <label>
          <select
            name="time"
            className="dropdown-input"
            value={props.input.time}
            onChange={props.handleInputChange}
          >
            <option value="h">hour</option>
            <option value="d">day</option>
            <option value="w">week</option>
          </select>
        </label>
      </div>
    </form>
  );
}

export default InputSection;
