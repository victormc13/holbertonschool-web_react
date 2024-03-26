import React from 'react';
import PropTypes from 'prop-types';

const ROW_COLORS = {
  HEADER: '#deb5b545',
  DEFAULT: '#f5f5f5ab',
};

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const backgroundColor = isHeader ? ROW_COLORS.HEADER : ROW_COLORS.DEFAULT;
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={{ backgroundColor }}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={{ backgroundColor }}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={{ backgroundColor }}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
