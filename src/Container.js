import React, { Component } from "react";
import "./App.css";
import Square from "./Day";
class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSquare() {
    return <Square value={this.props.dayCounter()} />;
  }

  render() {
    return (
      <div className="container">
        <div className="board-row">
        </div>
      </div>
    );
  }
}
export default Board;
