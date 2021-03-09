import React from 'react';
import Header from './Header';
import './App.css';
import useWindowsWidth from './custom-hooks';
import Counter from './Counter';
import Table from './Table';
import Selects from './Select';
import OrderBtn from './OrderBtn';
import NameForm from './Forms';
import ProductListing from './productListing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  useWindowsWidth();

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
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
            <OrderBtn />
            <Counter />
            <Table />
            <Selects />
          </Route>
          <Route path="/about" exact>
            <div>About</div>
          </Route>
          <Route path="/login" exact>
            <div>Login / Regiser</div>
            <NameForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
