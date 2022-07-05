import logo from './logo.svg';
import NavBar from './Components/NavBar/NavBar'
import './App.css';
import { createElement } from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {
  
  return (
    <>
    <NavBar/>
    <ItemListContainer name='Mensaje'/>
    </>
  );
}


export default App;




