import React from "react";
import { shallow } from "enzyme";
import { Notifications } from "./Notifications";

describe('Notificatinos component', () => {
  it('Notifications renders without crashing', () => {
    expect(shallow(<Notifications />));
  });

  it('Notificatins renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  })

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const notificationText = 'Here is the list of notifications';
    expect(wrapper.find('p').text()).toEqual(notificationText);
  })
});