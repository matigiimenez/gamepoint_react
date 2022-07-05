import React from 'react'
import Item from '../Item/Item'

const itemList = (props) => {
  return (
    <div>
        <img src={props.img}/>
        <h1>{props.title}</h1>
        <p>{props.desciption}</p>
        <h2>{props.price}</h2>
    </div>
  )
}

export default itemList