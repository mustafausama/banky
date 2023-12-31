import React from 'react';
import { Container, Table } from 'react-bootstrap';

const MyTable = ({ data }) => {
  console.log('dasdsadsa', data);
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Bank Account Details</h1>
      <div className="table-responsive">
        <Table className="table">
          <tbody>
            {Object.keys(data).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{data[key]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default MyTable;
