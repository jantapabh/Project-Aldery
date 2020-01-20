import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

// class PieService extends Component {

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
//     await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!B119:B121')
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
//           title: { text: "การเข้าร่วมกิจกรรมทางสังคม/เทศบาล" },
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

//           colors: ['#ff8a65', '#ffd54f', '#90a4ae']
//         }
//       })

//     } catch (err) {
//       console.log(err);
//     }
//   }

//   listData = async () => {
//     try {

//       this.list = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!C119:C121')

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

export default PieService;
