import React, { Component } from "react";
import "./App.css";
class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: ["January", "Feburay", "March"]
    };
  }

  render() {
    return (
      <div className="month">
        <h1>{this.state.months[1]}</h1>
      </div>
    );
  }
}

export default Month;
