import React from 'react'
import Chart from "react-apexcharts";

class RadarChart extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     options: {
        //         chart: {
        //             toolbar: {
        //                 show: false
        //             },
        //             dropShadow: {
        //                 enabled: true,
        //                 blur: 1,
        //                 left: 1,
        //                 top: 1
        //             },
        //         },
        //         labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
        //         title: {
        //             text: 'Radar Chart - Multi Series'
        //         },
        //         stroke: {
        //             width: 0
        //         },
        //         fill: {
        //             opacity: 0.4
        //         },
        //         markers: {
        //             size: 0
        //         }
        //     },
        //     series: [{
        //         name: 'Series 1',
        //         data: [80, 50, 30, 40, 100, 20],
        //     }, {
        //         name: 'Series 2',
        //         data: [20, 30, 40, 80, 20, 80],
        //     }, {
        //         name: 'Series 3',
        //         data: [44, 76, 78, 13, 43, 10],
        //     }]
        // }

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
        await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!B14:B18')
        await this.listData()
    }

    listName = async (value) => {
        try{
          this.list = await Sheetapi.getSheet(this.access_token, value)
          for (let i = 0; i < this.list.length; i++) {
    
            this.setState(prevState => ({
              datalist: [...prevState.datalist, this.list[i][0]],
            }))
          }
          this.setState({
    
            options: {
              
            }
    
          })
    
        }catch (err) {
          console.log(err);
        }
      }


    render() {
        return (
            <React.Fragment>

                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="radar"
                    height="350"
                />
            </React.Fragment>
        )
    }
}
export default RadarChart;