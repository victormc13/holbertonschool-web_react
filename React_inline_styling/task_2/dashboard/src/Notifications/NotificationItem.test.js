import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationsItem test cases', () => {
  it('renders the component without crashing', () => {
    shallow(<NotificationItem />);
  })

  it('renders correctly using type and value props',() => {
    const wrapper = shallow(<NotificationItem type="default" value="test"/>);
    expect(wrapper.find('li[data-notification-type="default"]').text()).toBe('test');
  })

  it('renders correctly using html prop',() => {
    const html = { __html: '<u>testing</u>' };
    const wrapper = shallow(<NotificationItem html={html}/>);
    expect(wrapper.find('li').html()).toContain('<u>testing</u>');
  })

  it('calls markAsRead with the correct ID on click', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem id={42} markAsRead={markAsReadSpy} />);
  
    wrapper.find('li').simulate('click');
  
    expect(markAsReadSpy).toHaveBeenCalledWith(42);
  });
})