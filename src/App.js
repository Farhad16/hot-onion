import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CardSection from './components/CardSection/CardSection';


export const UserContext = createContext();
function App() {
  const [signInUser, setSignInUser] = useState({});
  return (
    <UserContext.Provider value={[signInUser, setSignInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <CardSection></CardSection>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
