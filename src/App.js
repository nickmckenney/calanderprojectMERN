import React, { Component } from "react";
import "./App.css";
import Day from "./Container";
import Aside from "./Aside";
import Month from "./Month";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Month />
        <Day />
        <Aside />
      </div>
    );
  }
}

export default App;
