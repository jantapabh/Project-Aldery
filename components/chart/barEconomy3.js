import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

const BarEconomy = () => {
  const [options, setOptions] = useState({

    title: {
      text: 'รายจ่ายของประชากรผู้สูงอายุ',
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
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " คน"
        }
      }
    },
  })
  const [series, setSeries] = useState([])
  const [dataName, setDataName] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!N52:N54')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!P52:P54', 'ข้อมูลการวิเคราะห์ทางสถิติ!Q52:Q54')
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
        <Chart
          options={options}
          series={series}
          type="bar" height="350"
          width="450"
        />
      </div>

      <div className="warp-chart-tablets">
        <Chart
          options={options}
          series={series}
          type="bar" height="300"
          width="450"
        />
      </div>

      <div className="warp-chart-desktops">
        <Chart
          options={options}
          series={series}
          type="bar" height="245"
          width="500"
        />
      </div>

      <div className="warp-chart-large">
        <Chart
          options={options}
          series={series}
          type="bar"
          height="400"
          width="500"
        />
      </div>
    </React.Fragment>
  )
}
export default BarEconomy;
