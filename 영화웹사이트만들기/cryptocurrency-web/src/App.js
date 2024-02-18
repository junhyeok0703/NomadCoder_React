import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setCoins(json);
      });
  }, []);
  return (
    <div>
      <h1>Coins price web </h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select>
          {coins.map((item, ind) => (
            <option key={ind}>
              <h2>{item.name}</h2>
              <p>{item.quotes.USD.price}</p>
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
