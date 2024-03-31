import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#deb5b545',
    borderBottom: '2px solid #ddd',
    padding: '10px',
  },
  default: {
    backgroundColor: '#f5f5f5ab',
    padding: '10px',
  },
});

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const backgroundColor = isHeader ? css(styles.header) : css(styles.default);
  if (isHeader) {
    if (textSecondCell === null) {
      return (  
        <tr>
          <th className={backgroundColor} colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className={backgroundColor} style={{textAlign: 'left'}}>{textFirstCell}</th>
          <th className={backgroundColor} style={{textAlign: 'left'}}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td className={backgroundColor}>{textFirstCell}</td>
        <td className={backgroundColor}>{textSecondCell}</td>
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
