import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import App from "../../App";

describe("Navbar component", () => {
  let componentNav;
  beforeEach(() => {
    componentNav = shallow(<Navbar />);
  });
  let componentApp;
  beforeEach(() => {
    componentApp = shallow(<App />);
  });
  it("should have a button with a class plus that increases the month in state", () => {
    componentNav.find(".next").simulate("click");
    expect(componentApp.state("month")).toEqual(1);
  });
});
