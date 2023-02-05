import React from 'react'

function Card(props) {
  return (
    <div className="cards" >
    <div className="card">
  <img src={props.priti} className="card_img" alt="..."/>
  <div className="card_info">
    <h5 className="card_title">{props.title}</h5>
    <h3 className="card_category">{props.release}</h3>
    <a href="https://www.netflix.com/in/" > <button>Watch now</button> </a>
  </div>
</div>
</div>
  )
}

export default Card;
