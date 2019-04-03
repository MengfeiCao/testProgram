import React, { Component } from 'react';
import {Switch , Route , NavLink , Redirect } from "react-router-dom";
import Home from "@/pages/home";
import Kind from "@/pages/kind";
import Cart from "@/pages/cart";
import User from "@/pages/user";

class App extends Component {
  render() {
    return (
      <div className="container">
        123456
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/kind" component={Kind}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/user" component={User}></Route>
          <Redirect to={ {pathname :"/home"} }></Redirect>
        </Switch>
        <footer className="footer">
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/kind">分类</NavLink>
          <NavLink to="/cart">购物车</NavLink>
          <NavLink to="/user">我的</NavLink>
        </footer>
      </div>
    );
  }
}

export default App;
