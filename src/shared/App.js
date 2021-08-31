import React,{useState} from 'react'
import * as P from '../pages'
import {Route, Switch, Router} from 'react-router-dom';
import { ReactDOM } from 'react';
import '../styled/App.css'
import Header from '../contents/Header';
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'

function App() {

 const [list, setList] = useState([
          {id: 1, name: "1", price: 1, star: 1, img: A},
          {id: 2, name: "1", price: 1, star: 1, img: B},
          {id: 3, name: "1", price: 1, star: 1, img: B},
          {id: 4, name: "1", price: 1, star: 1, img: B},
          {id: 5, name: "1", price: 1, star: 1, img: B},
          {id: 6, name: "1", price: 1, star: 1, img: B}
        ]);

  return(
    <>
    <Header />
    <Route exact path="/" component={P.Main}/>
    <Switch>
    <Route path="/catagory" component={P.Catagory}/>
    <Route path="/item" component={P.Item}/>
    <Route exact path="/order" component={P.Order}/>
    <Route exact path="/regist" component={P.Regist}/>
    <Route path="/admin" component={P.Admin}/>
    <Route exact path="/cart" component={P.Cart} />
    <Route exact path="/signup" component={P.SignUp} />
    </Switch>
    </>
  );
}

export default App;
