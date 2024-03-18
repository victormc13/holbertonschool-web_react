import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

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
})