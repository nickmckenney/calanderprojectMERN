import React, { Component } from "react";
import "./App.css";
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "2"
    };
  }

  render() {
    return (
      <div className="square" onClick={() => this.props.onClick()}>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
export default Square;
