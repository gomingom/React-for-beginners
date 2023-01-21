import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  useEffect(() => {
    const coinData = async function () {
      const data = await fetch("https://api.coinpaprika.com/v1/tickers");
      const json = await data.json();
      setCoins(json);
      setLoading(false);
    };
    coinData();
  }, []);

  const onChange = (event) => {
    setMoney(event.target.value);
  };
  const convertByCoinPrice = (money, coinPrice) => {
    if (money === "") {
      return coinPrice;
    } else {
      return money / coinPrice;
    }
  };
  return (
    <div>
      <h1>The Coins! {coins.length}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input onChange={onChange} placeholder="USD"></input>
          <select>
            {coins.map((coin, index) => (
              <option key={index}>
                {coin.name} ({coin.symbol}):{" "}
                {convertByCoinPrice(money, coin.quotes.USD.price)}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default CoinTracker;
