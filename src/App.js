import React, { Component } from "react";
import "./App.css";
import Container from "./Container";
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
      days: 0,
      month: ""
    };
  }

  daysInMonth = (month, year) => {
    this.state.days = new Date(year, month, 0).getDate();
    return new Date(year, month, 0).getDate();
  };

  dayCounter = () => {
    var date = new Date();
    var month = this.state.index + 1;
    var year = 2019;
    this.daysInMonth(month, year);
  };

  clickHandler = () => {
    if (this.state.index < 11) {
      this.setState({
        index: this.state.index + 1
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Container {...this.state} dayCounter={this.dayCounter} />
        <Month {...this.state} clickHandler={this.clickHandler} />
        <Aside />
      </div>
    );
  }
}

export default App;
