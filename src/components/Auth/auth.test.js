import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Auths from './auth';

Enzyme.configure({ adapter: new EnzymeAdapter() });
jest.spyOn(global.console, "log").mockImplementation(() => {});

const props = {
    event: { preventDefault: () => {} }
}

const setup = (props, state = null) => {
    const wrapper = shallow(<Auths {...props} />);
    if(state) wrapper.setState(state);
    return wrapper
  };

  const findByTestAttr = (wrapper, id, val) => {
    return wrapper.find(`[${id}='${val}']`);
  };

  test("renders without error", () => {
    const wrapper = setup();
    // console.log(wrapper.debug());
    // expect(wrapper).toBeTruthy();
    const appComponent = findByTestAttr(wrapper, "className", "form-info");
    expect(appComponent.length).toBe(1);
  });

//   test("clicking button submits form", () => {
//         const wrapper = setup(props, null);
//         const form = wrapper.find("Form");
//         // const button = findByTestAttr(wrapper, "type", "submit");
//         // button.simulate('click');
//         form.simulate("click", {
//             preventDefault: () => {}
//         });
//         expect(console.log).toBeCalled();
//     });