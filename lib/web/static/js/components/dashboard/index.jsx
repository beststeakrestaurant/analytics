import React from 'react';
import { Grid, Row, Col, Nav, NavItem, Label } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import Chart from './chart';
import EventsList from './events';
import Totals from './totals';

class Dashboard extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <h1>Mastro's Company Analytics
              <DateRangePicker startDate={moment("2016-04-01T01:32:21.196Z")} endDate={moment("2016-04-30T01:32:21.196Z")} className="dateSelector">
                <Label>Feb 11, 2016-Mar 12, 2016</Label>
              </DateRangePicker>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3} className="sidebar">
            <Nav bsStyle="pills" activeKey={1}>
              <NavItem eventKey={1} href="/">Mastro's Ocean</NavItem>
              <NavItem eventKey={2} title="Item">Mastro's Chicago</NavItem>
              <NavItem eventKey={3}>Mastro's Miami</NavItem>
            </Nav>
          </Col>
          <Col xs={12} sm={9} className="content">
            <Chart/>
          <Row>
            <Col xs={12} sm={7}>
              <EventsList />
            </Col>
            <Col xs={12} sm={5}>
              <Totals />
            </Col>
          </Row>

          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
