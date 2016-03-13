import React from 'react';
import { Table } from 'react-bootstrap';

class Totals extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <Table striped condensed hover responsive>
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total events</td>
            <td>5200</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Totals;
