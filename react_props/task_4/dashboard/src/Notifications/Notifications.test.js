import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe('Notificatinos component test cases', () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications renders three NotificationItem component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  })

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const notificationText = 'Here is the list of notifications';
    expect(wrapper.find('p').text()).toEqual(notificationText);
  })

  it('NotificationItem renders the right html', () => {
    const html = undefined; // The first NotificationItem doesn't have the html prop
    const notificationProps = [{type: 'defualt', value: 'test', html}]; 
    const wrapper = shallow(<Notifications notifications={notificationProps} />);
    const firstItem = wrapper.find('NotificationItem').first();
    expect(firstItem.props().html).toEqual(html);
  })

  it('renders div.menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  })

  it('should not render div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  })

  it('renders div.menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  })

  it('renders div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  })
});