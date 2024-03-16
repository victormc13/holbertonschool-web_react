import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe('App component', () => {
  it('renders the App without crashing', () => {
    shallow(<App />)
  });

  it('renders the Notification component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  })

  it('renders the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  })

  it('renders the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  })

  it('renders the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  })
});