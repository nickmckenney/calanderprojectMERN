import React, { Component } from "react";
import "./Navbar.css";
// import "bootstrap/dist/css/bootstrap.css";
import Monthnav from "../Monthnav/Monthnav";
import Accordion from "../Accordion/Accordion";
import "../../App.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  linkHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Accordion />

        <div className="monthContainer">
          <button
            onClick={() => this.props.clickHandlerPrev()}
            className="arrow previous"
          >
            &#8249;
          </button>
          <span className="month">{this.props.months[this.props.month]}</span>
          <button
            onClick={() => this.props.clickHandler()}
            className="arrow next"
          >
            &#8250;
          </button>
        </div>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
            onClick={e => this.linkHandler(e)}
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
