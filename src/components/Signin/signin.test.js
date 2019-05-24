import React from "react";
import Enzyme, { shallow } from "enzyme";
import axios from 'axios';
import EnzymeAdapter from "enzyme-adapter-react-16";
import SignIn from './signin';
jest.spyOn(axios, "post");
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('signin', () => {
    const wrapper = shallow(<SignIn/>);
    let user_info = {
        username: 'martino',
        password: 'Dkjmfkn@12'
    }
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('submits data correctly', () => {
        wrapper.find('[name="username"]').simulate('change', {target: {name:'username', value:'bill'}});
        wrapper.find('[name="password"]').simulate('change', {target: {name:'password', value:'Tintinabu@12'}});
        const button = wrapper.find('Button');
        // const onSubmit = jest.fn();
        // const wrapper_

        button.simulate("click", {
            preventDefault: () => {}
        });
        expect(wrapper.state('username')).toEqual('bill')
    })
    // it('logs in the user', () => {
    //     let history = {
    //         push: jest.fn()
    //     }
    //     axios.post.mockResolvedValue({
    //         status: 200,
    //         data
    //     })

    // })
})