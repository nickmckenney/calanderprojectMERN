import React, { Component } from "react";
import "./App.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="square">{this.props.value}</div>;
  }
}
export default Square;
