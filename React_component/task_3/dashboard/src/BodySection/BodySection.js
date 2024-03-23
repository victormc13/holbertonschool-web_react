import React from 'react';
import PropTypes from 'prop-types';

class BodySection extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="bodySection">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node, // Can be any React element
};

export default BodySection;