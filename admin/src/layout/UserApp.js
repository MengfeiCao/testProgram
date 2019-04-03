import React, { Component } from 'react';
import {Switch , Route } from "react-router-dom";
import Login from "@/pages/login/login";
import Register from "@/pages/register/register";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/userapp/login" component={Login}></Route>
          <Route path="/userapp/register" component={Register}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
