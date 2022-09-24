import "./Calculator.css";
import logo from "../../assets/logo_transparent.png";
import InputSection from "../InputSection/InputSection";
import { useState, useEffect } from "react";
import calculatePosition from "../../utils/calculatePosition";
import ReactTooltip from "react-tooltip";

function Calculator() {
  const [input, setInput] = useState({
    amount: "",
    currency: "BTC",
    time: "h",
  });
  const [position, setPosition] = useState({});
  const [tooltip, showTooltip] = useState(true);

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
    let interval;
    switch (input.time) {
      case "h":
        diffInSec = 60 * 60;
        interval = "1s";
        break;
      case "d":
        diffInSec = 60 * 60 * 24;
        interval = "3m";
        break;
      case "w":
        diffInSec = 60 * 60 * 24 * 7;
        interval = "15m";
        break;
      default:
        diffInSec = 0;
        interval = "1s";
    }
    let diffInMilliSec = diffInSec * 1000;
    let startTime = currentTime - diffInMilliSec;
    fetch(
      `https://cryptic-basin-04849.herokuapp.com/https://api.binance.com/api/v3/klines?symbol=${input.currency}USDT&interval=${interval}&startTime=${startTime}&endTime=${currentTime}&limit=1000`
    )
      .then((response) => response.json())
      .then(function (data) {
        setPosition(calculatePosition(input.amount, data));
      });
  }, [input]);

  let howTo = constructTooltip();

  return (
    <div id="calc">
      <div id="title-section">
        <img id="title-logo" src={logo} alt="Only If" />
        <h1 id="title">NLY IF</h1>
      </div>
      <InputSection input={input} handleInputChange={handleInputChange} />
      <h3 id="result" className="wish">
        I would have made{" "}
        {!isNaN(position.return) ? Number(position.return.toFixed(2)) : "___"}$
      </h3>
      <h5
        id="how"
        data-tip={howTo}
        data-html="true"
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => {
          showTooltip(false);
          setTimeout(() => showTooltip(true), 50);
        }}
      >
        How?
      </h5>
      {tooltip && <ReactTooltip effect="solid" />}
    </div>
  );

  function constructTooltip() {
    const startDate = new Date(parseInt(position.startTime));
    const endDate = new Date(parseInt(position.endTime));
    let howTo = `${position.positionType} position: <br />`;
    if (position.positionType === "Long") {
      howTo = howTo + `buy at ${startDate.toString()}<br />`;
      howTo = howTo + `sell at ${endDate.toString()}`;
    }
    if (position.positionType === "Short") {
      howTo = howTo + `sell at ${startDate.toString()}<br />`;
      howTo = howTo + `buy at ${endDate.toString()}`;
    }
    return howTo;
  }
}

export default Calculator;
