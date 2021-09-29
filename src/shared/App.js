import React,{useEffect} from 'react'
import * as P from '../pages'
import {Route, Switch, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styled/App.css'
import Header from '../contents/Header';
import axios from 'axios';

function App() {

  const {pathname} = useLocation();

  useEffect(()=>{
    document.querySelector('body').scrollTo(0,0);
  },[pathname]);
  
  axios.defaults.baseURL = 'http://13.124.26.107:9095'
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.withCredentials = true;

  return(
    <>
    <Header />
    <Switch>
    <Route exact path="/" component={P.Main}/>
    <Route exact path="/regist" component={P.Regist}/>
    <Route exact path="/item/:id" component={P.Item} />
    <Route exact path="/user/:id" component={P.User} />
    <Route exact path="/signup" component={P.SignUp} />
    <Route exact path="/login" component={P.Login} />
    <Route path='*' exact={true} component={P.Unknown} />
    </Switch>
    </>
  );
}

export default App;
