import React, { Component } from "react";
import "./App.css";
import Create from "./components/CreateEditBirthday/CreateEditBirthday";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.displayArray = "";
  }
  displayUpdate = res => {
    this.display = res;
    console.log(res);
  };
  render() {
    console.log(this.props);
    return (
      <div className="aside">
        <Create apiURL={this.props.apiURL} displayUpdate={this.displayUpdate} />
      </div>
    );
  }
}
export default Aside;
