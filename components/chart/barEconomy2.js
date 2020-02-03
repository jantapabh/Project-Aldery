import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'


const BarEconomy2 = () => {
    const [options, setOptions] = useState({
        title: {
            text: 'ที่มาของรายได้ของประชากรผู้สูงอายุ',
            align: 'left'
        },
        plotOptions: {
            bar: { horizontal: true }
        },
        responsive: [{
            breakpoint: 1000,
            options: {
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                legend: {
                    position: "bottom"
                }
            }
        }],
        dataLabels: { enabled: false },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            }
        }
    })
    const [series, setSeries] = useState([])
    const [dataName, setDataName] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!J52:J54')
        await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!L52:L54', 'ข้อมูลการวิเคราะห์ทางสถิติ!M52:M54')
    }

    const namelist = async (token, value) => {
        try {
            var list = await Sheetapi.getSheet(token, value)
            setDataName(_.flatten(list))

            setOptions({
                xaxis: {
                    categories: _.flatten(list),
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    const listData = async (token, value1, value2) => {
        try {

            var man = await Sheetapi.getSheet(token, value1)
            var woman = await Sheetapi.getSheet(token, value2)
            setSeries([{ name: "เพศชาย", data: _.flatten(man) }, { name: "เพศหญิง", data: _.flatten(woman) }])
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <React.Fragment>
            <div className="warp-chart-small">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="300"
                    width="325"
                />
            </div>

            <div className="warp-chart-mobile">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="325"
                    width="450"
                />
            </div>

            <div className="warp-chart-tablets">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="325"
                    width="450"
                />
            </div>

            <div className="warp-chart-desktops">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="350"
                    width="500"
                />
            </div>

            <div className="warp-chart-large">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="400"
                    width="470"
                />
            </div>
        </React.Fragment>
    )
}


// class BarEconomy2 extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             options: {},
//             datalist: [],
//             series: [],
//             dataMan: [],
//             dataWoman: [],

//         }
//     }

//     async componentDidMount() {
//         let userOauth = JSON.parse(localStorage.getItem("myOauth"))
//         this.access_token = userOauth.data.access_token
//         await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!N47:N49')
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
//                     title: {
//                         text: 'ที่มาของรายได้',
//                         align: 'left'
//                     },
//                     plotOptions: {
//                         bar: { horizontal: true }
//                     },
//                     responsive: [{
//                         breakpoint: 1000,
//                         options: {
//                             plotOptions: {
//                                 bar: {
//                                     horizontal: false
//                                 }
//                             },
//                             legend: {
//                                 position: "bottom"
//                             }
//                         }
//                     }],
//                     dataLabels: { enabled: false },
//                     stroke: {
//                         show: true,
//                         width: 1,
//                         colors: ['#fff']
//                     },

//                     xaxis: {
//                         categories: this.state.datalist,
//                     },
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

//             this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!P47:P49')
//             this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!Q47:Q49')

//             for (let i = 0; i < this.man.length; i++) {

//                 this.setState(prevState => ({
//                     dataMan: [...prevState.dataMan, this.man[i][0]],
//                 }))
//             }

//             for (let i = 0; i < this.woman.length; i++) {

//                 this.setState(prevState => ({
//                     dataWoman: [...prevState.dataWoman, this.woman[i][0]],
//                 }))
//             }

//             this.setState({
//                 series: [{ name: "เพศชาย", data: this.state.dataMan }, { name: "เพศหญิง", data: this.state.dataWoman }],
//             })

//         } catch (err) {
//             console.log(err);
//         }
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="warp-chart-small">
//                     <Chart options={this.state.options}
//                         series={this.state.series}
//                         type="bar"
//                         height="300"
//                         width="325"
//                     />
//                 </div>

//                 <div className="warp-chart-mobile">
//                     <Chart options={this.state.options}
//                         series={this.state.series}
//                         type="bar"
//                         height="325"
//                         width="450"
//                     />
//                 </div>

//                 <div className="warp-chart-tablets">
//                     <Chart options={this.state.options}
//                         series={this.state.series}
//                         type="bar"
//                         height="325"
//                         width="450"
//                     />
//                 </div>

//                 <div className="warp-chart-desktops">
//                     <Chart options={this.state.options}
//                         series={this.state.series}
//                         type="bar"
//                         height="350"
//                         width="500"
//                     />
//                 </div>

//                 <div className="warp-chart-large">
//                     <Chart options={this.state.options}
//                         series={this.state.series}
//                         type="bar"
//                         height="400"
//                         width="470"
//                     />
//                 </div>
//             </React.Fragment>

//         )
//     }
// }
export default BarEconomy2;