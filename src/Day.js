import React from "react";
import "./App.css";
import { ReactComponent as Delete } from "./images/Delete.svg";

class Square extends React.Component {
  
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
    if (this.props.value !== "." && this.props.bDay) {
      return (
        <div className={"square"}>
          {this.props.value}
          <div className="holidayContainer">
            <h4 className="info">{this.props.info}</h4>
            <div className="birthdayContainer">
              <div className="bDayContainer">
                <h4 className="holiday">{this.props.bDay + "'s Birthday"}</h4>
              </div>
              <Delete
                className="svgIcon"
                onClick={this.clickDay}
              />
            </div>
          </div>
        </div>
      );
    } else if (this.props.value !== ".") {
      return (
        <div className={"square"}>
          {this.props.value}
          <div className="holidayContainer">
            <h4 className="info">{this.props.info}</h4>
          </div>
        </div>
      );
    } else if (this.props.value === ".") {
      return <div className={"square fill"}>.</div>;
    }
  }
}
export default Square;
