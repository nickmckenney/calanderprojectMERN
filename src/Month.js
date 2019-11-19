import React, { Component } from "react";
import "./App.css";
// const dateFns = require("date-fns");

class Month extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="month">
        <button className="btn" onClick={() => this.props.clickHandler()}>
          Click Me
        </button>

        <h1>{this.props.months[this.props.index]}</h1>
      </div>
    );
  }
}

export default Month;
