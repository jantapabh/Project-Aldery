import React from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'


class BarSocial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {},
            datalist: [],
            series: [],
            dataMan: [],
            dataWoman: [],

        }
    }

    async componentDidMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!B102:B107')
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
                    title: {
                        text: 'ที่่ดิน',
                        align: 'left'
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '60%',
                            // endingShape: 'rounded'
                        },
                    },
                    responsive: [{
                        breakpoint: 10,
                    }],
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    xaxis: {
                        categories: this.state.datalist,
                    },
                   
                    fill: {
                        opacity: 1
                    },
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

            this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!D102:D107')
            this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!E102:E107')

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
            <React.Fragment>
                <div className="warp-chart-small">
                    <Chart options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="325"
                        width="290"
                    />
                </div>

                <div className="warp-chart-mobile">
                    <Chart options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="325"
                        width="400"
                    />
                </div>

                <div className="warp-chart-tablets">
                    <Chart options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="325"
                        width="450"
                    />
                </div>

                <div className="warp-chart-desktops">
                    <Chart options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="350"
                        width="500"
                    />
                </div>

                <div className="warp-chart-large">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="400"
                        width="500"
                    />
                </div>
            </React.Fragment>

        )
    }
}
export default BarSocial;