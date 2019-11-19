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
        <button className="" onClick={() => this.props.clickHandlerPrev()}>
          1111
        </button>

        <h1>{this.props.months[this.props.index + 1]}</h1>
      </div>
    );
  }
}

export default Month;
