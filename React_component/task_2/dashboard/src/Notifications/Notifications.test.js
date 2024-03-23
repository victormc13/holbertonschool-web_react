import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notificatinos component test cases', () => {
  let listNotifications;
  // Mock console.log for Notifications tests
  const originalConsoleLog = console.log;
  const mockConsoleLog = jest.fn();

  beforeEach(() => {
    console.log = mockConsoleLog; // Replace console.log with spy
    listNotifications = [
      { id: 1, type: 'default', value: 'Test notification 1' },
      { id: 2, type: 'urgent', value: 'Test notification 2' },
    ];
  });

  afterEach(() => {
    console.log = originalConsoleLog; // Restore original console.log
  });

  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications renders three NotificationItem component', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find('NotificationItem')).toHaveLength(
      listNotifications.length
    );
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const notificationText = 'Here is the list of notifications';
    expect(wrapper.find('p').text()).toEqual(notificationText);
  });

  it('NotificationItem renders the right html', () => {
    const html = undefined; // The first NotificationItem doesn't have the html prop
    const notificationProps = [{ type: 'defualt', value: 'test' }];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={notificationProps}
        listNotifications={listNotifications}
      />
    );
    const firstItem = wrapper.find('NotificationItem').first();
    expect(firstItem.props().html).toEqual(html);
  });

  it('renders div.menuItem when displayDrawer is false', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  });

  it('should not render div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });

  it('renders div.menuItem when displayDrawer is true', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  });

  it('renders div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });

  it('renders correctly with an empty list of notifications', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('.menuItem')).toHaveLength(1); // Menu item should be displayed
    expect(wrapper.find('td').text()).toContain('No new notification for now'); // Empty message displayed
  });

  it('renders the correct number of NotificationItem components', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Test notification 1' },
      { id: 2, type: 'urgent', value: 'Test notification 2' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );
    expect(wrapper.find('NotificationItem')).toHaveLength(notifications.length); // Matches notification count
  });

  it('does not display the "Here is the list of notifications" message when list is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.text()).not.toContain('Here is the list of notifications'); // Empty message displayed
  });

  it('calls markAsRead with the correct ID and logs message', () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance(); // Get the component instance

    const notificationId = 10;
    instance.markAsRead(notificationId);

    expect(mockConsoleLog).toHaveBeenCalledWith(
      `Notification ${notificationId} has been marked as read`
    );
  });
});
