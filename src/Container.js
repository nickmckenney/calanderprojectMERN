import React, { Component } from "react";
import "./App.css";
import Square from "./Day";
class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  renderSquare = () => {
    var rows = [];
    let q = 1;

    let monthdaySkiper = this.props.dayOfTheWeek;
    let holidays = this.props.holidayArray;
    let daysInMonth = this.props.days[this.props.month];
    let printDays = [];

    while (daysInMonth != 0) {
      printDays.push(q);
      q += 1;
      daysInMonth -= 1;
    }

    for (let count = 0; count < monthdaySkiper; count++) {
      rows.push(<Square value={"."} key={count + 100} />);
    }

    for (var i = 0; i < 42 - monthdaySkiper; i++) {
      if (printDays[i] > daysInMonth) {
        rows.push(<Square value={printDays[i]} key={i} />);
      } else {
        rows.push(<Square value={"."} key={i} />);
      }
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
