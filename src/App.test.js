import React from 'react';
import { shallow } from "enzyme";
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });
  it("should render my component", () => {
    const wrapper = shallow(<App />);
  });
  it("should have a state attribute called month initialized to 1", () => {
    expect(component.state("month")).toEqual(1);
  });
  it("should have a state attribute called year initialized to 2019", () => {
    expect(component.state("year")).toEqual(2019);
  });
});