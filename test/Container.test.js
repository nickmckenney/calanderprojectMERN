// Need to figure out mocking props to pass
import Container from "../src/Container";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<Container />);
  wrapper.setProps({ days: "30", months: "1" });
});
describe("<Container /> rendering", () => {
  it("should render one <div>", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
