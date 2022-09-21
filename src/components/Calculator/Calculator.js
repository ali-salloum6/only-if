import "./Calculator.css";
import logo from "../../assets/logo_transparent.png";
import InputSection from "../InputSection/InputSection";
import { useState, useEffect } from "react";
import calculateProfit from "../../utils/calculateProfit";

function Calculator() {
  const [input, setInput] = useState({
    amount: "",
    currency: "BTC",
    time: "h",
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
    let currentTime = +new Date();
    let diffInSec;
    switch (input.time) {
      case "h":
        diffInSec = 60 * 60;
        break;
      case "d":
        diffInSec = 60 * 60 * 24;
        break;
      case "w":
        diffInSec = 60 * 60 * 24 * 7;
        break;
    }
    let diffInMilliSec = diffInSec * 1000;
    let startTime = currentTime - diffInMilliSec;
    fetch(
      `https://cryptic-basin-04849.herokuapp.com/https://api.binance.com/api/v3/klines?symbol=${input.currency}USDT&interval=1${input.time}&startTime=${startTime}`
    )
      .then((response) => response.json())
      .then(function (data) {
        setProfit(calculateProfit(data));
      });
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
