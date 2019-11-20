import React, { Component } from "react";
import "./Monthnav.css";
import "../../App.css";

class Monthnav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.months);
    return (
      <div className="monthContainer">
        <button
          onClick={() => this.props.clickHandlerPrev()}
          className="arrow previous"
        >
          &#8249;
        </button>
        {/* <span className="month">{this.props.months[this.props.month]}</span> */}
        <button
          onClick={() => this.props.clickHandler()}
          className="arrow next"
        >
          &#8250;
        </button>
      </div>
    );
  }
}

export default Monthnav;
