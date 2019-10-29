import React from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'


class Barchart3 extends React.Component {
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
        await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!N11:N19')
        // await this.listData()
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
                    chart: {
                        stacked: true
                    },
                    colors: ['#008FFB', '#FF4560'],
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            barHeight: '80%',

                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        width: 1,
                        colors: ["#fff"]
                    },

                    grid: {
                        xaxis: {
                            showLines: false
                        }
                    },
                    yaxis: {
                        min: -5,
                        max: 5,
                        title: {
                            // text: 'Age',
                        },
                    },
                    tooltip: {
                        shared: false,
                        x: {
                            formatter: function (val) {
                                return val
                            }
                        },
                        y: {
                            formatter: function (val) {
                                return Math.abs(val) + "%"
                            }
                        }
                    },
                    title: {
                        text: 'Mauritius population pyramid 2011'
                    },
                    xaxis: {
                        categories: this.state.datalist,
                        title: {
                            text: 'Percent'
                        },
                        labels: {
                            formatter: function (val) {
                                return Math.abs(Math.round(val)) + "%"
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
    
          this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!P11:P19')
          this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!Q11:Q19')
    
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
            series: [{ name:"เพศชาย", data: this.state.dataMan },{ name:"เพศหญิง", data: this.state.dataWoman }],
          })
    
        } catch (err) {
          console.log(err);
        }
    
      }


    render() {
        return (
            <div className="warp-chart">
                <Chart options={this.state.options} series={this.state.series} type="bar" height="500" width="1000" />
            </div>
        )
    }
}
export default Barchart3;