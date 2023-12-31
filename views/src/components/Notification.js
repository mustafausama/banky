import { useEffect, useState } from 'react';
import axios from '../utils/api';
import { Container, ListGroup } from 'react-bootstrap';

function Notification({ setNotificationCount, page, notificationsProp }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (page === true)
      axios
        .get('/notification/all')
        .then(({ data }) => setNotifications(data))
        .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    if (notificationsProp) setNotifications(notificationsProp);
  }, [notificationsProp]);

  useEffect(() => {
    if (setNotificationCount) setNotificationCount(notifications.length);
  }, [notifications, setNotificationCount]);
  const NotificationList = ({ limit }) => {
    const notificationsToDisplay = limit
      ? notifications.slice(0, limit)
      : notifications;

    return (
      <ListGroup className="text-center">
        {notificationsToDisplay.map((notification) => (
          <ListGroup.Item
            action
            key={notification.id}
            style={
              page === true
                ? null
                : {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '200px',
                  }
            }
          >
            {notification.message}
            <br />
            <small>{notification.date}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };
  return (
    <>
      {page === true ? (
        <Container className="my-5">
          <h2 className="text-center mb-5">Notifications list</h2>
          <NotificationList />
        </Container>
      ) : (
        <NotificationList limit={5} />
      )}
    </>
  );
}

export default Notification;
