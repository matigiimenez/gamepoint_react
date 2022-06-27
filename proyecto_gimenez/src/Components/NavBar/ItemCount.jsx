import React, {useState} from 'react'
import './ItemCount.css'


const ItemCount = ({stock}) => {  
  const [cuenta, setCuenta] = useState(1)

  const sumar = () => {
   cuenta < stock && setCuenta(cuenta + 1);
   cuenta >= stock && alert("No tenemos disponible mas stock de este producto")
  }

  const restar = () =>{
    cuenta >0 && setCuenta(cuenta - 1);
  }

  const onAdd = () =>{
    cuenta >0 && alert(`Gracias por comprar ${cuenta} productos!`)
  }

  return (
    <div className='div'>
    <h3>Monitor 144hz</h3>
    <div className='contador'>
      <button onClick={restar}>-</button>
      <p className='contador__p'>{cuenta}</p>
      <button onClick={sumar}>+</button>
    </div>
    <button className='boton__comprar' onClick={onAdd}>Comprar</button>
    </div>
  )
}

export default ItemCount