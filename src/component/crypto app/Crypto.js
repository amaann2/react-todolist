
import React, { useEffect, useState } from 'react'
import Coin from './Coin'
import { GiCancel } from "react-icons/gi";

export const Crypto = () => {
    const [dataa, setdataa] = useState([])
    const[input,setinput]= useState('')
    
    const clearsearch= ()=>{
        setinput("")
        
    }
    useEffect(() => {
        const data = async () => {
            let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            let response = await fetch(url)
            let data = await response.json()
            setdataa(data)
        }
        data();
     
    }, [setdataa])

    const filteredcoin = dataa.filter(coin =>
        coin.name.toLowerCase().includes(input.toLowerCase())
    )
  
    return (
        <div>
            <div className="container" >
            <input type="text" className='coin-input' value={input} onChange={(e)=>setinput(e.target.value)} placeholder='type any currency'/>
            <GiCancel onClick={clearsearch}/>
            </div>
            {filteredcoin.map((elem) => (
                   <Coin 
                   key={elem.id}
                   name = {elem.name}
                   image = {elem.image}
                   price={elem.current_price}
                   marketcap={elem.market_cap}
                   pricechange = {elem.price_change_24h}
                   symbol={elem.symbol}
                   />
            ))}
        </div>
    )
}
