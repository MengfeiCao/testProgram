import React, { Component } from 'react';
import {Switch , Route } from "react-router-dom";
import Detail from "@/pages/detail";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/detailapp/detail" component={Detail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
