import React, { Component } from "react";
import "./App.css";
import Container from "./Container";
import Aside from "./Aside";
import Navbar from "./components/Navbar/Navbar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [],
      month: 1,
      year: 2019,
      isLoading: false,
      holidayArray: [],
      birthdayArray: [],
      dayOfTheWeek: 0 //Where the first day starts
    };
    this.apiURL = "https://calendar-api-deploy.herokuapp.com/";
    // [0] is null so that month numbers match. (WDC)
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
    // [0] is null so that month numbers match. (WDC)
    this.daysPerMonth = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.monthStrings = [
      null,
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    // [0] is null so that month numbers match. (WDC)
    this.monthCodes = [null, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    this.centuryCode = 6;
  }

  // This function parses the data for a specific month and puts birthdays/holidays into their
  // matching day. This then goes into state in the fetch request. (WDC)
  parseData(res) {
    // This is the base calendar array for data coming from the API to be slotted into (WDC)
    let baseArray = [
      [null],
      ["01"],
      ["02"],
      ["03"],
      ["04"],
      ["05"],
      ["06"],
      ["07"],
      ["08"],
      ["09"],
      ["10"],
      ["11"],
      ["12"],
      ["13"],
      ["14"],
      ["15"],
      ["16"],
      ["17"],
      ["18"],
      ["19"],
      ["20"],
      ["21"],
      ["22"],
      ["23"],
      ["24"],
      ["25"],
      ["26"],
      ["27"],
      ["28"],
      ["29"],
      ["30"],
      ["31"]
    ];
    let dataArray = res;
    for (let i = 0; i < baseArray.length; i++) {
      for (let j = 0; j < dataArray.length; j++) {
        if (
          dataArray[j].dateShort ===
          `${this.monthStrings[this.state.month]}-${baseArray[i][0]}`
        ) {
          baseArray[i].push(dataArray[j]);
        }
      }
    }
    return baseArray;
  }

  // Fetches the holidays for the current month (WDC)
  grabHolidayMonth = () => {
    this.setState({ isLoading: true });
    fetch(
      this.apiURL +
        "holiday/date-short/" +
        `${this.monthStrings[this.state.month]}-01/` +
        `${this.monthStrings[this.state.month]}-${
          this.daysPerMonth[this.state.month]
        }`
    )
      .then(res => res.json())
      .then(res => {
        console.log("Got Holiday Data");
        this.setState({
          holidayArray: this.parseData(res),
          isLoading: false
        });
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  // Fetches birthdays for current month (WDC)
  grabBirthdayMonth = () => {
    this.setState({ isLoading: true });
    fetch(
      this.apiURL +
        "birthday/date-short/" +
        `${this.monthStrings[this.state.month]}-01/` +
        `${this.monthStrings[this.state.month]}-${
          this.daysPerMonth[this.state.month]
        }`
    )
      .then(res => res.json())
      .then(res => {
        console.log("Got Birthady Data");
        this.setState({
          birthdayArray: this.parseData(res),
          isLoading: false
        });
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  // Calculates what day of the week the first day of the month falls on. (WDC)
  // In this.state.dayOfWeek, you'll have a code. 0 is Sunday, 1 is Monday, etc.
  firstDay = () => {
    let twoDigit = this.state.year % 100;
    let yearCode = (twoDigit + Math.floor(twoDigit / 4)) % 7;
    let monthCode = this.monthCodes[this.state.month];
    let leapYear = 0;
    if (this.state.year % 4 === 0) {
      leapYear = 1;
    } else {
      leapYear = 0;
    }

    let dayOfWeek =
      ((yearCode + monthCode + this.centuryCode + 1 + leapYear) % 7) % 7;

    this.setState({ dayOfTheWeek: dayOfWeek });
<<<<<<< HEAD
    console.log(dayOfWeek);
=======
    console.log("leap " + leapYear);
    console.log("dow " + dayOfWeek);
    console.log("dotw " + this.state.dayOfTheWeek);
    console.log("NEW STATE");
>>>>>>> 9da0999c0432fa23a7417cc61b0c88660aad5f9f
  };

  // Increases state.month by 1. If it's December, it will roll over to January. (WDC)
  // Year in state will also change properly.
  monthNext = () => {
    if (this.state.month === 12) {
      this.setState({ year: this.state.year + 1 });
      this.setState({ month: 1 });
    } else {
      this.setState({ month: this.state.month + 1 });
    }
    this.firstDay();
  };

  // Decreases state.month by 1. If it's January, it will roll over to December. (WDC)
  // Year in state will also change properly.
  monthPrevoius = () => {
    if (this.state.month === 1) {
      this.setState({ year: this.state.year - 1 });
      this.setState({ month: 12 });
    } else {
      this.setState({ month: this.state.month - 1 });
    }
<<<<<<< HEAD
    this.firstDay()
=======
    this.firstDay();
>>>>>>> 9da0999c0432fa23a7417cc61b0c88660aad5f9f
  };

  componentDidMount() {
    this.grabHolidayMonth();
    this.grabBirthdayMonth();
    this.firstDay();
  }

  render() {
    return (
      <div className="App">
        <Navbar
          clickHandler={this.monthNext}
          clickHandlerPrev={this.monthPrevoius}
          months={this.months}
          {...this.state}
        />
        <Container
          {...this.state}
          dayCounter={this.dayCounter}
          days={this.daysPerMonth}
        />

        <Aside />
      </div>
    );
  }
}

export default App;
