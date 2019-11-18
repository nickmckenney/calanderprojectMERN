import React, { Component } from "react";
import "./App.css";
class Square extends React.Component {
  render() {
    return (
      <div className="square" onClick={() => this.props.onClick()}>
        <h1>1</h1>
      </div>
    );
  }
}
export default Square;
