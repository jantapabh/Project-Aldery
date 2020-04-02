import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';

const Barchart = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 768 })

  const [options, setOptions] = useState({
    title: {
      text: 'สถานภาพของผู้สูงอายุ',
      align: 'left'
    },
    responsive: [{
      breakpoint: 575.98,
      options: {
        legend: {
          position: "bottom",
          offsetY: 5
        },
      },
    }],
    chart: {
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    legend: {
      position: 'right',
      offsetY: 40
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
      categories: ["โสด",
        "สมรส",
        "หม้าย",
        "หย่าร้าง",
        "เเยกกันอยู่",
        "อื่นๆ"]
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
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!I9:I14')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!K9:K14', 'ข้อมูลการวิเคราะห์ทางสถิติ!L9:L14')
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
            height="285"
            width="600"
          />
      }
    </React.Fragment >
  )
}
export default Barchart;