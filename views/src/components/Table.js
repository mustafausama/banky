import React from 'react';
import { Container, Table } from 'react-bootstrap';



const MyTable = ({data}) => {
  return (
      <Container>
          <h1 style={{ textAlign: 'center' }}>Bank Account Details</h1>
      <div className="table-responsive">
        <Table className="table">
          <tbody>
            {data.map((row, rowIndex) => (
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
