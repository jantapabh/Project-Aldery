import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Bar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
      },
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
    }
  }

  render() {

    return (
      <div className="warp-chart">
        <Chart
         options={this.state.options} 
         series={this.state.series} 
         type="bar" width="700"  
         height="350" 
         width="700"
         />
      </div>
    );
  }
}

export default Bar;
