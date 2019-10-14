import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Picchart_2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
          options: {
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          series: [44, 55, 13, 43, 22],
        }
      }

    render() {

        return (
            <div className="chart-center">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="pie"
                    width="380"
                />
            </div>
        );
    }
}

export default Picchart_2;
