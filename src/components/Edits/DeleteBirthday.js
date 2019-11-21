import React, { Component } from "react";
import "./DeleteBirthday.css";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.searchArray = [];
    this.editID = "";
    this.isLoading = false;
    this.data = {};
  }

  delete = event => {
    console.log(this.editID);
    event.preventDefault();
    this.isLoading = true;
    console.log(this.props.apiURL);
    fetch(this.props.apiURL + "birthday/id/" + this.editID, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.searchArray = res;
        this.isLoading = false;
        // / Sends res back to display from a props function
        this.props.displayUpdate(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  setID = event => {
    this.editID = event.target.value;
  };

  render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <div className="form-group">
            <input
              type="text"
              placeholder="Delete by ID"
              onChange={this.setID}
              className="form-control mr-sm-2"
              style={{ width: "60%" }}
            />
            <div className="space-five"></div>
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
              onClick={this.delete}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Delete;
