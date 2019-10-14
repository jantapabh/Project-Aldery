import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Picchart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
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
            series: [44, 55, 41, 17, 15]
        }
    }

    render() {

        return (
            <div className="chart-center">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="donut"
                    width="380"
                />
            </div>
        );
    }
}

export default Picchart;
