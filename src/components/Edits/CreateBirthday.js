import React, { Component } from "react";
import "./CreateBirthday.css";

class BirthdayUpdateAdd extends Component {
  constructor(props) {
    super(props);
    this.searchArray = [];
    this.editID = "";
    this.isLoading = false;
    this.data = {};
  }

  editByID = event => {
    event.preventDefault();
    this.isLoading = true;
    fetch(this.props.apiURL + "birthday/id/" + this.editID, {
      method: "PUT",
      body: JSON.stringify(this.data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.searchArray = res;
        this.isLoading = false;
        // Sends res back to display from a props function
        this.props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  AddNew = event => {
    event.preventDefault();
    this.isLoading = true;
    console.log(this.props.apiURL + "birthday/");
    fetch((this.props.apiURL + "birthday/"), {
      method: "POST",
      body: JSON.stringify(this.data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.searchArray = res;
        this.isLoading = false;
        // Sends res back to display from a props function
        // this.props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  setUpdateName = event => {
    if (event.target.value !== "") {
      this.data.name = event.target.value;
    } else {
      delete this.data.name;
    }
  };

  setUpdateDate = event => {
    if (event.target.value !== "") {
      this.data.date = event.target.value;
      this.data.dateShort = event.target.value.substring(5);
    } else {
      delete this.data.date;
      delete this.data.dateShort;
    }
  };

  setID = event => {
    this.editID = event.target.value;
  };

  render() {
    return (
      <div>
        <div className="amiibo-search-ID">
          Edit/Add By ID
          <form className="form-inline editAdd">
            <div className="form-group">
              <input
                type="text"
                placeholder="ID (Required to edit/Leave empty to add)"
                onChange={this.setID}
                className="form-control"
                style={{ width: "400px" }}
              />
              <div className="space-five"></div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.editByID}
              >
                Edit
              </button>
              <div className="space-five"></div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.AddNew}
              >
                Add
              </button>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                onChange={this.setUpdateName}
                className="form-control"
                style={{ width: "400px" }}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Date (format: YYYY-MM-DD)"
                onChange={this.setUpdateDate}
                className="form-control"
                style={{ width: "400px" }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BirthdayUpdateAdd;