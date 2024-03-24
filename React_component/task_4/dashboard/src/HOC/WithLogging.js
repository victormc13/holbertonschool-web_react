import React from 'react';

const withLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  WithLogging.displayName = `WithLogging(${WrappedComponent.name})`;

  return WithLogging;
};

export default withLogging;
