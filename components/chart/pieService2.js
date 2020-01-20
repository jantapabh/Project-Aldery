import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

const PieService2 = () => {
    const [options, setOptions] = useState({
        title: { text: "การเข้าร่วมกิจกรรมทางศาสนกิจ" },
        responsive: [{
            breakpoint: 900,
            options: {
                chart: {
                    width: 300
                },
                legend: {
                    position: 'bottom'
                },
                dataLabels: { enabled: false }
            }
        }],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            }
        },
        colors: ['#8ed1fc', '#7bdcb5', '#d3b3e5']
    })

    const [dataname, setDataName] = useState([])
    const [series, setSeries] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!CZ8:CZ11')
        await listData(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!DA8:DA11')
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

            var manData = await Sheetapi.getSheet(token, value)
            var data = _.flatten(manData).map(Number)
            setSeries(data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Chart
            options={options}
            series={series}
            type="pie"
            height="300"
            width="500"

        />
    )
}


// class PieService2 extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {

//       options: {},
//       datalist: [],
//       series: [],
//       data: [],
//     }
//   }


//   async componentDidMount() {
//     let userOauth = JSON.parse(localStorage.getItem("myOauth"))
//     this.access_token = userOauth.data.access_token
//     await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!B126:B128')
//     await this.listData()
//   }

//   listName = async (value) => {
//     try {
//       this.list = await Sheetapi.getSheet(this.access_token, value)
//       for (let i = 0; i < this.list.length; i++) {

//         this.setState(prevState => ({
//           datalist: [...prevState.datalist, this.list[i][0]],
//         }))
//       }

//       this.setState({
//         options: {
//           labels: this.state.datalist,
//           title: { text: "การเข้าร่วมกิจกรรมทางศาสนกิจ" },
//           responsive: [{
//             breakpoint: 900,
//             options: {
//               chart: {
//                 width: 300
//               },
//               legend: {
//                 position: 'bottom'
//               },
//               dataLabels: { enabled: false }
//             }
//           }],

//           tooltip: {
//             y: {
//               formatter: function (val) {
//                 return val + " คน"
//               }
//             }
//           },

//           colors: ['#8ed1fc', '#7bdcb5', '#d3b3e5']
//         }
//       })

//     } catch (err) {
//       console.log(err);
//     }
//   }

//   listData = async () => {
//     try {

//       this.list = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!C126:C128')

//       for (let i = 0; i < this.list.length; i++) {

//         this.setState(prevState => ({
//           data: [...prevState.data, parseInt(this.list[i][0])],
//         }))
//       }

//       this.setState({
//         series: this.state.data,
//       })

//     } catch (err) {
//       console.log(err);
//     }

//   }

//   render() {

//     return (
//       <Chart
//         options={this.state.options}
//         series={this.state.series}
//         type="pie"
//         height="300"
//         width="500"

//       />
//     );
//   }
// }

export default PieService2;
