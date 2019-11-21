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
    return (
      <div className="aside">
        <Delete displayUpdate={this.displayUpdate}/>
      </div>
    )
  }
}
export default Aside;
