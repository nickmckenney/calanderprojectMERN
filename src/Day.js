import React, { Component } from "react";
import "./App.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.value !== ".") {
      return <div className={"square"}>{this.props.value}</div>;
    } else if (this.props.value === ".") {
      return <div className={"square fill"}>.</div>;
    }
  }
}
export default Square;
