import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const NearestAtm = () => {
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
  });

  // send request to server to get nearest atm
  // const getNearestAtm = async () => {
  return (
    <Container className="p-3">
      {navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      })}

      <h1>Nearest ATM</h1>

      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
      <Card>
        <Card.Header as="h5">Bank Name</Card.Header>
        <Card.Body>
          <Card.Title>Location</Card.Title>
          <Card.Text>details about the atm location, address, etc.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header as="h5">Bank Name</Card.Header>
        <Card.Body>
          <Card.Title>Location</Card.Title>
          <Card.Text>details about the atm location, address, etc.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NearestAtm;

function WithHeaderStyledExample() {
  return (
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
