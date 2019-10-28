import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class Picchart2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {},
            datalist:[],
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

            console.log(this.state.datalist);
            
            this.setState({
                options: {
                    labels: this.state.datalist,
                    title: {
                        text: "เพศหญิง"
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
                    }]
                }
            })

        } catch (err) {
            console.log(err);
        }
    }

    listData = async () => {
        try {

            this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!D14:D18')

            for (let i = 0; i < this.woman.length; i++) {

                this.setState(prevState => ({
                    series: [...prevState.series, parseInt(this.woman[i][0])],
                }))
            }

        } catch (err) {
            console.log(err);
        }
    }

    render() {

        return (
            <div className="chart-center">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="donut"
                    width="500"
                />
            </div>
        );
    }
}

export default Picchart2;
