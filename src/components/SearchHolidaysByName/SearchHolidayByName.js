import React, { Component } from "react";
import "./SearchHolidayByName.css";

class HolidaySearchByName extends Component {
  constructor(props) {
    super(props);
    this.searchArray = [];
    this.searchName = "";
    this.isLoading = false;
  }

  // Fetches holiday via a name search. Is case sensitive.
  searchHolidayByName = event => {
    event.preventDefault();
    this.isLoading = true;
    fetch(this.props.apiURL + "holiday/name/" + this.searchName)
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.searchArray = res;
        this.isLoading = false;
        // This passes the search results back up via function passed down as props (WDC)
        // This function will need to be wherever displayed data is updating.
        this.props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  // Set this.searchName from input field (WDC)
  setName = (event) => {
    this.searchName =  event.target.value;
  };

  render() {
    return (
      <div>
        <div className="holiday-search-name">
          <form className="form-inline">
            <input
              type="text"
              placeholder="By Name"
              onChange={this.setName}
              className="form-control"
            />
            <div className="space-five"></div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.searchHolidayByName}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default HolidaySearchByName;
