import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import axios, { googleWebService } from '../utils/api';
import { toast } from 'react-toastify';
import Accordion from 'react-bootstrap/Accordion';
import ATMItem from '../components/ATMItem';

const NearestAtm = () => {
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
  });

  const [atms, setAtms] = useState([]);

  useEffect(() => {
    if (location.lat === null && location.lng === null)
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        function () {
          setLocation({
            lat: '',
            lng: '',
          });
        }
      );

    if (location.lat !== null && location.lng !== null) {
      axios
        .get('/atm', {
          params:
            location.lat !== '' && location.lng !== ''
              ? {
                  latitude: location.lat,
                  longitude: location.lng,
                }
              : null,
        })
        .then(async (response) => {
          const atmpoints = [];
          for (let i = 0; i < response.data.length; i++) {
            atmpoints.push(response.data[i]);
            try {
              const addresses = await googleWebService
                .get('/geocode/json', {
                  params: {
                    latlng: `${response.data[i].latitude},${response.data[i].longitude}`,
                  },
                })
                .then((res) => {
                  return res.data.results
                    .map((result) => result.formatted_address)
                    .filter(
                      (address) =>
                        !address.includes('+') || address.includes(' ')
                    );
                })
                .catch((err) => console.log(err));
              atmpoints[i].addresses = addresses;
            } catch (err) {
              console.log(err);
            }
          }
          setAtms(atmpoints);
        })
        .catch((err) => {
          console.log(err);
          const { errors } = err.response.data;
          if (!errors || !Array.isArray(errors) || !errors.length)
            return console.log(err);
          const { message } = errors[0];
          if (message) toast.error(message);
        });
    }
  }, [location]);

  return (
    <Container className="p-3">
      <h1>Nearest ATMs</h1>
      {location.lat === null && location.lng === null ? (
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Please allow location access to find the nearest ATM. If you are
            using a mobile device, please make sure location services are
            enabled.
          </p>
        </Alert>
      ) : (
        <>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </>
      )}

      <Accordion defaultActiveKey={0}>
        {atms.length > 0
          ? atms.map((atm, index) => (
              <ATMItem
                key={atm.atmId}
                location={location}
                atm={atm}
                index={index}
              />
            ))
          : 'Loading...'}
      </Accordion>
    </Container>
  );
};

export default NearestAtm;
