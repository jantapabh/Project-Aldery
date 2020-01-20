import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import Sheetapi from '../../config/api'

const LineHelp = () => {
  const [options, setOptions] = useState({
    chart: {
      shadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1
      },
      toolbar: {
        show: false
      }
    },
    responsive: [{
      breakpoint: 900,
      options: {
        dataLabels: { enabled: false },
        legend: {
          position: 'top',
          horizontalAlign: 'center',
          offsetY: -10,
          offsetX: -5

        },
      }
    }],
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'ความต้องการให้หน่วยงานของรัฐช่วยเหลือ',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    markers: {

      size: 6
    },
    yaxis: {
      min: 0,
      max: 60
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " คน"
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    },

    colors: ['#0693e3', '#00d084']
  })

  const [series, setSeries] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!DP8:DP16')
    await listData(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!DR8:DR16', 'สรุปข้อมูลทางสถิติ!DS8:DS16')
  }

  const namelist = async (token, value) => {
    try {
      var list = await Sheetapi.getSheet(token, value)

      setOptions({
        xaxis: {
          categories: _.flatten(list)
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
        <Chart
          options={options}
          series={series}
          type="line"
          height="400"
          width="300"
        />
      </div>

      <div className="warp-chart-mobile">
        <Chart
          options={options}
          series={series}
          type="line"
          height="400"
          width="500"
        />
      </div>

      <div className="warp-chart-tablets">
        <Chart
          options={options}
          series={series}
          type="line"
          height="400"
          width="700"
        />
      </div>

      <div className="warp-chart-desktops">
        <Chart
          options={options}
          series={series}
          type="line"
          height="400"
          width="700"
        />
      </div>

      <div className="warp-chart-large">
        <Chart
          options={options}
          series={series}
          type="line"
          height="325"
          width="625"
        />
      </div>
    </React.Fragment>
  )
}
export default LineHelp;