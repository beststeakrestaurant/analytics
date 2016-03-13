import React from 'react';
import { Table } from 'react-bootstrap';

class Event extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <Table striped condensed hover responsive>
        <thead>
          <tr>
            <th>Action</th>
            <th>Value</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Page view</td>
            <td>1200</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Menu Download</td>
            <td>111</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Reservations</td>
            <td>20</td>
            <td>2%</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Event;
