import React from 'react'
import './card.scss';


function Card(props) {
  /* props:
  oid = object id 
  cName = currency name 
  symbol = symbol
  valUsd =value in usd
  */
  return (
    <div className="col">
      <div className="card mb-3" style={{ maxWidth: "540px;" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={require(`./btc-logo/${props.oid}.png`)} className="img-fluid rounded-start" alt={`${props.oid}`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title h3">{props.cName}</h5>
              <p className="card-text">USD: {props.valUsd}</p>
              <p className="card-text h6">symbol :{props.symbol}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Card