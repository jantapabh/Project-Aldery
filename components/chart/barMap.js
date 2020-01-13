import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class BarMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {},
            series: [],
            dataList: [],
            dataName: [],
            dataMan: [],
            dataWoman: []
        }
    }

    async componentDidMount() {
        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.namelist('ข้อมูลการวิเคราะห์ทางสถิติ!D197:D213')
        await this.listData()

    }

    namelist = async (value) => {

        try {

            this.list = await Sheetapi.getSheet(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {

                this.setState(prevState => ({
                    dataName: [...prevState.dataName, this.list[i][0]],
                }))
            }

            this.setState({

                options: {
                    chart: {
                        height: 350,
                        type: 'bar',
                        stacked: true,
                        toolbar: {
                            show: true
                        },
                        zoom: {
                            enabled: true
                        }
                    },
                    dataLabels: { enabled: false },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                        },
                    },
                    legend: {
                        position: 'right',
                        offsetY: 40
                    },
                    fill: {
                        opacity: 1,
                        colors: ['#00d084']
                    },
                    xaxis: {
                        categories: this.state.dataName,
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + " คน"
                            }
                        }
                    },

                }


            })


        } catch (err) {
            console.log(err);
        }

    }

    listData = async () => {
        try {

            this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!E197:E213')

            for (let i = 0; i < this.man.length; i++) {



                this.setState(prevState => ({
                    dataMan: [...prevState.dataMan, this.man[i][0]],
                }))
            }

            this.setState({
                series: [{ name: "จำนวน", data: this.state.dataMan }],
            })

        } catch (err) {
            console.log(err);
        }

    }

    render() {

        return (
            <React.Fragment>
                <div className="warp-chart-small">
                    <Chart options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="300"
                        width="350"
                    />
                </div>

                <div className="warp-chart-mobile">
                    <Chart options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="300"
                        width="450"
                    />
                </div>

                <div className="warp-chart-tablets">
                    <Chart options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="325"
                        width="500"
                    />
                </div>

                <div className="warp-chart-desktops">
                    <Chart options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="350"
                        width="650"
                    />
                </div>

                <div className="warp-chart-large">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="400"
                        width="650"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default BarMap;