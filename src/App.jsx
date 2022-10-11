import React from 'react';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {



  return (

    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/curso/:id" element={<ItemDetailContainer/>}/>
        <Route path="/curso/undefined" element={<ItemListContainer/>}/>
        <Route path="/category/categoryID" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
