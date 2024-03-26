import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});

const styles = StyleSheet.create({
  courseListTable: {
    borderCollapse: 'separate',
    border: '1px solid #ddd',
    width: '100%',
  },
  courseListTBodyTd: {
    padding: '10px',
  }
})

const CourseList = ({ listCourses = [] }) => {
  return (
    <table id="CourseList" className={css(styles.courseListTable)}>
      <thead>
        <CourseListRow
          textFirstCell="Available courses"
          isHeader={true}
          textSecondCell={null}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <tr>
            <td colSpan={2} className={css(styles.courseListTBodyTd)}>No course available yet</td>
          </tr>
        )}
        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            isHeader={false}
            textFirstCell={course.name}
            textSecondCell={course.credit}
          />
        ))}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape).isRequired,
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
