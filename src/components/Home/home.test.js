import React from "react";
import Enzyme, { shallow } from "enzyme";
import {Home} from './home';
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('home', () => {
    const wrapper = shallow(<Home/>);
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
})