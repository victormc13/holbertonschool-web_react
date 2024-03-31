import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow test cases when isHeader prop is true or false', () => {
  it('returns a th element with textFirstCell content and colSpan equal to 2 when textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="first cell"
        textSecondCell={null}
      />
    );
    expect(wrapper.find('tr th').prop('colSpan')).toBe('2');
  });

  it('returns two th elements when textSecondCell is present and different than null', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="first cell"
        textSecondCell="second cell"
      />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="first text cell"
        textSecondCell="second text cell"
      />
    );
    expect(wrapper.find('tr td')).toHaveLength(2);
  });
});
