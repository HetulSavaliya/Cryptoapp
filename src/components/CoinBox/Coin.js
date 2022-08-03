import React from "react";
import "./Coin.css";

function Coinbox({ image, name, price, volume, pricechange, marketcap }) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h3>{name}</h3>
          <p className="coin-symbol"></p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{price}</p>
          <p className="coin-volume">Rs.{volume}</p>
          {pricechange < 0 ? (
            <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap:Rs.{marketcap }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coinbox;
