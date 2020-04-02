import React from 'react';

import Nav from './Nav';
import Header from './Header';
import Filter from './Filter';
import Categories from './Categories';


function App() {
  return (
    <div className="p-4">
      <Nav />
      <Header />
      <Filter />
      <Categories />
    </div>
  )
}

export default App;