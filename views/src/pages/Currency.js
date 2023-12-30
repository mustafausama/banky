import React, { useState, useEffect } from 'react';
import {
  Table,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { FaMoneyBillAlt } from 'react-icons/fa';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import axios from '../utils/api';
import { toast } from 'react-toastify';

const Currency = () => {
  const [originalCurrencies, setOriginalCurrencies] = useState([]);

  const [currencies, setCurrencies] = useState(originalCurrencies);
  const [searchQuery, setSearchQuery] = useState('');
  const [minExchangeRate, setMinExchangeRate] = useState(0);
  const [maxExchangeRate, setMaxExchangeRate] = useState(100);
  const [originalMinExchangeRate, setOriginalMinExchangeRate] = useState(0);
  const [originalMaxExchangeRate, setOriginalMaxExchangeRate] = useState(100);

  useEffect(() => {
    axios
      .get('/currency/all')
      .then((response) => {
        console.log(response.data);
        if (response.data && Array.isArray(response.data)) {
          let smallestExchangeRate = 100000.1,
            largestExchangeRate = -1.1;
          response.data.forEach((currency) => {
            console.log(currency);
            console.log(currency.exchange);
            console.log(currency.exchange);
            console.log(currency.exchange);

            if (currency.exchange < smallestExchangeRate) {
              smallestExchangeRate = Math.max(0, currency.exchange);
            }
            if (currency.exchange > largestExchangeRate) {
              largestExchangeRate = Math.min(100000, currency.exchange);
            }
          });
          setOriginalCurrencies(response.data);

          smallestExchangeRate -= 1;
          smallestExchangeRate += 1;
          if (smallestExchangeRate % 1 !== 0) {
            smallestExchangeRate -= 1;
            smallestExchangeRate = Math.max(0, smallestExchangeRate);
          }
          if (smallestExchangeRate % 1 !== 0) {
            smallestExchangeRate += 1;
          }
          setOriginalMinExchangeRate(smallestExchangeRate);
          setOriginalMaxExchangeRate(largestExchangeRate);
          setMinExchangeRate(smallestExchangeRate);
          setMaxExchangeRate(largestExchangeRate);
        }
      })
      .catch((err) => {
        console.log(err);
        const { errors } = err.response?.data;
        const { message } = errors[0];
        if (message) toast.error(message);
      });
  }, []);

  useEffect(() => {
    const filteredCurrencies = originalCurrencies.filter((currency) => {
      const matchesSearchQuery =
        currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        currency.symbol.toLowerCase().includes(searchQuery.toLowerCase());
      const withinExchangeRate =
        currency.exchange >= minExchangeRate &&
        currency.exchange <= maxExchangeRate;
      return matchesSearchQuery && withinExchangeRate;
    });

    setCurrencies(filteredCurrencies);
  }, [searchQuery, minExchangeRate, maxExchangeRate, originalCurrencies]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="mt-5 mb-5">
            <Card.Header as="h5">
              <FaMoneyBillAlt /> Currency Exchange Rates
            </Card.Header>
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Search</InputGroup.Text>
                <FormControl
                  placeholder="Currency name or symbol"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
              <RangeSlider
                min={originalMinExchangeRate}
                max={originalMaxExchangeRate}
                step={0.1}
                value={[minExchangeRate, maxExchangeRate]}
                onInput={([min, max]) => {
                  setMinExchangeRate(min);
                  setMaxExchangeRate(max);
                }}
              />
              <p className="mt-3 d-flex justify-content-between">
                <span>
                  <strong>Min:</strong> {minExchangeRate}
                </span>
                <span>
                  <strong>Max:</strong> {maxExchangeRate}{' '}
                </span>
              </p>
              <Table striped bordered hover className="mt-3">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Exchange Rate (to USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {currencies
                    .sort((a, b) => a.symbol.localeCompare(b.symbol))
                    .map((currency) => (
                      <tr key={currency.currencyId}>
                        <td>{currency.name}</td>
                        <td>{currency.symbol}</td>
                        <td>{currency.exchange}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Currency;
