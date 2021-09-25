import React,{useEffect} from 'react'
import * as P from '../pages'
import {Route, Switch, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styled/App.css'
import Header from '../contents/Header';

function App() {

  const {pathname} = useLocation();

  useEffect(()=>{
    document.querySelector('body').scrollTo(0,0);
  },[pathname]);

  return(
    <>
    <Header />
    <Switch>
    <Route exact path="/" component={P.Main}/>
    <Route exact path="/regist" component={P.Regist}/>
    <Route exact path="/mypage" component={P.MyPage} />
    <Route exact path="/signup" component={P.SignUp} />
    <Route path='*' exact={true} component={P.Unknown} />
    </Switch>
    </>
  );
}

export default App;
