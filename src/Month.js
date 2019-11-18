import React, { Component } from "react";
import "./App.css";

class Month extends React.Component {
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
      index: 0
    };
  }
  clickHandler() {
    if (this.state.index < 11) {
      console.log(this.state.index);
      this.setState({
        index: this.state.index + 1
      });
    }
  }
  render() {
    return (
      <div className="month">
        <button className="btn" onClick={() => this.clickHandler()}>
          Click Me
        </button>

        <h1>{this.state.months[this.state.index]}</h1>
      </div>
    );
  }
}

export default Month;
