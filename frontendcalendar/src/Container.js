import React, { Component } from "react";
import "./App.css";
import Square from "./Day";
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    this.setState({
      squares: squares
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="container">
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}
export default Board;
