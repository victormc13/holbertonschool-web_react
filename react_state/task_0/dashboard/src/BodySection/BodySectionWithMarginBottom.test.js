import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom component', () => {
  it('renders correctly and passes props to child BodySection component', () => {
    const title = 'Test title';
    const children = <p>Test children</p>;
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title} children={children} />
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).props()).toEqual({title, children})
  });
});
