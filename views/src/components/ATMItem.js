import { Accordion, Button, ListGroup } from 'react-bootstrap';
import { FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ATMItem = ({ location, atm, index }) => {
  const googleMapsLink = (query) =>
    `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header className="d-flex justify-content-between">
        <strong>
          #{index + 1}{' '}
          {location.lat !== null &&
          location.lat !== '' &&
          location.lng !== null &&
          location.lng !== ''
            ? 'Neareset'
            : ''}{' '}
          ATM{' '}
        </strong>
        <FaMapMarkerAlt className="mx-1" /> (ATM Ref. ID: {atm.atmId})
      </Accordion.Header>
      <Accordion.Body>
        <Button
          href={googleMapsLink(`${atm.latitude},${atm.longitude}`)}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mb-3 d-flex align-items-center justify-content-between"
          style={{ width: '5.3em' }}
        >
          Visit <FaExternalLinkAlt />
        </Button>
        {atm.addresses && atm.addresses.length > 0 ? (
          <>
            <p>
              <strong>Landmarks:</strong> {atm.addresses[0]}
            </p>
            {atm.addresses.length > 1 ? (
              <Accordion className="mb-1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>More adresses</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      {atm.addresses.slice(1).map((address, index) => (
                        <ListGroup.Item
                          key={index}
                          className="d-flex align-items-center justify-content-between"
                        >
                          {address}{' '}
                          <Button
                            href={googleMapsLink(address)}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mb-3 d-flex align-items-center justify-content-between"
                            style={{ width: '5.3em' }}
                          >
                            Visit <FaExternalLinkAlt />
                          </Button>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ) : null}
          </>
        ) : null}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ATMItem;
