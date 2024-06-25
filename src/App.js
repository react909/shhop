
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main';
import Cotegory from './componets/Cotegory/Cotegory';
import { useState } from 'react';
import SpecificCategory from './componets/SpecificCategory/SpecificCategory';
import Podrobno from './componets/Podrobno/Podrobno';
import Cart from './componets/Cotegory/Cart/Cart';



function App() {
   const[products, setProducts] = useState([]);
   
   const [cart,setCart]=useState([])


   return (

 
    <div className="App">
       <BrowserRouter>
       <Header />
        
        <Routes>
           <Route path='/' element={<Main products={products} setProducts={setProducts}  />}/>
           <Route path='/Cotegory' element={<Cotegory/>}/>
           <Route path='/SpecificCategory/:name' element={<SpecificCategory/>}/>
           <Route path='/podrobno/:id'  element={<Podrobno/>}/>
           <Route path='/cart'  element={<Cart/>} />
       </Routes>
       </BrowserRouter>


    </div>
  );
}

export default App;
