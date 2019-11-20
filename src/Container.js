import React, { Component } from "react";
import "./App.css";
import Square from "./Day";
class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  renderSquare = () => {
    var rows = [];

    let days = this.props.days;

    for (var i = 0; i < 35; i++) {
      console.log(this.props.dayOfTheWeek);
      rows.push(<Square value={i} key={i} />);
    }
    return <div>{rows}</div>;
  };
  render() {
    return (
      <div className="container">
        <div className="board-row">{this.renderSquare()}</div>
      </div>
    );
  }
}
export default Board;
