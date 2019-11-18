import React, { Component } from "react";
import "./App.css";
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addText: ""
    };
  }

  render() {
    //   let boxes=this.
    return <div className="square" onClick={() => this.props.onClick()}></div>;
  }
}
export default Square;
