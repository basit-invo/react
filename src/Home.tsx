import React from 'react';
import Table from './Table';
import Selects from './Select';
import ProductListing from './productListing';

function home({ user }: any) {
  const handleClick = () => {
    console.log(user);
    if (user == false) {
      window.location.href = '/login';
    }
  };
  return (
    <div>
      <div className="max-w-screen-xl m-auto grid grid-cols-3 gap-4 mt-10">
        {ProductListing.map((pl, i) => (
          <div key={i} className="p-5 shadow-md">
            <img src={pl.img} />
            <button
              className="bg-black text-white m-auto p-2 mt-6"
              onClick={handleClick}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
      <Table />
      <Selects />
    </div>
  );
}

export default home;
