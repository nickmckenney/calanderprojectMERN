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
    let birthdays = this.props.birthdayArray;

    console.log(holidays);
    let daysInMonth = this.props.days[this.props.month];
    let printDays = [];
    let storedDays = [];
    let holiday = [];
    let birthday = [];
    let storedHolidays = [];

    while (daysInMonth != 0) {
      printDays.push(q);
      q += 1;
      daysInMonth -= 1;
    }
    let id = [];

    for (let x = 1; x < birthdays.length; x++) {
      if (birthdays[x].length > 1) {
        id.push(birthdays[x][1]._id);
      } else {
        id.push("");
      }
    }

    for (let x = 1; x < holidays.length; x++) {
      if (holidays[x].length > 1) {
        if (holidays[x][1].name.length > 1) {
          holiday.push(holidays[x][1].name);
        } else {
          holiday.push("");
        }
      } else {
        holiday.push("");
      }
    }

    for (let x = 1; x < birthdays.length; x++) {
      if (birthdays[x].length > 1) {
        birthday.push(birthdays[x][1].name);
      } else {
        birthday.push("");
      }
    }
    for (let count = 0; count < monthdaySkiper; count++) {
      rows.push(<Square value={"."} key={count + 400} />);
    }

    for (var i = 0; i < 42 - monthdaySkiper; i++) {
      if (printDays[i] > daysInMonth) {
        rows.push(
          <Square
            value={printDays[i]}
            info={holiday[i]}
            bDay={birthday[i]}
            dayId={id[i]}
            key={i}
          />
        );
      } else {
        rows.push(<Square value={"."} key={i} />);
      }
    }

    return <div className="rows">{rows}</div>;
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
