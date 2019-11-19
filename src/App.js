import React, { Component } from "react";
import "./App.css";
import Day from "./Container";
import Aside from "./Aside";
import Month from "./Month";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      index: 0,
      squares: [],
      days: "",
      month: ""
    };
  }
  daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  GFG_Fun = () => {
    var date = new Date();
    var month = this.state.index + 1;
    var year = 2019;
    console.log(this.daysInMonth(month, year));
  };

  clickHandler = () => {
    if (this.state.index < 11) {
      this.setState({
        index: this.state.index + 1
      });
      console.log(this.GFG_Fun());
    }
  };

  render() {
    return (
      <div className="App">
        <Day {...this.state} GFG_Fun={this.GFG_Fun} />
        <Month {...this.state} clickHandler={this.clickHandler} />
        <Aside />
      </div>
    );
  }
}

export default App;
