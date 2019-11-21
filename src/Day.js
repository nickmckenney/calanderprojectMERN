import React, { Component } from "react";
import "./App.css";
import Delete from "./components/Edits/DeleteBirthday";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  clickDay = event => {
    console.log(this.props.apiURL);
    event.preventDefault();
    this.isLoading = true;
    fetch(
      "https://calendar-api-deploy.herokuapp.com/birthday/id/" +
        this.props.dayId,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.searchArray = res;
        this.isLoading = false;
        this.props.displayUpdate(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  render() {
    console.log(this.props.apiURL);
    if (this.props.value !== ".") {
      return (
        <div className={"square"}>
          {this.props.value}
          <div className="holidayContainer">
            <h4 className="info">{this.props.info}</h4>
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
              onClick={this.clickDay}
            >
              Delete
            </button>
            <br></br>
            <h4 className="holiday">{this.props.bDay}</h4>
          </div>
        </div>
      );
    } else if (this.props.value === ".") {
      return <div className={"square fill"}>.</div>;
    }
  }
}
export default Square;
