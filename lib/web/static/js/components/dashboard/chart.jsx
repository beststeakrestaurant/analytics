import React from 'react';
import { Grid, Row, Col, Nav, NavItem, Label } from 'react-bootstrap';
import { Line } from 'react-chartjs';

class Chart extends React.Component {
  componentDidMount() {
  }
  render() {
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Events',
                fillColor: 'rgba(151,187,205,0.2)',
                strokeColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    const chartOptions = {
    };

    return (
      <Line data={chartData} options={chartOptions} height="250" />
    );
  }
}

export default Chart;
