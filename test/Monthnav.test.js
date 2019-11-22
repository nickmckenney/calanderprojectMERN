import Monthnav from "../src/components/Monthnav/Monthnav";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<Monthnav />);
});
describe("<Monthnav /> rendering", () => {
  it("should render one <div>", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
  it("should render two <button>", () => {
    expect(wrapper.find("button")).toHaveLength(2);
  });
  it("should render with class of arrow x 2", () => {
    expect(wrapper.find(".arrow ")).toHaveLength(2);
  });
  
});
