import React from 'react';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Aquí se está construyendo la web de Odyssey"/>
    </>
  );
}

export default App;
