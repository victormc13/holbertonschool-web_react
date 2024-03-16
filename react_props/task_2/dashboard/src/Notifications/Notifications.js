import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  const buttonStyle = {
    float: 'right',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const latestNotification = getLatestNotification();

  return (
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
        <NotificationItem type="default" value="New course available"/>
        <NotificationItem type="urgent" value="New resume available"/>
        <NotificationItem type="urgent" html={{ __html: latestNotification }}/>
      </ul>
    </div>
  );
};

export default Notifications;
