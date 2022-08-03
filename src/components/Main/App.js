import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../CoinBox/Coin";
import "./App.css"
function MainComponent() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);

    console.log(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredCoins);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search your desired coin</h1>
        <form action="">
          <input type="text" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
           
          />
        );
      })}
    </div>
  );
}

export default MainComponent;
