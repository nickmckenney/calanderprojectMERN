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
    event.preventDefault();
    this.isLoading = true;
    fetch(this.props.apiURL + "holiday/id/" + this.editID, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.searchArray = res;
        this.isLoading = false;
        // / Sends res back to display from a props function
        this.props.setSearchArray(res);
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
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              placeholder="ID (Required to delete)"
              onChange={this.setID}
              className="form-control"
              style={{ width: "400px" }}
            />
            <div className="space-five"></div>
            <button
              className="btn btn-danger"
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
