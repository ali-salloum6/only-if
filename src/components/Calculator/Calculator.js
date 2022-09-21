import "./Calculator.css";
import logo from "../../assets/logo_transparent.png";
import InputSection from "../InputSection/InputSection";
import { useState, useEffect } from "react";
import calculateProfit from "../../utils/calculateProfit";

function Calculator() {
  const [input, setInput] = useState({
    amount: "",
    currency: "BTC",
    time: "hour",
  });
  const [profit, setProfit] = useState(null);

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInput({
      ...input,
      [name]: value,
    });
  }

  useEffect(() => {
    setProfit(calculateProfit(input));
  }, [input]);

  return (
    <div id="calc">
      <div id="title-section">
        <img id="title-logo" src={logo} alt="Only If" />
        <h1 id="title">NLY IF</h1>
      </div>
      <InputSection input={input} handleInputChange={handleInputChange} />
      <h3 id="result" className="wish">
        I would have earned {profit ? profit : "___"}$
      </h3>
    </div>
  );
}

export default Calculator;
