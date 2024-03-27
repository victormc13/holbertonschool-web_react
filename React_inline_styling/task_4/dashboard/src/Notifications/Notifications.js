import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

const opacityAnimation = {
  'from': {
    opacity: '0.5',
  },
  'to': {
    opacity: '1',
  },
};

const bounceAnimation = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)'
  }
}

const styles = StyleSheet.create({
  NotificationsContainer: {
    position: 'fixed',
    right: '10px',
    '@media (max-width: 900px)':{
      top: '0',
      right: '0'
    }
  },
  hiddeMenuItem: {
    display: 'none',
  },
  menuItem: {
    display: 'inline-block',
    float: 'right',
    zIndex: '99',
    height: '30px',
    lineHeight: '30px',
    backgroundColor: '#fff8f8',
  },
  menuItemOpacity: {
    ':hover': {
      animationName: opacityAnimation,
      animationDuration: '1s',
      animationIterationCount: '3'
    }
  },
  menuItemBounce: {
    ':hover': {
      cursor: 'pointer',
      animationName: bounceAnimation,
      animationDuration: '0.5s',
    }
  },
  notifications: {
    border: '1px dashed #e0354b',
    borderWidth: '2px',
    padding: '0.5rem',
    width: '50vmin',
    '@media (max-width: 900px)': {
      width: '100vw',
      height: '100vh',
      padding: '0',
      fontSize: '20px',
      backgroundColor: 'white'
    }
  },
  button: {
    padding: '0',
    float: 'right',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      position: 'relative',
      right: '10px',
      top: '10px'
    }
  },
  listItems: {
    '@media (max-width: 900px)': {
      padding: '0'
    }
  }
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const menuItemStyle = displayDrawer ? css(styles.hiddeMenuItem) : css(styles.menuItem, styles.menuItemOpacity, styles.menuItemBounce);

    return (
      <div className={css(styles.NotificationsContainer)}>
        <div className={menuItemStyle}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              aria-label="Close"
              className={css(styles.button)}
              onClick={this.handleButtonClick}
            >
              <img src={closeIcon} alt="Close icon" width="16px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.listItems)}>
              {listNotifications.length === 0 && (
                <tr>
                  <td colSpan={2}>No new notification for now</td>
                </tr>
              )}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  markAsRead={this.markAsRead}
                  {...notification}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
