import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class BarHospital2 extends Component {

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
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.namelist('ข้อมูลการวิเคราะห์ทางสถิติ!B79:B91')
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
                        opacity: 1
                    },
                    xaxis: {
                        categories: this.state.dataName,
                    },
                    tooltip: {
                        y: {
                            formatter: function(val) {
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

            this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!D79:D91')
            this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!E79:E91')

            for (let i = 0; i < this.man.length; i++) {



                this.setState(prevState => ({
                    dataMan: [...prevState.dataMan, this.man[i][0]],
                }))
            }

            for (let i = 0; i < this.woman.length; i++) {

                this.setState(prevState => ({
                    dataWoman: [...prevState.dataWoman, this.woman[i][0]],
                }))
            }

            this.setState({
                series: [{ name: "เพศชาย", data: this.state.dataMan }, { name: "เพศหญิง", data: this.state.dataWoman }],
            })

        } catch (err) {
            console.log(err);
        }

    }

    render() {

        return (
            <div className="warp-chart">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="400"
                    width="700"
                />
            </div>
        );
    }
}

export default BarHospital2;
