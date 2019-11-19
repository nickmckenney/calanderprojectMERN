import React, { Component } from "react";
import "./App.css";
import Container from "./Container";
import Aside from "./Aside";
import Month from "./Month";
import { parse } from "date-fns";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      squares: [],
      month: 1,
      year: 2019,
      isLoading: false,
      holidayArray: [],
      birthdayArray: [],
      dayOfTheWeek: 0
    };
    this.apiURL = "https://calendar-api-deploy.herokuapp.com/";
    this.months = [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    this.daysPerMonth = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.monthStrings = [null, "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    this.monthCodes = [null, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5]
    this.centuryCode = 6;
  }

  grabHolidayMonth = () => {
    this.setState({ isLoading: true });
    fetch(
      this.apiURL +
        "holiday/date/" +
        `${this.state.year}-${this.monthStrings[this.state.month]}-01/` +
        `${this.state.year}-${this.monthStrings[this.state.month]}-${this.daysPerMonth[this.state.month]}`
    )
      .then(res => res.json())
      .then(res => {
        console.log("Got Holiday Data");
        this.setState({
          holidayArray: res,
          isLoading: false
        });
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  firstDay = () => {
    let twoDigit = this.state.year % 100;
    let yearCode = ((twoDigit + Math.floor(twoDigit / 4)) % 7)
    let monthCode = this.monthCodes[this.state.month]
    let leapYear = 0;
    if (this.state.year % 4 === 0) {
      leapYear = 1;
    } else {
      leapYear = 0;
    }
    let dayOfWeek = ((yearCode + monthCode + this.centuryCode + 1 + leapYear) %7 ) % 7;
    this.state({ dayOfTheWeek: dayOfWeek });
  }

  monthNext = () => {
    if (this.state.month === 12) {
      this.setState({ month: 1 });
    } else {
      this.setState({ month: this.state.month + 1 });
    }
  };

  monthPrevoius = () => {
    if (this.state.month === 1) {
      this.setState({ month: 12 });
    } else {
      this.setState({ month: this.state.month - 1 });
    }
  };

  clickHandler = () => {
    if (this.state.index < 11) {
      this.setState({
        index: this.state.index + 1
      });
    }
  };

  componentDidMount() {
    this.grabHolidayMonth();
  }

  render() {
    this.firstDay()
    return (
      <div className="App">
        <Container {...this.state} dayCounter={this.dayCounter} />
        <Month {...this.state} clickHandler={this.clickHandler} />
        <Aside />
      </div>
    );
  }
}

export default App;
