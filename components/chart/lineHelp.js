import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';

const LineHelp = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 768 })

  const [options, setOptions] = useState({
    title: {
      text: 'ความต้องการให้หน่วยงานรัฐช่วยเหลือ',
      align: 'center'
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
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom',
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " คน"
        }
      }
    },
    xaxis: {
      categories: ["ไม่ต้องการ", "ปัญหาด้านการประกอบอาชีพ", "ปัญหาด้านหนี้สิน", "ปัญหาด้านที่พักอาศัย", "ปัญหาด้านสุขภาพ", "อื่นๆ", "มากกว่า 1 ข้อ", "มากกว่า 3 ข้อ", "ทุกข้อ"]
    },

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
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B172:B180')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!D172:D180', 'ข้อมูลการวิเคราะห์ทางสถิติ!E172:E180')
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
            height="400"
            width="600"
          />
      }
    </React.Fragment >
  )
}
export default LineHelp;