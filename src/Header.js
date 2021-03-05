import React from 'react';
import Logo from './logo.svg';
import {
  Link
} from "react-router-dom";

function Header() {
  return (
   
    <div className="bg-black w-full text-white">
      <div className="max-w-screen-xl m-auto overflow-hidden block">
        <div className="w-1/4 float-left">
          <img src={Logo} width="100" />
        </div>
        <div className="w-2/4 float-left mt-5">
          <Link to="/" className="mr-5">Home</Link>
          <Link to="/about" className="mr-5">About</Link>
        </div>
        <div className="w-1/4 float-left mt-5">
          <Link to="/login" className="mr-5">Login / Register</Link>
        </div>
      </div>
    </div>
    
  );
}

export default Header;
