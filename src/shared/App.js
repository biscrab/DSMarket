import React from 'react'
import * as P from '../pages'
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styled/App.css'
import Header from '../contents/Header';

function App() {
  return(
    <>
    <Header />
    <Route exact path="/" component={P.Main}/>
    <Switch>
    <Route path="/catagory/:catagory" component={P.Catagory}/>
    <Route path="/catagory" component={P.Catagory}/>
    <Route path="/item" component={P.Item}/>
    <Route exact path="/regist" component={P.Regist}/>
    <Route exact path="/mypage" component={P.MyPage} />
    <Route exact path="/signup" component={P.SignUp} />
    <Route path='*' exact={true} component={P.Unknown} />
    </Switch>
    </>
  );
}

export default App;
