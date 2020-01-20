import React, { useState, useEffect }  from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

const PieHelp = () => {

  const [options, setOptions] = useState({
    title: { text: "สภาพความเดือดร้อนในปัจจุบัน" },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 290
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
    },

    colors: ['#2196f3', '#00d084', '#ffc107',
      '#eb144c', '#673ab7', '#abb8c3',
      '#f78da7', '#ff6900', '#7bdcb5']
  })

  const [series, setSeries] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!DL8:DL16')
    await listData(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!DM8:DM16')
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
          width="300"
          height="350"
        />
      </div>

      <div className="warp-chart-mobile">
        <Chart
          options={options}
          series={series}
          type="pie"
          width="450"
          height="300"
        />
      </div>

      <div className="warp-chart-tablets">
        <Chart
          options={options}
          series={series}
          type="pie"
          width="450"
          height="300"
        />
      </div>

      <div className="warp-chart-desktops">
        <Chart
          options={options}
          series={series}
          type="pie"
          width="450"
          height="300"
        />
      </div>

      <div className="warp-chart-large">
        <Chart
          options={options}
          series={series}
          type="pie"
          width="400"
          height="250"
        />
      </div>
    </React.Fragment>
  )
}
export default PieHelp;
