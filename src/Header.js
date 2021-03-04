import React from 'react';
import Logo from './logo.svg';
function Header() {
  return (
    <div className="bg-black w-full text-white">
      <div className="max-w-screen-xl m-auto overflow-hidden block">
        <div className="w-1/4 float-left">
          <img src={Logo} width="100" />
        </div>
        <div className="w-2/4 float-left mt-5">
          <a className="mr-5" href="/">
            Home
          </a>
          <a className="mr-5" href="/all">
            Shop All
          </a>
        </div>
        <div className="w-1/4 float-left mt-5">
          <a href="/login">login</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
