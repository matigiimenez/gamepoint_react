import React, {useState} from 'react'
import './ItemCount.css'

//contador !<1 >stock 

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
    <>
    <div className='contador'>
      <button onClick={restar}>-</button>
      <p className='contador__p'>{cuenta}</p>
      <button onClick={sumar}>+</button>
    </div>
    <button className='boton__comprar' onClick={onAdd}>Comprar</button>
    </>
  )
}

export default ItemCount