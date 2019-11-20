import React, { Component } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import "./App.css";

class Month extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.month);
    return (
      <div className="monthNavBar">
        <Navbar />
      </div>
    );
  }
}

export default Month;
