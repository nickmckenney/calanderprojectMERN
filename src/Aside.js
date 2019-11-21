import React, { Component } from "react";
import "./App.css";
import Delete from "./components/Edits/DeleteBirthday";

class Aside extends Component {
  constructor(props) {
    super(props)
    this.displayArray = ""
  }
  displayUpdate = (res) => {
    this.display = res
  }
  render() {
    console.log(this.props);
    return (
      <div className="aside">
        <Delete apiURL={this.props.apiURL} displayUpdate={this.displayUpdate}/>
      </div>
    )
  }
}
export default Aside;
