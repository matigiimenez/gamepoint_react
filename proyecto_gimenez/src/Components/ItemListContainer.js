import ItemCount from "./NavBar/ItemCount";

const ItemListContainer = (saludo) =>{
    const {name} = saludo;

    return (
    <>
    <h1>{name}</h1>
    <ItemCount stock={4}/>
    </>
    )
    
}


export default ItemListContainer