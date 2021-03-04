import React from 'react';
import Header from './Header';
import './App.css';
import Pizza from './pizza.jpeg';
import useWindowsWidth from './custom-hooks';
import Counter from './Counter';
import Table from './Table';
import Selects from './Select';
import OrderBtn from './OrderBtn';

function App() {
 
  useWindowsWidth();
  
  return (

  <div className="App">

      <Header />

      <div className="max-w-screen-xl m-auto grid grid-cols-3 gap-4 mt-10">
      <div className="p-5 shadow-md">
        <img src={Pizza} />
        <button className="bg-black text-white m-auto p-2 mt-6">Order Now</button>
      </div>
      <div className="p-5 shadow-md">
        <img src={Pizza} />
        <button className="bg-black text-white m-auto p-2 mt-6">Order Now</button>
      </div>
      <div className="p-5 shadow-md">
        <img src={Pizza} />
        <button className="bg-black text-white m-auto p-2 mt-6">Order Now</button>
      </div>
    </div>

  <OrderBtn />
  
    <Counter />
    <Table />

    <Selects />
  </div>
  );
}

export default App;
