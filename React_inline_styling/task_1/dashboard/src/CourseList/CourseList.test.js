import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseList component test cases', () => {
  let courses; // or const courses = [];

  beforeEach(() => {
    courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
  });

  describe('With CourseList Empty', () => {
    it('renders the CourseList component without crashing', () => {
      shallow(<CourseList />);
    });

    it('renders correctly with an empty list of courses', () => {
      const wrapper = shallow(<CourseList listCourses={[]} />);
      expect(wrapper.exists()).toEqual(true);
      expect(wrapper.find('tr')).toHaveLength(1); // Header row
      expect(wrapper.find('td').text()).toContain('No course available yet'); // Empty message displayed
    });
  });

  describe('With CourseList containing elements', () => {
    it('should render 5 different rows', () => {
      const wrapper = shallow(<CourseList listCourses={courses} />);
      expect(wrapper.find('CourseListRow')).toHaveLength(5); // 3 from listCourses and 2 CourseListRow defined in CourseList component
    });

    it('renders the correct number of course rows', () => {
      const wrapper = shallow(<CourseList listCourses={courses} />);
      expect(wrapper.find('CourseListRow')).toHaveLength(courses.length + 2); // Header row + course rows
    });
  });
});
