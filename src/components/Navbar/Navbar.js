import React, { Component } from "react";
import "./Navbar.css";
import "../../App.css";

class Navbar extends Component {
  
  linkHandler(e) {
    e.preventDefault();
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="monthContainer">
          <button
            onClick={() => this.props.clickHandlerPrev()}
            className="arrow previous"
          >
            &#8249;
          </button>
          <span className="month">
            <div className="yearContainer">{this.props.year}</div>
            <div className="monthContainer">
              {this.props.months[this.props.month]}
            </div>
          </span>
          <button
            onClick={() => this.props.clickHandler()}
            className="arrow next"
          >
            &#8250;
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
