import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'

class BodySectionWithMarginBottom extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...{title, children}} />
      </div>
    )
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;