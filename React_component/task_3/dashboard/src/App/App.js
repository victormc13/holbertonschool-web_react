import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
    };
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications listNotifications={this.state.listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.state.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>More news soon... </p>
            </BodySection>
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

Notifications.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
