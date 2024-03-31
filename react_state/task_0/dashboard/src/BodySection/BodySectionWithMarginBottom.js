import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  }
})

class BodySectionWithMarginBottom extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...{ title, children }} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
