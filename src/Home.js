import React from 'react';
import Counter from './Counter';
import Table from './Table';
import Selects from './Select';
import OrderBtn from './OrderBtn';
import ProductListing from './productListing';

function home() {
  return (
    <div>
      <div className="max-w-screen-xl m-auto grid grid-cols-3 gap-4 mt-10">
        {ProductListing.map((pl, i) => (
          <div key={i} className="p-5 shadow-md">
            <img src={pl.img} />
            <button className="bg-black text-white m-auto p-2 mt-6">
              Order Now
            </button>
          </div>
        ))}
      </div>
      <Counter />
      <OrderBtn />
      <Table />
      <Selects />
    </div>
  );
}

export default home;
