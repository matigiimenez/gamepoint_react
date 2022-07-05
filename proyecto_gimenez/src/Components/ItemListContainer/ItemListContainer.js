import { useState, useEffect  } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css'
import { LinearProgress } from '@mui/material';
import itemList from "../itemList/itemList";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio, Circles } from  'react-loader-spinner'



const initialProducts = [
    {id:0, title:'Iphone 8', description:'64gb', price:275, img:'https://www.macstation.com.ar/img/productos/2911-2590-1.jpg'},
    {id:1, title: 'iphone 8 plus', description:'64gb', price:300, img:'https://www.macstation.com.ar/img/productos/2911-2590-1.jpg'},
    {id:2, title: 'iphone x', description:'64gb', price:310, img:'https://www.macstation.com.ar/img/productos/2911-2590-1.jpg'},
    {id:3, title: 'iphone 11', description:'64gb', price:400, img:'https://www.macstation.com.ar/img/productos/2911-2590-1.jpg'},
]


const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(initialProducts) 
    }, 2000)

});



const ItemListContainer = (saludo) =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        promesa.then((data)=>{
            setLoading(false);
            setProducts(data)
        }).catch(() => {
        })

    }, []);

    if (loading) {
    return (
      <div className="reload">
        <Circles height="100"width="100"color="blue"ariaLabel="Loading"/>
      </div>
    );
  }


    const {name} = saludo;
    return (
    <>
    <h1>{name}</h1>
    <ItemCount stock={4}/>
    {products.map((product) => <div className="card" key={product.id}>
        <h2 className="title">{product.title}</h2>
        <p className="price" >$ {product.price}</p>
        <img src={product.img}></img>
        <p className="description" >{product.description}</p>
        <itemList products={itemList}/>
        
    </div>

    )}
    </>
    )
    
}


export default ItemListContainer