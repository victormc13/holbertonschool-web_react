import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";

const Notifications = ({ displayDrawer = false }) => {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  const buttonStyle = {
    padding: '0',
    float: 'right',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const latestNotification = getLatestNotification();

  return (
    <div className="NotificationsContainer">
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            aria-label="Close"
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            <img src={closeIcon} alt="Close icon" width="16px" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: latestNotification }}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
