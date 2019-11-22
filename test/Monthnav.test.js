// Need to figure out mocking props to pass
import Monthnav from "../src/components/Monthnav/Monthnav";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<Monthnav />);
});
describe("<Monthnav /> rendering", () => {
  it("should render one <div>", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
  
});
