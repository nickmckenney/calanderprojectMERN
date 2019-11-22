import Day from "../src/Day";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<Day />);
});
describe("<Add /> rendering", () => {
  it("should render one <h4>", () => {
    expect(wrapper.find("h4")).toHaveLength(1);
  });
  it("should render two <div>", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });
  it("should have a class holidayContainer", () => {
    expect(wrapper.find(".holidayContainer")).toHaveLength(1);
  });
  
});
