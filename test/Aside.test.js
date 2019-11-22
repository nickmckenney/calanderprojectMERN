import Aside from "../src/Aside";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<Aside />);
});
describe("<Add /> rendering", () => {
  it("should render one <div>", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
  it("should have a class called aside", () => {
    expect(wrapper.find(".aside")).toHaveLength(1);
  });
});
