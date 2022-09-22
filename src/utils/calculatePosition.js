export default function calculatePosition(amount, data) {
  // get rid of extra data (keep open price and open time)
  data = data.map((array) => ({
    timestamp: array[0],
    price: parseFloat(array[1]),
  }));
  // current minimum and maximum prices are at the first data point
  let currentMin = data[0];
  let currentMax = data[0];
  let maxProfitRatio = 0;
  let positionType, startTime, endTime;
  for (let i = 1; i < data.length; i++) {
    // updata maximum price
    if (data[i].price >= currentMax.price) {
      currentMax = data[i];
    }
    // update minimum price
    if (data[i].price <= currentMin.price) {
      currentMin = data[i];
    }
    // profit (as a ratio) if had a long position
    // buying at the minimum price so far and selling now
    const longProfitRatio = data[i].price / currentMin.price - 1.0;
    // profit (as a ratio) if had a short position
    // selling at the maximum price so far and buying now
    const shortProfitRatio =
      (currentMax.price - data[i].price) / currentMax.price;
    // update the maximum possible profit ratio
    // and save the type of position
    if (longProfitRatio >= maxProfitRatio) {
      maxProfitRatio = longProfitRatio;
      positionType = "long";
      startTime = currentMin.timestamp;
      endTime = data[i].timestamp;
    }
    if (shortProfitRatio >= maxProfitRatio) {
      maxProfitRatio = shortProfitRatio;
      positionType = "short";
      startTime = currentMax.timestamp;
      endTime = data[i].timestamp;
    }
  }
  return {
    return: maxProfitRatio * parseFloat(amount),
    positionType: positionType,
    startTime: startTime,
    endTime: endTime,
  };
}
