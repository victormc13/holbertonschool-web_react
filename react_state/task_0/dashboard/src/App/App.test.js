import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

  it('should not render CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false}/>);
    expect(wrapper.find('CourseList').exists()).toBe(false)
  })

  it('should render CourseList and not Login when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('Login').exists()).toBe(false);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  })

  it('calls logOut prop and displays alert when Ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const windowAlerMock = jest.fn();
    window.alert = windowAlerMock;
    
    const wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />);

    // Simulate keydown event with Ctrl+h
    wrapper.instance().handleKeyDown({ ctrlKey: true, key: 'h' });

    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(windowAlerMock).toHaveBeenCalledWith('Logging you out');

    // Restore the original alert function after the test
    jest.spyOn(window, 'alert').mockRestore(); // Restore original alert behavior
  });

  it('Notifications drawer is hidden by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('handleDisplayDrawer shows the notifications drawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('handleHideDrawer hides the notifications drawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer(); // Show drawer first
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
});
