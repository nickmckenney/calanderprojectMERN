import Calendar from "../src/components/Calendar/Calendar";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<Calendar />);
});
describe("<Calendar /> rendering", () => {
  it("should render two <div>", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });
  it("should render class of calendarContainer", () => {
    expect(wrapper.find(".calendarContainer")).toHaveLength(1);
  });
  it("should render class of weeksContainer", () => {
    expect(wrapper.find(".weeksContainer")).toHaveLength(1);
  });
});
