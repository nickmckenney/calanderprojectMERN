import React, { Component } from "react";
import "./App.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  clickDay = () => {
    console.log(this.props.info)
  }

  render() {
    if (this.props.value !== ".") {
      return (
        <div className={"square"} onClick={this.clickDay}>{this.props.value}
          <div className="holidayContainer">
            <h4 className="info">{this.props.info}</h4>
            <br></br>
            <h4 className="holiday">{this.props.bDay}</h4>
          </div>
        </div>
      )
    } else if (this.props.value === ".") {
      return <div className={"square fill"}>.</div>;
    }
  }
}
export default Square;
