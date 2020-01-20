import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'



const PieDoc = () => {

  const [options, setOptions] = useState({
    title: { text: "สถานภาพการรับสวัสดิการจากรัฐ" },
    responsive: [{
      breakpoint: 800,
      options: {
        legend: {
          position: 'bottom'
        },
      }
    }],

    tooltip: {
      y: {
        formatter: function (val) {
          return val + " คน"
        }
      }
    },

    colors: ['#2196f3', '#00d084', '#ffc107',
      '#eb144c', '#673ab7', '#abb8c3',
      '#f78da7', '#ff6900', '#7bdcb5']
  })

  const [dataname, setDataName] = useState([])
  const [series, setSeries] = useState([])


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!L8:L16')
    await listData(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!M8:M12')
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
            type="pie"
            width="400"
            height="200"
          />
        </div>

        <div className="warp-chart-mobile">
          <Chart
            options={options}
            series={series}
            type="pie"
            width="600"
            height="300"
          />
        </div>

        <div className="warp-chart-tablets">
          <Chart
            options={options}
            series={series}
            type="pie"
            width="600"
            height="300"
          />
        </div>

        <div className="warp-chart-desktops">
          <Chart
            options={options}
            series={series}
            type="pie"
            width="600"
            height="300"
          />
        </div>

        <div className="warp-chart-large">
          <Chart
            options={options}
            series={series}
            type="pie"
            width="600"
            height="300"
          />
        </div>
      </React.Fragment>
  )
}

// class PieDoc extends Component {

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
//     await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!N11:N19')
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
//           title: { text: "สถานภาพการรับสวัสดิการจากรัฐ" },
//           responsive: [{
//             breakpoint: 800,
//             options: {
//               legend: {
//                 position: 'bottom'
//               },
//               // dataLabels: { enabled: false },
//             }
//           }],

//           tooltip: {
//             y: {
//               formatter: function (val) {
//                 return val + " คน"
//               }
//             }
//           },

//           colors: ['#2196f3', '#00d084', '#ffc107',
//             '#eb144c', '#673ab7', '#abb8c3',
//             '#f78da7', '#ff6900', '#7bdcb5']
//         }
//       })

//     } catch (err) {
//       console.log(err);
//     }
//   }

//   listData = async () => {
//     try {

//       this.list = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!O11:O19')

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
//       <React.Fragment>
//         <div className="warp-chart-small">
//         <Chart
//             options={this.state.options}
//             series={this.state.series}
//             type="pie"
//             width="400"
//             height="200"
//           />
//         </div>

//         <div className="warp-chart-mobile">
//           <Chart
//             options={this.state.options}
//             series={this.state.series}
//             type="pie"
//             width="600"
//             height="300"
//           />
//         </div>

//         <div className="warp-chart-tablets">
//           <Chart
//             options={this.state.options}
//             series={this.state.series}
//             type="pie"
//             width="600"
//             height="300"
//           />
//         </div>

//         <div className="warp-chart-desktops">
//           <Chart
//             options={this.state.options}
//             series={this.state.series}
//             type="pie"
//             width="600"
//             height="300"
//           />
//         </div>

//         <div className="warp-chart-large">
//           <Chart
//             options={this.state.options}
//             series={this.state.series}
//             type="pie"
//             width="600"
//             height="300"
//           />
//         </div>
//       </React.Fragment>

//     );
//   }
// }
export default PieDoc;
