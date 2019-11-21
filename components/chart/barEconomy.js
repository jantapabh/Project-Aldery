import React from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'


class BarEconomy extends React.Component {
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
        await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!H47:H55')
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
                        text: 'รายได้เฉลี่ยต่อเดือน',
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
                        breakpoint: 150,
                        
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
                    yaxis: {
                        title: {
                            text: 'จำนวน'
                        }
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

            this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!J47:J55')
            this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!K47:K55')

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
                <div className="warp-chart">
                    <Chart options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="400"
                        width="600" />
                </div>
            </React.Fragment>

        )
    }
}
export default BarEconomy;