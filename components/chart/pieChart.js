import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class PieChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {},
            datalist: [],
            series: [],
        }
    }

    async componentDidMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!B14:B18')
        await this.listData()
    }

    listName = async (value) => {
        try {
            this.list = await Sheetapi.getSheet(this.access_token, value)
            for (let i = 0; i < this.list.length; i++) {

                this.setState(prevState => ({
                    datalist: [...prevState.datalist, this.list[i][0]],
                }))
            }

            this.setState({
                options: {
                    labels: this.state.datalist,
                    title: {
                        text: "เพศชาย"
                    },
                    responsive: [{
                        breakpoint: 900,
                        options: {
                            chart: {
                                width: 250
                            },
                            legend: {
                                position: 'bottom'
                            },
                            dataLabels: { enabled: false },
                        }
                    }],
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + " คน"
                            }
                        }
                    }
                }

            })

        } catch (err) {
            console.log(err);
        }
    }

    listData = async () => {
        try {

            this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!C14:C18')
            this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!D14:D18')

            for (let i = 0; i < this.man.length; i++) {

                this.setState(prevState => ({
                    series: [...prevState.series, parseInt(this.man[i][0])],
                }))
            }

        } catch (err) {
            console.log(err);
        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="warp-chart-small">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="donut"
                        width="500"
                        height="250"
                    />

                </div>

                <div className="warp-chart-mobile">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="donut"
                        width="500"
                        height="250"
                    />
                </div>

                <div className="warp-chart-tablets">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="donut"
                        width="500"
                        height="250"
                    />
                </div>

                <div className="warp-chart-desktops">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="donut"
                        width="500"
                        height="250"
                    />
                </div>

                <div className="warp-chart-large">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="donut"
                        width="500"
                        height="250"
                    />
                </div>
            </React.Fragment>

        );
    }
}

export default PieChart;
