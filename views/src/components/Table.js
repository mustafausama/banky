import React from 'react';
import { Container, Table } from 'react-bootstrap';

const backendData = [
    { column1: 'Cell 1', column2: 'Cell 2' },
    { column1: 'Cell 3', column2: 'Cell 4' }
];

const MyTable = () => {
  return (
      <Container>
          <h1 style={{ textAlign: 'center' }}>Bank Account Details</h1>
      <div className="table-responsive">
        <Table className="table">
          <tbody>
            {backendData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default MyTable;
