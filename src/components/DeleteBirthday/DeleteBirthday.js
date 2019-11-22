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
    console.log(this.props.editIds);
    fetch(this.props.apiURL + "birthday/id/" + this.props.editIds, {
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

  render() {
    console.log(this.props.editIds);

    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-outline-danger my-2 my-sm-0"
            type="submit"
            onClick={this.delete}
          >
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default Delete;
