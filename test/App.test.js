import App from "../src/App";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});
describe("<Add /> rendering", () => {
  it("should render one <div>", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  }); 
});
