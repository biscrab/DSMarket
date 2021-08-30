import React from 'react'
import * as P from '../pages'
import { Route } from 'react-router-dom';
import '../styled/App.css'
import Header from '../contents/Header';

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={P.Main}/>
      <Route path="/catagory" component={P.Catagory}/>
      <Route exact path="/item" component={P.Item}/>
      <Route exact path="/order" component={P.Order}/>
      <Route exact path="/regist" component={P.Regist}/>
      <Route exact path="/admin" component={P.Admin}/>
      <Route exact path="/cart" component={P.Cart} />
      <Route exact path="/signup" component={P.SignUp} />
    </>
  );
}

export default App;
