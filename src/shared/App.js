import React,{useEffect} from 'react'
import * as P from '../pages'
import {Route, Switch, useLocation, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styled/App.css'
import Header from '../contents/Header';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function App() {

  function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if(end == -1)end = cookieData.length;
    cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
    }

  const [cookie, setCookie, removeCookie] = useCookies([]);

  /*
  useEffect(()=>{
    if(getCookie("X-AUTH-TOKEN")&&(location.pathname !== '/signup' || location.pathname !== '/login')){
        alert("로그인을 해주세요");
        history.push('/login');
    }
  },[])*/

  useEffect(()=>{
    if(!getCookie("X-AUTH-TOKEN")){
      setCookie("email", "");
    } 
  })
  
  axios.defaults.withCredentials = "*";
  
  return(
    <>
    <Header />
    <Switch>
    <Route exact path="/" component={P.Main}/>
    <Route exact path="/regist" component={P.Regist}/>
    <Route exact path="/user/:id/:review" component={P.User} />
    <Route exact path="/user/:id" component={P.User} />
    <Route exact path="/signup" component={P.SignUp} />
    <Route exact path="/login" component={P.Login} />
    <Route path='*' exact={true} component={P.Unknown} />
    </Switch>
    </>
  );
}

export default App;

