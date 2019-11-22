// Need to figure out mocking fetch to pass

import App from "../src/App";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});
describe("<App /> rendering", () => {
  it("should render one <div>", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });
});
