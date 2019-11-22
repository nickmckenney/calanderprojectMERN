import React from "react";
import { shallow } from "enzyme";
import DeleteBirthday from "./DeleteBirthday";

const wrapper = shallow(<DeleteBirthday />);

expect(wrapper.find(".form-control")).toHaveStyle("width", "60%");