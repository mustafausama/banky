import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Notification(variant, Heading, Message) {
  const [show, setShow] = useState(true);

  const floatingStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '9999',
  };

  return (
    <>
      <Alert show={show} variant={variant} style={floatingStyle}>
        <Alert.Heading>{Heading}</Alert.Heading>
        <p>{Message}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}> </Button>}
    </>
  );
}

export default Notification;
