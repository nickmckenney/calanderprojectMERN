import React, { Component } from "react";
import "./App.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="square">
        {this.props.value}
        <h4 className="info">{this.props.info}</h4>
        <h4 className="holiday">{this.props.bDay}</h4>
      </div>
    );
  }
}
export default Square;
