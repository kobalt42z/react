import React from 'react'
import Card from './card';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import coinsJson from './coins.json'
function FillCard() {
    const [coins,setCoins] = useState([]);

    async function getCurrency() {
        try {
          const URL_ = 'http://fs1.co.il/bus/bitcoin.psp';
          
          let {data} = await axios(URL_);
          console.log(data);
           setCoins(data);
            
           
          
        } catch (error) {
          console.log(error);
          setCoins(coinsJson)
        //  ! cuz http to https conflict 
        } 
      }
      useEffect(() => {
        getCurrency()
         
       },[])

  return (

<div className='row row-cols-3'>
    {coins?.map((item,i)=>{
        return(
            <Card key={item.id} oid={item.id} cName={item.name} symbol={item.symbol}  valUsd ={item.price_usd}/>
        )
    })}
</div>    
    
  )
}

export default FillCard