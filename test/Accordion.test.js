import Accordion from "../src/components/Accordion/Accordion";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<Accordion />);
});
describe("<Accordion /> rendering", () => {
  it("should render four <div>", () => {
    expect(wrapper.find("div")).toHaveLength(4);
  });
  it("should have a class called burger", () => {
    expect(wrapper.find(".hamburger")).toHaveLength(1);
  });
  it("should have a class called burger x 3", () => {
    expect(wrapper.find(".burger")).toHaveLength(3);
  });
});
