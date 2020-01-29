import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

const PieChart = () => {

    const [options, setOptions] = useState({
        title: {
            text: "เพศหญิง"
        },
        dataLabels: { enabled: false },
        responsive: [{
            breakpoint: 900,
            options: {
                chart: {
                    width: 260,
                    height: 260
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
    })

    const [dataname, setDataName] = useState([])
    const [series, setSeries] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!E9:E13')
        await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!H9:H13')
    }

    const namelist = async (token, value) => {
        try {
            var list = await Sheetapi.getSheet(token, value)

            setOptions({
                labels: _.flatten(list)
            })
        } catch (err) {
            console.log(err);
        }
    }

    const listData = async (token, value) => {
        try {

            var result = await Sheetapi.getSheet(token, value)
            var data = _.flatten(result).map(Number)
            setSeries(data)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <React.Fragment>
            <div className="warp-chart-small">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="500"
                    height="250"
                />

            </div>

            <div className="warp-chart-mobile">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="500"
                    height="250"
                />
            </div>

            <div className="warp-chart-tablets">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="500"
                    height="250"
                />
            </div>

            <div className="warp-chart-desktops">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="500"
                    height="250"
                />
            </div>

            <div className="warp-chart-large">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="450"
                    height="250"
                />
            </div>
        </React.Fragment>
    )
}
export default PieChart
// class PieChart extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             options: {},
//             datalist: [],
//             series: [],
//         }
//     }

//     async componentDidMount() {
//         let userOauth = JSON.parse(localStorage.getItem("myOauth"))
//         this.access_token = userOauth.data.access_token
//         await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!B14:B18')
//         await this.listData()
//     }

//     listName = async (value) => {
//         try {
//             this.list = await Sheetapi.getSheet(this.access_token, value)
//             for (let i = 0; i < this.list.length; i++) {

//                 this.setState(prevState => ({
//                     datalist: [...prevState.datalist, this.list[i][0]],
//                 }))
//             }

//             this.setState({
//                 options: {
//                     labels: this.state.datalist,
//                     title: {
//                         text: "เพศหญิง"
//                     },
//                     responsive: [{
//                         breakpoint: 900,
//                         options: {
//                             chart: {
//                                 width: 260,
//                                 height: 260
//                             },
//                             legend: {
//                                 position: 'bottom'
//                             },
//                             dataLabels: { enabled: false },
//                         }
//                     }],
//                     tooltip: {
//                         y: {
//                             formatter: function (val) {
//                                 return val + " คน"
//                             }
//                         }
//                     }
//                 }
//             })

//         } catch (err) {
//             console.log(err);
//         }
//     }

//     listData = async () => {
//         try {

//             this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!D14:D18')

//             for (let i = 0; i < this.woman.length; i++) {

//                 this.setState(prevState => ({
//                     series: [...prevState.series, parseInt(this.woman[i][0])],
//                 }))
//             }

//         } catch (err) {
//             console.log(err);
//         }
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="warp-chart-small">
//                     <Chart
//                         options={this.state.options}
//                         series={this.state.series}
//                         type="donut"
//                         width="500"
//                         height="250"
//                     />

//                 </div>

//                 <div className="warp-chart-mobile">
//                     <Chart
//                         options={this.state.options}
//                         series={this.state.series}
//                         type="donut"
//                         width="500"
//                         height="250"
//                     />
//                 </div>

//                 <div className="warp-chart-tablets">
//                     <Chart
//                         options={this.state.options}
//                         series={this.state.series}
//                         type="donut"
//                         width="500"
//                         height="250"
//                     />
//                 </div>

//                 <div className="warp-chart-desktops">
//                     <Chart
//                         options={this.state.options}
//                         series={this.state.series}
//                         type="donut"
//                         width="500"
//                         height="250"
//                     />
//                 </div>

//                 <div className="warp-chart-large">
//                     <Chart
//                         options={this.state.options}
//                         series={this.state.series}
//                         type="donut"
//                         width="450"
//                         height="250"
//                     />
//                 </div>
//             </React.Fragment>
//         );
//     }
// }
// export default PieChart;
