import React from 'react';
import Login from '../Login/Login';
import { shallow } from 'enzyme';

describe('Login component test cases', () => {
  it('renders the Login component without crashing', () => {
    shallow(<Login />);
  })

  it('the component renders input and label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  })
})