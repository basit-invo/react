import React from 'react';
import Header from './Header';
import Home from './Home.js';
import './App.css';
import useWindowsWidth from './custom-hooks';
import Register from './register/';
import Login from './login/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  useWindowsWidth();

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" exact></Route>
          <Route path="/register" component={Register} exact></Route>
          <Route path="/login" component={Login} exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
