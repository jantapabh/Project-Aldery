import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

const PieEconomy2 = () => {

  const [options, setOptions] = useState({
    title: { text: "อาชีพ" },
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
    colors: ['#8ed1fc', '#7bdcb5', '#d3b3e5', '#ffd54f', '#ff8a65', '#90a4ae']
  })

  const [series, setSeries] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B52:B57')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!C52:C57')
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
          height="300"
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
          width="450"
          height="300"
        />
      </div>
    </React.Fragment>
  )
}
export default PieEconomy2;
