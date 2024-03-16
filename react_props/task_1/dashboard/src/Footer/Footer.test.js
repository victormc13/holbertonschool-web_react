import React from 'react';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme';

describe('Footer component test cases', () => {
  it('renders the Footer component without crashing', () => {
    shallow(<Footer />);
  })

  it('the component renders p tag and contains the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toContain('Copyright');
  })
})