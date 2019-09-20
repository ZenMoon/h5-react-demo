import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route,Redirect,Switch }from "react-router-dom"
import Cart from './components/Cart'
import Category from './components/Category'
import Center from './components/Center'
import Home from './components/Home'
import FooterNav from './components/FooterNav'
const NotFind=()=><div>404页面</div>
function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/category' component={Category}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/center' component={Center}/>
          <Redirect from='/' to='/home' exact/>
          <Route  component={NotFind}/>
        </Switch>
        <FooterNav />
    </div>
  );
}
export default App;
