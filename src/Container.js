import React, { Component } from "react";
import "./App.css";
import Square from "./Day";
class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSquare() {
    return <Square value={this.props.GFG_Fun()} />;
  }
  repeatSeven() {
    for (let i = 0; i < 7; i++) {
      {
        <h1>{this.renderSquare()}</h1>;
        console.log(i);
      }
    }
  }
  render() {
    return (
      <div className="container">
        <div className="board-row">{this.repeatSeven()}</div>
        <div className="board-row">{this.renderSquare()}</div>
        <div className="board-row">{this.renderSquare()}</div>
        <div className="board-row">{this.renderSquare()}</div>
        <div className="board-row">{this.renderSquare()}</div>
      </div>
    );
  }
}
export default Board;
