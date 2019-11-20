import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class DonutSocial extends Component {

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
        await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!H102:H106')
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
                        text: "บ้านพักอาศัย"
                    },
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

            this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!I102:I106')

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
                <div className="chart-center">
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

export default DonutSocial;
