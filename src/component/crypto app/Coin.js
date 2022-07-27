import React from 'react'
import './coin.css'
const Coin = ({ image, name, price, marketcap, pricechange, symbol }) => {
    return (
        <div>
            <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">
                        <img src={image} alt="crypto" />
                        <h1>{name}</h1>
                        <p className="coin-symbol">{symbol}</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">Rs.{price}</p>
                        {/* <p className="coin-volume">Rs.{volume.toLocaleString()}</p> */}
                        {pricechange < 0 ? (
                            <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                        ) : (
                            <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
                        )
                        }
                        <p className="coin-marketcap">
                            Mkt Cap: Rs.{marketcap.toLocaleString()}
                        </p>
                    </div>
                </div>

            </div>
            <hr />
        </div>
    )
}

export default Coin