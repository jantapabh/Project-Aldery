import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';

const BarEconomy = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 })

  const [options, setOptions] = useState({
    title: {
      text: 'รายจ่ายของประชากรผู้สูงอายุ',
      align: 'left'
    },
    plotOptions: {
      bar: { horizontal: false }
    },
    dataLabels: { enabled: false },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " คน"
        }
      }
    },
    xaxis: {
      categories: ["เพียงพอต่อการใช้จ่าย", "พออยู่ได้", "ไม่เพียงพอต่อการใช้จ่าย"]
    }
  })
  const [series, setSeries] = useState([
    {
      name: 'เพศชาย',
      data: [50, 50, 50, 50, 50]
    },
    {
      name: 'เพศหญิง',
      data: [50, 50, 50, 50, 50]
    }
  ])

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
      {
        isSmallScreen ?
          <Chart
            options={options}
            series={series}
            type="bar"
            height="300"
            width="300"
          />
          :
          <Chart
            options={options}
            series={series}
            type="bar"
            height="300"
            width="500"
          />
      }
    </React.Fragment>
  )
}
export default BarEconomy;
