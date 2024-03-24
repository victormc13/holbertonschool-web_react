import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('withLogging HOC component', () => {
  // Mock console.log for Notifications tests
  const originalConsoleLog = console.log;
  const mockConsoleLog = jest.fn();
  beforeEach(() => {
    console.log = mockConsoleLog;
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  })

  it('Logs mount and unmount messages for pure HTML', () => {
    const EnhancedElement = WithLogging(() => <p />);

    const wrapper = shallow(<EnhancedElement />);

    expect(wrapper.exists()).toBe(true);
    wrapper.instance().componentDidMount();
    expect(mockConsoleLog).toHaveBeenCalledWith('Component Component mounted')
    wrapper.instance().componentWillUnmount();
    expect(mockConsoleLog).toHaveBeenCalledWith('Component Component will unmount')
  });

  it('Logs mount and unmount messages for a component', () => {
    const Login = () => <p>Login</p>; // Example component
    const EnhancedLogin = WithLogging(Login);
  
    const wrapper = shallow(<EnhancedLogin />)

    expect(wrapper.exists()).toBe(true);
    wrapper.instance().componentDidMount();
    expect(mockConsoleLog).toHaveBeenCalledWith('Component Login mounted');
  
    wrapper.instance().componentWillUnmount();
    expect(mockConsoleLog).toHaveBeenCalledWith('Component Login will unmount');
  });
});
