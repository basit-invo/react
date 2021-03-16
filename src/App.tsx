import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import firebase from 'firebase';
import './App.css';
import useWindowsWidth from './custom-hooks';
import Register from './register';
import Login from './login';
import Forgot from './login/forgot';
import Reset from './login/reset';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState<Boolean>(false);
  function handleAuth() {
    firebase.auth().onAuthStateChanged((userr) => {
      if (userr) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }

  // function logout() {
  //   firebase.auth().signOut();
  //   window.location.href = '/login';
  // }

  const logout = (e: React.ChangeEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    firebase.auth().signOut();
    window.location.href = '/login';
  };

  useEffect(() => {
    handleAuth();
  }, []);

  useWindowsWidth();

  return (
    <Router>
      <div className="App">
        <Header user={user} logout={logout} />
        <Switch>
          <Route
            path="/"
            component={() => {
              return <Home user={user} />;
            }}
            exact
          ></Route>
          <Route path="/about" exact></Route>
          <Route path="/register" component={Register} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route
            path="/reset"
            component={() => {
              return <Reset />;
            }}
            exact
          ></Route>
          <Route
            path="/forgot"
            component={() => {
              return <Forgot />;
            }}
            exact
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
