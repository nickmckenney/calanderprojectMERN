import React, { Component } from "react";
import "./App.css";
// import Delete from "./components/Edits/DeleteBirthday";
import Create from "./components/Edits/CreateBirthday";
import Square from "./Day";

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
        <Square apiURL={this.props.apiURL} displayUpdate={this.displayUpdate} />
        {/* <Delete apiURL={this.props.apiURL} displayUpdate={this.displayUpdate} /> */}
        <Create apiURL={this.props.apiURL} displayUpdate={this.displayUpdate} />
      </div>
    );
  }
}
export default Aside;
