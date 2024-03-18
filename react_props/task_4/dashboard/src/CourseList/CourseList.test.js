import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('CourseList component test cases', () => {
  it('renders the CourseList component without crashing', () => {
    shallow(<CourseList />)
  });


  it('should render 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  })
})